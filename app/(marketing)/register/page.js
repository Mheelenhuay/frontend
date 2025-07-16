'use client';
import { useState } from 'react';

const style = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 1rem',
    background: 'linear-gradient(to right, #34d399, #6ee7b7, #a7f3d0)', // Emerald 400 -> 300 -> 200 (เขียวอ่อนไล่โทน)
  },
  form: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '48rem',
    padding: '2.5rem',
    borderRadius: '2rem',
    boxShadow: '0 10px 15px -3px rgba(52, 211, 153, 0.4), 0 4px 6px -2px rgba(52, 211, 153, 0.05)', // Emerald 400 shadow
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    textAlign: 'center',
    color: '#065f46', // Emerald 900 (เข้ม)
    marginBottom: '0.75rem',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  subtitle: {
    textAlign: 'center',
    color: '#166534', // Emerald 800
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
    color: '#14532d', // Emerald 800
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'box-shadow 0.2s ease',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
  },
  radioContainer: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '0.25rem',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#4b5563',
    cursor: 'pointer',
  },
  checkboxContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '0.5rem',
    accentColor: '#10b981', // Emerald 500
    cursor: 'pointer',
  },
  submitButton: {
    marginTop: '2rem',
    width: '100%',
    padding: '0.75rem 0',
    background: 'linear-gradient(to right, #059669, #10b981)', // Emerald 600 -> Emerald 500
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.125rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.7)', // Emerald 500 shadow
    cursor: 'pointer',
    transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
    border: 'none',
  },
  submitButtonHover: {
    opacity: 0.9,
    boxShadow: '0 12px 20px -5px rgba(16, 185, 129, 0.9)',
  },
  submitButtonDisabled: {
    background: '#6ee7b7', // Emerald 300 อ่อนลง
    cursor: 'not-allowed',
    boxShadow: 'none',
    opacity: 0.6,
  },
};

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    prefix: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthdate: '',
    accepted: false,
  });

  const [btnHover, setBtnHover] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.accepted) return;
    alert('🎉 สมัครสมาชิกสำเร็จ!');
  };

  const isSubmitDisabled = !form.accepted;

  return (
    <div style={style.container}>
      <form onSubmit={handleSubmit} style={style.form}>
        <h1 style={style.heading}> สมัครสมาชิก</h1>
        <p style={style.subtitle}>กรอกข้อมูลให้ครบถ้วนเพื่อสร้างบัญชีของคุณ</p>

        <div style={style.gridContainer}>
          <div>
            <label htmlFor="username" style={style.label}>👤 ชื่อผู้ใช้</label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="ชื่อผู้ใช้"
              style={style.input}
              required
            />
          </div>

          <div>
            <label htmlFor="password" style={style.label}>🔒 รหัสผ่าน</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="รหัสผ่าน"
              style={style.input}
              required
            />
          </div>

          <div>
            <label htmlFor="prefix" style={style.label}>คำนำหน้า</label>
            <select
              id="prefix"
              name="prefix"
              value={form.prefix}
              onChange={handleChange}
              style={style.input}
              required
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          <div>
            <label htmlFor="birthdate" style={style.label}>🎂 วันเกิด</label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              value={form.birthdate}
              onChange={handleChange}
              style={style.input}
              required
            />
          </div>

          <div>
            <label htmlFor="firstName" style={style.label}>ชื่อ</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="ชื่อจริง"
              style={style.input}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" style={style.label}>นามสกุล</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="นามสกุล"
              style={style.input}
              required
            />
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <label htmlFor="address" style={style.label}>🏠 ที่อยู่</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={form.address}
            onChange={handleChange}
            placeholder="บ้านเลขที่ / แขวง / เขต / จังหวัด"
            style={style.textarea}
            required
          />
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <label style={style.label}>เพศ</label>
          <div style={style.radioContainer}>
            <label style={style.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="ชาย"
                checked={form.gender === 'ชาย'}
                onChange={handleChange}
                style={{ marginRight: '0.5rem' }}
                required
              />
              ชาย
            </label>
            <label style={style.radioLabel}>
              <input
                type="radio"
                name="gender"
                value="หญิง"
                checked={form.gender === 'หญิง'}
                onChange={handleChange}
                style={{ marginRight: '0.5rem' }}
              />
              หญิง
            </label>
          </div>
        </div>

        <div style={style.checkboxContainer}>
          <input
            type="checkbox"
            name="accepted"
            checked={form.accepted}
            onChange={handleChange}
            style={style.checkbox}
            required
          />
          <label style={{ fontSize: '0.875rem', color: '#374151' }}>
            ฉันยอมรับเงื่อนไขและข้อตกลง
          </label>
        </div>

        <button
          type="submit"
          style={{
            ...style.submitButton,
            ...(btnHover && !isSubmitDisabled ? style.submitButtonHover : {}),
            ...(isSubmitDisabled ? style.submitButtonDisabled : {}),
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          disabled={isSubmitDisabled}
          title={isSubmitDisabled ? 'กรุณายอมรับเงื่อนไขก่อนสมัคร' : ''}
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
}
