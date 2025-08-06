'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm('คุณแน่ใจหรือไม่ว่าต้องการลบผู้ใช้นี้?');
    if (!confirmed) return;

    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await res.json();
      console.log('Deleted:', result);
      // ไม่ต้อง setItems ใหม่เพราะมี setInterval อยู่แล้ว
    } catch (error) {
      console.error('Error deleting user:', error);
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
      maxWidth: '1200px',
    },
    cardHeader: {
      backgroundColor: '#ec4899',
      color: 'white',
      padding: '1rem 2rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
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
      verticalAlign: 'top',
    },
    btnEdit: {
      backgroundColor: '#f472b6',
      color: 'white',
      padding: '0.375rem 0.75rem',
      borderRadius: '0.375rem',
      textDecoration: 'none',
    },
    btnDelete: {
      backgroundColor: '#e11d48',
      color: 'white',
      padding: '0.375rem 0.75rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={style.container}>
      <div style={style.card}>
        <div style={style.cardHeader}>💖 Users List</div>
        <div style={style.cardBody}>
          <table style={style.table}>
            <thead>
              <tr>
                <th style={style.th}>ID</th>
                <th style={style.th}>Firstname</th>
                <th style={style.th}>Fullname</th>
                <th style={style.th}>Lastname</th>
                <th style={style.th}>Username</th>
                <th style={style.th}>Address</th>
                <th style={style.th}>Birthday</th>
                <th style={style.th}>Sex</th>
                <th style={style.th}>Edit</th>
                <th style={style.th}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td style={style.td} className="text-center">{item.id}</td>
                  <td style={style.td}>{item.firstname}</td>
                  <td style={style.td}>{item.fullname}</td>
                  <td style={style.td}>{item.lastname}</td>
                  <td style={style.td}>{item.username}</td>
                  <td style={style.td}>{item.address}</td>
                  <td style={style.td}>{item.birthday}</td>
                  <td style={style.td}>{item.sex}</td>
                  <td style={style.td}>
                    <Link href={`/admin/users/edit/${item.id}`} style={style.btnEdit}>
                      Edit
                    </Link>
                  </td>
                  <td style={style.td}>
                    <button
                      style={style.btnDelete}
                      onClick={() => handleDelete(item.id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
