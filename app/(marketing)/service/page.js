'use client';

export default function Service() {
  return (
    <>
      <style jsx>{`
        .service-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #e0e7ff, #f3e8ff, #fce7f3);
          padding: 1.5rem;
        }

        .title {
          font-size: 3.75rem;
          text-align: center;
          color: #4338ca;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
          font-size: 2.25rem;
          font-weight: 600;
          color: #6b21a8;
          text-align: center;
          max-width: 36rem;
          margin-bottom: 2rem;
        }

        .highlight {
          color: #db2777;
        }

        .service-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          width: 100%;
          margin-top: 1.5rem;
        }

        .service-card {
          background-color: #fff;
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.2s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.5rem;
        }

        .service-desc {
          font-size: 0.95rem;
          color: #4b5563;
        }

        @media (max-width: 640px) {
          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="service-container">
        <h1 className="title">Service Page</h1>
        <h2 className="subtitle">
          Pattarasai Jaipong <span className="highlight">muhahaha 037 XDDDDDDD</span>
        </h2>

        {/* รายการบริการ */}
        <div className="service-list">
          <div className="service-card">
            <div className="service-title">🌐 Web Design</div>
            <div className="service-desc">ออกแบบเว็บไซต์ทันสมัย สวยงาม ใช้งานง่าย</div>
          </div>
          <div className="service-card">
            <div className="service-title">🎨 Graphic Design</div>
            <div className="service-desc">ออกแบบโลโก้ โบรชัวร์ แบนเนอร์ออนไลน์</div>
          </div>
          <div className="service-card">
            <div className="service-title">📱 UI/UX Design</div>
            <div className="service-desc">ออกแบบอินเทอร์เฟซสำหรับแอปพลิเคชัน</div>
          </div>
          <div className="service-card">
            <div className="service-title">🛠 Frontend Development</div>
            <div className="service-desc">สร้างเว็บแอปที่สวยงามด้วย HTML, CSS, React</div>
          </div>
        </div>
      </div>
    </>
  );
}
