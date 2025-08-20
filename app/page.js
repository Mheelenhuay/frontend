"use client";
import { useEffect } from "react";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    padding: '2rem',
    background: 'linear-gradient(135deg, #064e3b, #10b981, #a7f3d0)',
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 15s ease infinite',
  },
  carouselWrapper: {
    width: 'calc(100vw - 2rem)',
    maxWidth: '1200px',
    height: '60vh',
    marginBottom: '3rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '800px',
    textAlign: 'center',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  heading1: {
    fontSize: '3.5rem',
    textAlign: 'center',
    color: '#065f46',
    fontWeight: '800',
    marginBottom: '1rem',
    textShadow: '0 2px 5px rgba(0,0,0,0.15)',
  },
  heading2: {
    fontSize: '1.25rem',
    color: '#064e3b',
  },
  highlight: {
    color: '#e91717ff',
    fontWeight: '600',
  },
};

const styleGlobal = `
@keyframes gradientAnimation {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}
`;

export default function Home() {
  useEffect(() => {
    const alreadyRefreshed = localStorage.getItem("alreadyRefreshed");
    if (!alreadyRefreshed) {
      localStorage.setItem("alreadyRefreshed", "true");
      window.location.reload(); // รีเฟรชหน้า 1 ครั้ง
    }
  }, []);

  return (
    <>
      <style>{styleGlobal}</style>
      <div style={style.container}>
        <div style={style.carouselWrapper}>
          <Carousel />
        </div>

        <div style={style.box}>
          <h1 style={style.heading1}>การระวังและเรียนรู้เกี่ยวกับงู</h1>
          <h2 style={style.heading2}>
            งูเป็นสัตว์ที่น่าสนใจแต่บางชนิดสามารถเป็นอันตรายได้
            <br />
            ควรสังเกตสิ่งแวดล้อมและ <span style={style.highlight}>ระวังงูทุกครั้ง</span> 
            เมื่อต้องอยู่ใกล้พื้นที่ป่า หรือพื้นที่ที่มีพืชสูง
            <br />
            การเรียนรู้วิธีสังเกตและปฏิบัติตัวอย่างปลอดภัยสามารถช่วยป้องกันอุบัติเหตุได้
          </h2>
        </div>

        <Card />
      </div>
    </>
  );
}
