'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const API_URL = "https://back-end-dusky-three.vercel.app"; 
// const API_URL = "https://YOUR_BACKEND.vercel.app"; // ตอน deploy

const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 1rem',
    background: 'linear-gradient(to right, #34d399, #6ee7b7, #a7f3d0)',
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '48rem',
    padding: '2.5rem',
    borderRadius: '2rem',
    boxShadow:
      '0 10px 15px -3px rgba(52, 211, 153, 0.4), 0 4px 6px -2px rgba(52, 211, 153, 0.05)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    textAlign: 'center',
    color: '#065f46',
    marginBottom: '0.75rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#166534',
    marginBottom: '2rem',
    fontSize: '0.875rem',
  },
  gridContainer: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    fontSize: '0.875rem',
    marginBottom: '0.25rem',
    color: '#14532d',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
  },
  checkboxContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '0.5rem',
    accentColor: '#10b981',
    cursor: 'pointer',
  },
  submitButton: {
    marginTop: '2rem',
    width: '100%',
    padding: '0.75rem 0',
    background: 'linear-gradient(to right, #059669, #10b981)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    borderRadius: '1rem',
    cursor: 'pointer',
    border: 'none',
  },
  submitButtonDisabled: {
    background: '#6ee7b7',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
};

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: '',
    password: '',
    prefix: '',
    firstname: '',
    lastname: '',
    accepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validate
    if (!form.username || !form.password || !form.firstname || !form.lastname) {
      return Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูลให้ครบ',
      });
    }

    if (!form.accepted) {
      return Swal.fire({
        icon: 'warning',
        title: 'กรุณายอมรับเงื่อนไข',
      });
    }

    const payload = {
      firstname: form.prefix,                // คำนำหน้า
      fullname: form.firstname,              // ชื่อ
      lastname: form.lastname,               // นามสกุล
      username: form.username,
      password: form.password,
      status: "user",
    };

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message || "Register failed");
      }

      Swal.fire({
        icon: 'success',
        title: 'สมัครสมาชิกสำเร็จ 🎉',
        text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
        timer: 1500,
        showConfirmButton: false,
      }).then(() => router.push('/login'));

      // reset form
      setForm({
        username: '',
        password: '',
        prefix: '',
        firstname: '',
        lastname: '',
        accepted: false,
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'สมัครสมาชิกไม่สำเร็จ ❌',
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !form.accepted || loading;

  return (
    <div style={style.container}>
      <form onSubmit={handleSubmit} style={style.form}>
        <h1 style={style.heading}>สมัครสมาชิก</h1>
        <p style={style.subtitle}>กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>

        <div style={style.gridContainer}>
          <div>
            <label style={style.label}>👤 Username</label>
            <input name="username" value={form.username} onChange={handleChange} style={style.input} />
          </div>

          <div>
            <label style={style.label}>🔒 Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} style={style.input} />
          </div>

          <div>
            <label style={style.label}>คำนำหน้า</label>
            <select name="prefix" value={form.prefix} onChange={handleChange} style={style.input}>
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          <div>
            <label style={style.label}>ชื่อ</label>
            <input name="firstname" value={form.firstname} onChange={handleChange} style={style.input} />
          </div>

          <div>
            <label style={style.label}>นามสกุล</label>
            <input name="lastname" value={form.lastname} onChange={handleChange} style={style.input} />
          </div>
        </div>

        <div style={style.checkboxContainer}>
          <input type="checkbox" name="accepted" checked={form.accepted} onChange={handleChange} style={style.checkbox} />
          <label>ฉันยอมรับเงื่อนไขและข้อตกลง</label>
        </div>

        <button
          type="submit"
          style={{
            ...style.submitButton,
            ...(isDisabled ? style.submitButtonDisabled : {}),
          }}
          disabled={isDisabled}
        >
          {loading ? "กำลังสมัคร..." : "สมัครสมาชิก"}
        </button>
      </form>
    </div>
  );
}
