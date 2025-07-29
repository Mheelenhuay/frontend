'use client';

export default function Contact() {
  return (
    <>
      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #d9f99d, #bbf7d0, #a7f3d0);
          padding: 1.5rem;
        }

        .title {
          font-size: 3.75rem;
          text-align: center;
          color: #166534;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
        }

        .profile-img {
          width: 12rem;
          height: 12rem;
          border-radius: 9999px;
          border: 4px solid #22c55e;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
        }

        .subtitle {
          font-size: 1.875rem;
          font-weight: 600;
          color: #065f46;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: #f97316;
        }

        .contact-info {
          font-size: 1.125rem;
          text-align: center;
          color: #065f46;
          line-height: 1.75rem;
        }

        .contact-info a {
          color: #2563eb;
          text-decoration: underline;
        }

        .contact-info a:hover {
          color: #1e40af;
        }

        @media (max-width: 640px) {
          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.25rem;
          }

          .contact-info {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="contact-container">
        <h1 className="title">Contact Page</h1>

        <img
          src="/images/mypic/maPic_01.jpg"
          alt="Pattarasai Jaipong"
          className="profile-img"
        />

        <h2 className="subtitle">
          Pattarasai Jaipong <span className="highlight">muhahaha 037 XDDDDDDD</span>
        </h2>

        <div className="contact-info">
          <p>📞 <strong>Phone:</strong> 089-123-4567</p>
          <p>📘 <strong>Facebook:</strong> MUahhaahhaha</p>
        </div>
      </div>
    </>
  );
}

