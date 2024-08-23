import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <figure className={`${styles.hero_body} flex`}>
        <img className={styles.hero_img} src="images\hero-mobile.png" />
        <figcaption className={styles.hero_caption}>
          <div className={`${styles.hero_caption_box} flex center`}>
            <h1 className={styles.hero_caption_title}>
              Discover the Perfect Fireplace
            </h1>
            <div className={`${styles.hero_caption_subtitle} center flex`}>
              <span>Book consultation:</span>
              <span><Link href="/booking" id="booking">Booking</Link></span>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}