'use client';

const snakeData = [
  {
    title: "งูเห่าโฮ่งๆ",
    description: "งูเห่าเป็นงูมีพิษร้ายแรง พบได้บ่อยในไทย",
    image: "/images/snake/snake_01.jpg",
    alt: "งูเห่า"
  },
  {
    title: "งูเขียวหางไหม้ฮู้",
    description: "งูเขียวหางไหม้ พบได้ตามต้นไม้ พิษไม่รุนแรง",
    image: "/images/snake/snake_02.jpg",
    alt: "งูเขียว"
  },
  {
    title: "งูหลามบอลจิ๊กกริ้ว",
    description: "งูหลามบอลน่ารักไม่มีพิษ",
    image: "/images/snake/snake_03.jpg",
    alt: "งูจงอาง"
  },
  {
    title: "งูสายรุ้งหรรษา",
    description: "งูสายรุ้งสีสวย ชอบเลื้อยเล่นในสวน ไม่มีพิษ",
    image: "/images/snake/snake_04.jpg",
    alt: "งูสายรุ้ง"
  },
  {
  title: "งูสิงห์ซูเปอร์ไซส์",
  description: "งูสิงห์ไม่มีพิษ แต่ขนาดตัวใหญ่มาก ใหญ่จนเรียกว่าซูเปอร์ไซส์ได้เลย",
  image: "/images/snake/snake_05.jpg",
  alt: "งูสิงห์"
  },
  {
  title: "งูจงอางบู้บี้",
    description: "งูจงอาง เป็นงูมีพิษร้ายแรงที่สุดในไทย",
    image: "/images/snake/snake_06.jpg",
    alt: "งูจงอาง"
  },
];

export default function Card() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center g-4">
        {snakeData.map((snake, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={snake.image}
                className="card-img-top"
                alt={snake.alt}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{snake.title}</h5>
                <p className="card-text">{snake.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
