'use client';
import { useState } from 'react';

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 สมัครสมาชิกสำเร็จ!');
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl p-10 rounded-3xl custom-form-shadow"
      >
        <h1 className="text-4xl font-extrabold text-center text-black mb-3 drop-shadow-sm">
          📝 สมัครสมาชิก
        </h1>
        <p className="text-center text-gray-800 mb-8 text-sm">
          กรอกข้อมูลให้ครบถ้วนเพื่อสร้างบัญชีของคุณ
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">👤 ชื่อผู้ใช้</label>
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="ชื่อผู้ใช้"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">🔒 รหัสผ่าน</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="รหัสผ่าน"
            />
          </div>

          {/* Prefix */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">🧑‍🏫 คำนำหน้า</label>
            <select
              name="prefix"
              value={form.prefix}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          {/* Birthdate */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">🎂 วันเกิด</label>
            <input
              name="birthdate"
              type="date"
              value={form.birthdate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">ชื่อ</label>
            <input
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="ชื่อจริง"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">นามสกุล</label>
            <input
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="นามสกุล"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-800 mb-1">🏠 ที่อยู่</label>
          <textarea
            name="address"
            rows="3"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="บ้านเลขที่ / แขวง / เขต / จังหวัด"
          />
        </div>

        {/* Gender */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-800 mb-1">⚧️ เพศ</label>
          <div className="flex items-center gap-6 mt-1">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="radio"
                name="gender"
                value="ชาย"
                checked={form.gender === 'ชาย'}
                onChange={handleChange}
                className="mr-2"
              />
              ชาย
            </label>
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="radio"
                name="gender"
                value="หญิง"
                checked={form.gender === 'หญิง'}
                onChange={handleChange}
                className="mr-2"
              />
              หญิง
            </label>
          </div>
        </div>

        {/* Accept */}
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            name="accepted"
            checked={form.accepted}
            onChange={handleChange}
            className="mr-2 accent-purple-500"
          />
          <label className="text-sm text-gray-800">ฉันยอมรับเงื่อนไขและข้อตกลง</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200"
        >
          ✅ สมัครสมาชิก
        </button>

        {/* Global Style เฉพาะหน้านี้ */}
        <style jsx global>{`
          body {
            font-family: 'Kanit', sans-serif;
            background-color: #f3e8ff;
          }

          ::placeholder {
            color: #6b7280; /* gray-600 */
            opacity: 1;
          }

          input, select, textarea {
            font-family: inherit;
            background-color: white;
          }

          .custom-form-shadow {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border: 1px solid #ddd6fe;
          }

          button:hover {
            transform: scale(1.015);
          }

          label {
            letter-spacing: 0.3px;
          }
        `}</style>
      </form>
    </div>
  );
}
