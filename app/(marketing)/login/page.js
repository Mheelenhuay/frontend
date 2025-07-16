'use client';
export default function Login() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-6 py-12">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border-2 border-indigo-300 text-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-4 drop-shadow-sm">
          ยินดีต้อนรับนะครับอิอิ คุคิคุคิ จุ๊บุจุ๊บุ
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          กรุณาเข้าสู่ระบบเพื่อใช้งานระบบของเรา
        </p>

        {/* Username */}
        <div className="mb-5 text-left">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            👤 Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            placeholder="ชื่อผู้ใช้"
          />
        </div>

        {/* Password */}
        <div className="mb-5 text-left">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            🔒 Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            placeholder="รหัสผ่าน"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-start mb-6">
          <input id="remember" type="checkbox" className="mr-2 accent-purple-500" />
          <label htmlFor="remember" className="text-sm text-gray-700">จำฉันไว้</label>
        </div>

        {/* Login Button */}
        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text- py-2 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200">
          🔓 Login
        </button>

        {/* Links */}
        <div className="mt-6 flex justify-between text-sm text-purple-700">
          <a href="/register" className="hover:underline">สมัครสมาชิก</a>
          <a href="/forgot-password" className="hover:underline">ลืมรหัสผ่าน</a>
        </div>
        <p></p>
      </div>
    </div>
  );
}
