'use client';

export default function About() {
  return (
    <>
      <style jsx>{`
        .about-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #d9f99d, #bef264);
          padding: 2rem;
          text-align: center;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #166534;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .snake-underline {
          width: 180px;
          height: 12px;
          background: linear-gradient(90deg, #16a34a, #22c55e);
          border-radius: 50% / 100%;
          margin: 0.5rem auto 2rem;
          transform: rotate(-10deg);
          animation: slither 1s infinite alternate;
        }

        @keyframes slither {
          0% { transform: rotate(-10deg) translateX(0); }
          100% { transform: rotate(-10deg) translateX(15px); }
        }

        .subtitle {
          font-size: 1.4rem;
          color: #14532d;
          max-width: 600px;
          line-height: 1.7;
        }

        .highlight {
          color: #16a34a;
          font-weight: bold;
        }

        .fun-text {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: #065f46;
          max-width: 600px;
          line-height: 1.6;
          font-style: italic;
        }

        @media (max-width: 640px) {
          .title { font-size: 2.5rem; }
          .subtitle { font-size: 1.2rem; }
          .fun-text { font-size: 1rem; }
        }
      `}</style>

      <div className="about-container">
        <h1 className="title">About Us 🐍💨</h1>
        <div className="snake-underline"></div>
        <p className="subtitle">
          Pattarasai Jaipong <span className="highlight">ผู้เชี่ยวชาญงูสุดป่วน</span>  
          ช่วยงูทุกชนิด ทั้งงูงอน งูขี้เล่น และงูขี้เกียจ ให้กลับบ้านอย่างปลอดภัย
        </p>
        <p className="fun-text">
          บางครั้งงูเราก็ซนหน่อย ๆ เลื้อยไปทั่วบ้าน แต่ไม่ต้องห่วง!  
          เราจะจับงูด้วยความเร็วระดับ ⚡ “งูพริ้ว” เพื่อให้คุณไม่ต้องตกใจ 🐍😂
        </p>
      </div>
    </>
  );
}
