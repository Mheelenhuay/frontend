"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import { loginAPI } from "../crossAPI/api";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return Swal.fire({
        icon: "warning",
        title: "กรุณากรอก Username และ Password",
      });
    }

    try {
      setLoading(true);

      const data = await loginAPI(username, password);

      if (data.token) {
        localStorage.setItem("token", data.token);

        Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ 🎉",
          timer: 1200,
          showConfirmButton: false,
        }).then(() => router.push("/"));
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "เข้าสู่ระบบไม่สำเร็จ ❌",
        text: err.message || "Username หรือ Password ไม่ถูกต้อง",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>ยินดีต้อนรับ!</h1>
        <p style={styles.subtitle}>กรุณาเข้าสู่ระบบเพื่อใช้งานระบบของเรา</p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>👤 Username</label>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>🔒 Password</label>
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <div style={styles.remember}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">จำฉันไว้</label>
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "กำลังเข้าสู่ระบบ..." : "🔓 Login"}
          </button>
        </form>

        <div style={styles.linksContainer}>
          <Link href="/register" style={styles.link}>
            สมัครสมาชิก
          </Link>
          <Link href="/forgot-password" style={styles.link}>
            ลืมรหัสผ่าน
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #a7f3d0, #6ee7b7, #34d399)",
  },
  card: {
    background: "white",
    padding: "2.5rem",
    borderRadius: "2rem",
    width: "100%",
    maxWidth: "380px",
    border: "2px solid #4ade80",
    boxShadow: "0 25px 50px -12px rgba(52, 211, 153, 0.25)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.9rem",
    fontWeight: "800",
    color: "#047857",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#4b5563",
    marginBottom: "1.5rem",
    fontSize: "0.85rem",
  },
  label: {
    display: "block",
    textAlign: "left",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#065f46",
    marginBottom: "0.2rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem 1rem",
    fontSize: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.6rem",
    marginBottom: "0.9rem",
    outline: "none",
  },
  remember: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.85rem",
    color: "#065f46",
    marginBottom: "1.2rem",
  },
  button: {
    width: "100%",
    background: "linear-gradient(to right, #22c55e, #16a34a)",
    padding: "0.6rem 0",
    borderRadius: "0.6rem",
    color: "white",
    fontWeight: "600",
    fontSize: "1.05rem",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(34, 197, 94, 0.4)",
  },
  linksContainer: {
    marginTop: "1.3rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
  },
  link: {
    color: "#16a34a",
    textDecoration: "none",
    fontWeight: "500",
  },
};
