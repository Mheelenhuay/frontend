'use client';

import { useState } from 'react';

const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 1.5rem',
    background: 'linear-gradient(to right, #a7f3d0, #6ee7b7, #34d399)', // teal/green gradients
  },
  card: {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '2rem',
    boxShadow:
      '0 25px 50px -12px rgba(52, 211, 153, 0.25)', // green shadow
    width: '100%',
    maxWidth: '24rem', // max-w-md ~ 384px
    border: '2px solid #4ade80', // green-400
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.875rem',
    fontWeight: '800',
    color: '#047857', // green-700
    marginBottom: '1rem',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  subtitle: {
    color: '#4b5563', // gray-700 (neutral for subtitle)
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
    color: '#065f46', // green-800
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '1px solid #d1d5db', // gray-300
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
    accentColor: '#22c55e', // green-500
    cursor: 'pointer',
  },
  checkboxLabel: {
    fontSize: '0.875rem',
    color: '#065f46', // green-800
  },
  button: {
    width: '100%',
    background:
      'linear-gradient(to right, #22c55e, #16a34a)', // green-500 to green-600
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
    color: '#15803d', // green-700
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

  return (
    <div style={style.container}>
      <div style={style.card}>
        <h1 style={style.heading}>
          ยินดีต้อนรับนะครับอิอิ คุคิคุคิ จุ๊บุจุ๊บุ
        </h1>
        <p style={style.subtitle}>กรุณาเข้าสู่ระบบเพื่อใช้งานระบบของเรา</p>

        {/* Username */}
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
            onFocus={(e) => {
              Object.assign(e.target.style, {
                borderColor: '#34d399',
                boxShadow: '0 0 0 2px #34d399',
              });
            }}
            onBlur={(e) => {
              Object.assign(e.target.style, {
                borderColor: '#d1d5db',
                boxShadow: 'none',
              });
            }}
          />
        </div>

        {/* Password */}
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
            onFocus={(e) => {
              Object.assign(e.target.style, {
                borderColor: '#34d399',
                boxShadow: '0 0 0 2px #34d399',
              });
            }}
            onBlur={(e) => {
              Object.assign(e.target.style, {
                borderColor: '#d1d5db',
                boxShadow: 'none',
              });
            }}
          />
        </div>

        {/* Remember Me */}
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

        {/* Login Button */}
        <button
          type="submit"
          style={{ ...style.button, ...(btnHover ? style.buttonHover : {}) }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={(e) => {
            e.preventDefault(); // ป้องกันรีเฟรชหน้า
            alert('เข้าสู่ระบบเรียบร้อย 🎉');
          }}
          disabled={!username || !password}
          title={!username || !password ? 'กรุณากรอกข้อมูลให้ครบ' : ''}
        >
          🔓 Login
        </button>

        {/* Links */}
        <div style={style.linksContainer}>
          <a
            href="/register"
            style={style.link}
            onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            สมัครสมาชิก
          </a>
          <a
            href="/"
            style={style.link}
            onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            ลืมรหัสผ่าน
          </a>
        </div>
      </div>
    </div>
  );
}
