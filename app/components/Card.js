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

