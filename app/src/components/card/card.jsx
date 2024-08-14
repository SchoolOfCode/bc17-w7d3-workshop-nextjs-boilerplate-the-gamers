import styles from "./card.module.css";
import CardImage from "./cardImage";

function Card({ card }) {
  return (
    <figure className={styles.card}>
      <CardImage src={card.src} alt={card.alt} />
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_caption_title}>{card.title}</h2>
        <p className={styles.card_caption_desc}>{card.desc}</p>
      </figcaption>
    </figure>
  );
}

export default Card;
