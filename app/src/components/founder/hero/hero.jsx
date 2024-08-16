import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <figure className={`${styles.hero_body} flex`}>
        <img className={styles.hero_img} src="images\founder-mike-and-mandy.png" />
        <figcaption className={styles.hero_caption}>
          <div className={`${styles.hero_caption_box} flex center`}>
            <h1 className={styles.hero_caption_title}>
              Meet the artisans behind our masterpieces!
            </h1>
            <div className={`${styles.hero_caption_subtitle} center flex`}>
              <span>Mike</span>
              <span> & </span>
              <span>Mandy</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}