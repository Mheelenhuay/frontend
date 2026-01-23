'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { loginAPI } from '../crossAPI/api'; // ✅ ใช้ crossAPI

const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 1.5rem',
    background: 'linear-gradient(to right, #a7f3d0, #6ee7b7, #34d399)',
  },
  card: {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '2rem',
    boxShadow: '0 25px 50px -12px rgba(52, 211, 153, 0.25)',
    width: '100%',
    maxWidth: '24rem',
    border: '2px solid #4ade80',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.875rem',
    fontWeight: '800',
    color: '#047857',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#4b5563',
    marginBottom: '2rem',
    fontSize: '0.875rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
  },
  button: {
    width: '100%',
    background: 'linear-gradient(to right, #22c55e, #16a34a)',
    padding: '0.5rem 0',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.125rem',
    cursor: 'pointer',
    border: 'none',
  },
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginAPI(username, password); // ✅ เรียก backend จริง

      if (data.token) {
        localStorage.setItem('token', data.token);

        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ 🎉',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบล้มเหลว ❌',
          text: data.error || 'ตรวจสอบ username/password',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด!',
        text: err.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div style={style.container}>
      <div style={style.card}>
        <h1 style={style.heading}>ยินดีต้อนรับ!</h1>
        <p style={style.subtitle}>กรุณาเข้าสู่ระบบเพื่อใช้งานระบบของเรา</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            style={style.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Password"
            style={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit" style={style.button} disabled={!username || !password}>
            🔓 Login
          </button>
        </form>
      </div>
    </div>
  );
}
