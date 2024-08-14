import "./card.module.css";

function Card() {
  const cards = [
    {
      id: "1",
      img: "../public/images/hero-mobile.png",
      title: "Give us a call...",
      desc: `Call us and book in a "Design Consulation" on a date and time to suit you`
    }
  ];

  return (

    <figure className="card">
      <img className="card_img" src={cards.img} alt="image" />
      <figcaption className="card_caption">
        <h2 className="card_caption_title">{cards.title}</h2>
        <p className="card_caption_desc">{cards.desc}</p>
      </figcaption>
    </figure>
  )
}


export default Card;
