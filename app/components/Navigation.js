"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #064e3b, #065f46, #047857)", // เขียวเข้ม -> เขียวอ่อน
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link
          href="/"
          className="navbar-brand fs-3 fw-bold d-flex align-items-center gap-2"
          style={{ color: "#d1fae5" }} // เขียวอ่อนตัดกับพื้นหลัง
        >
          🐍 SnakeSite
        </Link>

        {/* Hamburger menu */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-medium" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white fw-medium"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                เมนูเพิ่มเติม
              </Link>
              <ul className="dropdown-menu bg-green-900 text-white fs-5 shadow-lg border-0 rounded-3">
                <li>
                  <Link className="dropdown-item" href="/service">
                    Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/admin/users">
                    Admin Users
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.youtube.com/watch?v=1vrEljMfXYo"
                    target="_blank"
                  >
                    Take me Home
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right side: Auth button */}
          <div className="d-flex align-items-center gap-2">
            {token ? (
              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-outline-light px-3 rounded-pill"
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            ) : (
              <Link href="/login" className="btn btn-light px-3 rounded-pill">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
