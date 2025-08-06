'use client';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Register({ params }) {
  const isEditMode = !!params?.id;
  const id = params?.id || '';

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

  useEffect(() => {
    if (!isEditMode) return;

    async function fetchUser() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const user = data[0];
          setForm({
            username: user.username || '',
            password: user.password || '',
            prefix: user.firstname || '',
            firstName: user.fullname || '',
            lastName: user.lastname || '',
            address: user.address || '',
            gender: user.sex || '',
            birthdate: user.birthday || '',
            accepted: true,
          });
        }
      } catch (err) {
        console.error('โหลดข้อมูลผิดพลาด:', err);
      }
    }

    fetchUser();
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.accepted) return;

    const payload = {
      firstname: form.prefix,
      fullname: form.firstName,
      lastname: form.lastName,
      username: form.username,
      password: form.password,
      address: form.address,
      sex: form.gender,
      birthday: form.birthdate,
    };

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: isEditMode ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isEditMode ? { id, ...payload } : payload),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: isEditMode ? 'แก้ไขข้อมูลสำเร็จ' : 'สมัครสมาชิกสำเร็จ',
          text: isEditMode ? 'ข้อมูลได้รับการอัปเดตแล้ว' : 'คุณสามารถเข้าสู่ระบบได้แล้ว',
        });

        if (!isEditMode) {
          setForm({
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
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: data.message || 'ไม่สามารถดำเนินการได้',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  const isSubmitDisabled = !form.accepted;

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
      boxShadow: '0 10px 15px -3px rgba(52, 211, 153, 0.4), 0 4px 6px -2px rgba(52, 211, 153, 0.05)',
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
    textarea: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '1rem',
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
      accentColor: '#10b981',
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
    submitButtonHover: {
      opacity: 0.9,
      boxShadow: '0 12px 20px -5px rgba(16, 185, 129, 0.9)',
    },
    submitButtonDisabled: {
      background: '#6ee7b7',
      cursor: 'not-allowed',
      boxShadow: 'none',
      opacity: 0.6,
    },
  };

  return (
    <div style={style.container}>
      <form onSubmit={handleSubmit} style={style.form}>
        <h1 style={style.heading}>{isEditMode ? 'แก้ไขข้อมูลผู้ใช้' : 'สมัครสมาชิก'}</h1>
        <p style={style.subtitle}>
          {isEditMode
            ? 'กรุณาแก้ไขข้อมูลที่ต้องการ แล้วกดบันทึก'
            : 'กรอกข้อมูลให้ครบถ้วนเพื่อสร้างบัญชีของคุณ'}
        </p>

        <div style={style.gridContainer}>
          <div>
            <label style={style.label}>👤 ชื่อผู้ใช้</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="ชื่อผู้ใช้"
              style={style.input}
              required
            />
          </div>
          <div>
            <label style={style.label}>🔒 รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="รหัสผ่าน"
              style={style.input}
              required
            />
          </div>
          <div>
            <label style={style.label}>คำนำหน้า</label>
            <select
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
            <label style={style.label}>🎂 วันเกิด</label>
            <input
              type="date"
              name="birthdate"
              value={form.birthdate}
              onChange={handleChange}
              style={style.input}
              required
            />
          </div>
          <div>
            <label style={style.label}>ชื่อ</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="ชื่อจริง"
              style={style.input}
              required
            />
          </div>
          <div>
            <label style={style.label}>นามสกุล</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="นามสกุล"
              style={style.input}
              required
            />
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <label style={style.label}>🏠 ที่อยู่</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            rows="3"
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
        >
          {isEditMode ? 'บันทึกการแก้ไข' : 'สมัครสมาชิก'}
        </button>
      </form>
    </div>
  );
}
