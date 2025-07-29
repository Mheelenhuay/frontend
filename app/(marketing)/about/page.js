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
          background: linear-gradient(to right, #b9fbc0, #66bb6a);
          padding: 1.5rem;
        }

        .title {
          font-size: 3.75rem;
          text-align: center;
          color: #2e7d32;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
          font-size: 2.25rem;
          font-weight: 600;
          color: #1b5e20;
          text-align: center;
          max-width: 36rem;
          margin-bottom: 2rem;
        }

        .highlight {
          color: #ff7043;
          font-weight: bold;
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

      <div className="about-container">
        <h1 className="title">About Page</h1>
        <h2 className="subtitle">
          Pattarasai Jaipong <span className="highlight">muhahaha 037 XDDDDDDD</span>
        </h2>
      </div>
    </>
  );
}
