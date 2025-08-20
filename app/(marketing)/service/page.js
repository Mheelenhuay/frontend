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
          background: linear-gradient(to right, #d1fae5, #f0fdf4, #dcfce7);
          padding: 1.5rem;
        }

        .title {
          font-size: 3.75rem;
          text-align: center;
          color: #065f46; /* สีเขียวเข้มเพื่อความเป็นธรรมชาติ */
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
          font-size: 2.25rem;
          font-weight: 600;
          color: #047857;
          text-align: center;
          max-width: 36rem;
          margin-bottom: 2rem;
        }

        .highlight {
          color: #16a34a;
        }

        .service-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
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
          color: #065f46;
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
        <h1 className="title">บริการช่วยเหลืองู 🐍</h1>
        <h2 className="subtitle">
          Pattarasai Jaipong <span className="highlight">ช่วยเหลืองูทุกชนิด</span>
        </h2>

        {/* รายการบริการ */}
        <div className="service-list">
          <div className="service-card">
            <div className="service-title">🪤 จับงู</div>
            <div className="service-desc">
              ให้บริการจับงูอย่างปลอดภัย ทั้งในบ้านและพื้นที่สาธารณะ
            </div>
          </div>
          <div className="service-card">
            <div className="service-title">🚑 ช่วยเหลืองูบาดเจ็บ</div>
            <div className="service-desc">
              ให้การดูแลเบื้องต้นกับงูที่ได้รับบาดเจ็บก่อนส่งต่อสถานพยาบาลสัตว์
            </div>
          </div>
          <div className="service-card">
            <div className="service-title">🌿 ปล่อยงูคืนธรรมชาติ</div>
            <div className="service-desc">
              ปล่อยงูคืนสู่ธรรมชาติอย่างปลอดภัย หลังจากช่วยเหลือหรือดูแล
            </div>
          </div>
          <div className="service-card">
            <div className="service-title">📞 ให้คำปรึกษางู</div>
            <div className="service-desc">
              ให้คำปรึกษาเกี่ยวกับงู การป้องกัน และวิธีปฏิบัติเมื่อเจองู
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
