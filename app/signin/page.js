'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(username);

    if (data.token) {
      localStorage.setItem('token', data.token);  
      Swal.fire({
        icon: 'success',
        title: '<h3>Login Successfuly!</h3>',
        showConfirmButton: false,
        timer: 2000
      }).then(() => router.push('/admin/users'));
    } else {
      Swal.fire({
        icon: 'warning',
        title: '<h3>Login Failed!</h3>',
        showConfirmButton: false,
        timer: 2000
      }).then(() => router.push('/signin'));
    }
  };

  const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #fbc2eb, #f99fc9)',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#fff0f6',
    borderRadius: '1.5rem',
    padding: '2.5rem', // เพิ่ม padding จาก 2rem เป็น 2.5rem
    boxShadow: '0 10px 25px rgba(251, 194, 235, 0.3)',
    maxWidth: '400px',
    width: '100%',
    border: '2px solid #f472b6',
  },
  header: {
    background: 'linear-gradient(to right, #f472b6, #ec4899)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '1.5rem',
    padding: '1rem',
    borderRadius: '1.5rem 1.5rem 0 0',
    textAlign: 'center',
    marginBottom: '2rem', // เพิ่มจาก 1rem เป็น 2rem
  },
  inputGroup: {
    marginBottom: '1.75rem', // เพิ่มระยะห่าง input
  },
  input: {
    borderRadius: '0.75rem',
    border: '1px solid #f472b6',
    padding: '0.5rem 0.75rem', // เพิ่ม padding ข้างใน input
  },
  button: {
    width: '100%',
    background: 'linear-gradient(to right, #f472b6, #ec4899)',
    color: '#fff',
    fontWeight: '600',
    border: 'none',
    borderRadius: '0.75rem',
    padding: '0.6rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    opacity: 0.9,
    transform: 'scale(1.02)',
  },
  links: {
    marginTop: '1.5rem', // เพิ่มระยะห่าง links จาก button
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    color: '#ec4899',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={style.container}>
      <div style={style.card}>
        <div style={style.header}>SignIn Form 💖</div>

        <form onSubmit={handleLogin}>
          <div style={style.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={style.input}
            />
          </div>

          <div style={style.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={style.input}
            />
          </div>

          <button
            type="submit"
            style={{ ...style.button, ...(btnHover ? style.buttonHover : {}) }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Sign In
          </button>
        </form>

        <div style={style.links}>
          <Link href="/register" style={style.link}>Create Account</Link>
          <Link href="/" style={style.link}>Forget Password</Link>
        </div>
      </div>
    </div>
  );
}
