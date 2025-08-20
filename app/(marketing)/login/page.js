'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

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
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  subtitle: {
    color: '#4b5563',
    marginBottom: '2rem',
    fontSize: '0.875rem',
  },
  formGroup: {
    marginBottom: '1.25rem',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#065f46',
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    justifyContent: 'flex-start',
  },
  checkbox: {
    marginRight: '0.5rem',
    accentColor: '#22c55e',
    cursor: 'pointer',
  },
  checkboxLabel: {
    fontSize: '0.875rem',
    color: '#065f46',
  },
  button: {
    width: '100%',
    background: 'linear-gradient(to right, #22c55e, #16a34a)',
    padding: '0.5rem 0',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.125rem',
    boxShadow: '0 4px 6px rgba(34, 197, 94, 0.4)',
    cursor: 'pointer',
    border: 'none',
    transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
  },
  buttonHover: {
    opacity: 0.9,
    boxShadow: '0 6px 10px rgba(34, 197, 94, 0.7)',
  },
  linksContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    color: '#15803d',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default function Login() {
  const [btnHover, setBtnHover] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ 🎉',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push('/'); // เปลี่ยนเป็นหน้า /page.js
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบล้มเหลว ❌',
          text: data.message || 'ตรวจสอบ username/password',
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
          <div style={style.formGroup}>
            <label htmlFor="username" style={style.label}>
              👤 Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="ชื่อผู้ใช้"
              style={style.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div style={style.formGroup}>
            <label htmlFor="password" style={style.label}>
              🔒 Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="รหัสผ่าน"
              style={style.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={style.checkboxContainer}>
            <input
              id="remember"
              type="checkbox"
              style={style.checkbox}
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label htmlFor="remember" style={style.checkboxLabel}>
              จำฉันไว้
            </label>
          </div>

          <button
            type="submit"
            style={{ ...style.button, ...(btnHover ? style.buttonHover : {}) }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            disabled={!username || !password}
            title={!username || !password ? 'กรุณากรอกข้อมูลให้ครบ' : ''}
          >
            🔓 Login
          </button>
        </form>

        <div style={style.linksContainer}>
          <a href="/register" style={style.link}>
            สมัครสมาชิก
          </a>
          <a href="/" style={style.link}>
            ลืมรหัสผ่าน
          </a>
        </div>
      </div>
    </div>
  );
}
