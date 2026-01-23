'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const API_URL = "https://back-end-dusky-three.vercel.app";
// const API_URL = "https://YOUR_BACKEND.vercel.app";

export default function EditUserPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    status: 'active',
  });

  // ✅ โหลดข้อมูล user
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${API_URL}/api/users/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Load user failed");

        setForm({
          firstname: data.firstname || '',
          fullname: data.fullname || '',
          lastname: data.lastname || '',
          username: data.username || '',
          password: '', // ❗ ไม่โหลด password เดิม
          status: data.status || 'active',
        });
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'โหลดข้อมูลไม่สำเร็จ ❌',
          text: err.message,
        });
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchUser();
  }, [id]);

  // ✅ handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ update user
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...form };

      // ❗ ถ้าไม่กรอก password → ไม่ส่งไป update
      if (!payload.password) delete payload.password;

      const res = await fetch(`${API_URL}/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Update failed");

      Swal.fire({
        icon: "success",
        title: "แก้ไขข้อมูลสำเร็จ ✅",
        timer: 1200,
        showConfirmButton: false,
      }).then(() => {
        router.push("/admin/users");
      });

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "แก้ไขไม่สำเร็จ ❌",
        text: err.message,
      });
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.heading}>✏️ แก้ไขข้อมูลผู้ใช้</h1>
        <p style={styles.subtitle}>แก้ไขข้อมูลแล้วกดบันทึก</p>

        <div style={styles.gridContainer}>
          <div>
            <label style={styles.label}>👤 Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label}>🔒 Password (ถ้าต้องการเปลี่ยน)</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div>
            <label style={styles.label}>คำนำหน้า</label>
            <select
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          <div>
            <label style={styles.label}>ชื่อ</label>
            <input
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label}>นามสกุล</label>
            <input
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div>
            <label style={styles.label}>สถานะ</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>
          💾 บันทึกการแก้ไข
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #34d399, #6ee7b7, #a7f3d0)',
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '1.5rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '800',
    color: '#065f46',
    marginBottom: '0.5rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#166534',
    marginBottom: '1.5rem',
  },
  gridContainer: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
  label: {
    fontWeight: '600',
    fontSize: '0.875rem',
    color: '#14532d',
  },
  input: {
    width: '100%',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #d1d5db',
  },
  submitButton: {
    marginTop: '1.5rem',
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    border: 'none',
    background: 'linear-gradient(to right, #059669, #10b981)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
