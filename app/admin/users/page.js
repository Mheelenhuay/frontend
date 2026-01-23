'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const API_URL = "https://back-end-dusky-three.vercel.app";
// const API_URL = "https://YOUR_BACKEND.vercel.app";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ✅ โหลด users
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const res = await fetch(`${API_URL}/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Load users failed");

      setUsers(data);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "โหลดข้อมูลไม่สำเร็จ ❌",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ delete user
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "ข้อมูลนี้จะถูกลบถาวร!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ลบ",
      cancelButtonText: "ยกเลิก",
    });

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Delete failed");

      Swal.fire({
        icon: "success",
        title: "ลบสำเร็จ ✅",
        timer: 1200,
        showConfirmButton: false,
      });

      // refresh list
      setUsers(users.filter((u) => u._id !== id));

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "ลบไม่สำเร็จ ❌",
        text: err.message,
      });
    }
  };

  const style = {
    container: {
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(to right, #fbcfe8, #f9a8d4, #f472b6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '1.5rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'auto',
      width: '100%',
      maxWidth: '1100px',
    },
    cardHeader: {
      backgroundColor: '#ec4899',
      color: 'white',
      padding: '1rem 2rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    cardBody: {
      padding: '1.5rem 2rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      borderBottom: '2px solid #fbcfe8',
      padding: '0.75rem',
      backgroundColor: '#fce7f3',
      whiteSpace: 'nowrap',
    },
    td: {
      padding: '0.75rem',
      borderBottom: '1px solid #f9a8d4',
    },
    btnEdit: {
      backgroundColor: '#f472b6',
      color: 'white',
      padding: '0.375rem 0.75rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
      marginRight: "0.5rem",
    },
    btnDelete: {
      backgroundColor: '#e11d48',
      color: 'white',
      padding: '0.375rem 0.75rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
    },
    btnAdd: {
      backgroundColor: "#22c55e",
      color: "white",
      padding: "0.4rem 0.8rem",
      borderRadius: "0.5rem",
      textDecoration: "none",
      fontSize: "0.9rem",
    },
  };

  if (loading) {
    return <div style={{ textAlign: "center" }}><h1>Loading...</h1></div>;
  }

  return (
    <div style={style.container}>
      <div style={style.card}>
        <div style={style.cardHeader}>
          💖 Users List
          <Link href="/register" style={style.btnAdd}>+ Add User</Link>
        </div>

        <div style={style.cardBody}>
          <table style={style.table}>
            <thead>
              <tr>
                <th style={style.th}>ID</th>
                <th style={style.th}>Firstname</th>
                <th style={style.th}>Fullname</th>
                <th style={style.th}>Lastname</th>
                <th style={style.th}>Username</th>
                <th style={style.th}>Status</th>
                <th style={style.th}>Edit</th>
                <th style={style.th}>Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td style={style.td}>{u._id}</td>
                  <td style={style.td}>{u.firstname}</td>
                  <td style={style.td}>{u.fullname}</td>
                  <td style={style.td}>{u.lastname}</td>
                  <td style={style.td}>{u.username}</td>
                  <td style={style.td}>{u.status}</td>

                  <td style={style.td}>
                    <Link href={`/admin/users/edit/${u._id}`} style={style.btnEdit}>
                      Edit
                    </Link>
                  </td>

                  <td style={style.td}>
                    <button
                      style={style.btnDelete}
                      onClick={() => handleDelete(u._id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "1rem" }}>
                    ไม่มีข้อมูลผู้ใช้
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
