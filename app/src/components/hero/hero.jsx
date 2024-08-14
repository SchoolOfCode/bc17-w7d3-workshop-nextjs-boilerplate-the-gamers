import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <figure className={`${styles.hero_body} ${styles.flex}`}>
        <img className={styles.hero_img} src="images\hero-mobile.png" />
        <figcaption className={styles.hero_caption}>
          <div className={`${styles.hero_caption_box} ${styles.flex}`}>
            <h1 className={styles.hero_caption_title}>
              Discover the Perfect Fireplace ...
            </h1>
            <div className={styles.hero_caption_subtitle}>
              <span>Book consultation:</span>
              <span>0121 345 6789</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}