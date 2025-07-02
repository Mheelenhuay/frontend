import Carousel from "./components/Carousel";
import Card from "./components/Card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-6">
      <Carousel />
      <h1 className="text-6xl text-center text-indigo-700 font-extrabold mb-6 drop-shadow-lg">
        Home Page
      </h1>
      <h2 className="text-4xl font-semibold text-purple-800 mb-8 text-center max-w-xl">
        Pattarasai Jaipong <span className="text-pink-600">muhahaha 037 XDDDDDDD</span>
      </h2>
      <Card />
    </div>
  );
}


