import Image from "next/image";
import styles from './card.module.css'

const CardImage = ({ src, alt }) => {
  console.log(src, alt);
  return (
    <div className={styles.card_img_container}>
      <Image className={styles.card_img} src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  )
};

export default CardImage;
