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
    background: 'linear-gradient(135deg, #c4b5fd, #f9a8d4, #fcd34d)',
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 15s ease infinite',
  },
  carouselWrapper: {
    width: 'calc(100vw - 2rem)', // เว้นขอบซ้ายขวา 1rem
    maxWidth: '1200px',           // ความกว้างสูงสุด
    height: '60vh',
    marginBottom: '3rem',
    borderRadius: '1rem',        // เพิ่มมุมโค้งนิด ๆ
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)', // เพิ่มเงาเล็ก ๆ ให้ลอย
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heading1: {
    fontSize: '4rem',
    textAlign: 'center',
    color: '#1e3a8a',
    fontWeight: '800',
    marginBottom: '1.5rem',
    textShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  heading2: {
    fontSize: '2.25rem',
    fontWeight: '600',
    textAlign: 'center',
    color: '#831843',
    marginBottom: '3rem',
    maxWidth: '36rem',
  },
  highlight: {
    color: '#f43f5e',
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
  return (
    <>
      <style>{styleGlobal}</style>
      <div style={style.container}>
        <div style={style.carouselWrapper}>
          <Carousel />
        </div>

        <h1 style={style.heading1}>Home Page</h1>
        <h2 style={style.heading2}>
          Pattarasai Jaipong <span style={style.highlight}>muhahaha 037 XDDDDDDD</span>
        </h2>

        <Card />
      </div>
    </>
  );
}
