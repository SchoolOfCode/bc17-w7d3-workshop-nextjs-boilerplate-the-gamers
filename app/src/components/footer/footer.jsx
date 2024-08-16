import styles from "./footer.module.css";


export default function Footer() {
  return (
    <footer className={`${styles.footer_wrapper} grid center`}>
      <div className={`${styles.social} flex center`}>
        <span className={styles.social_tag}>Find us on:</span>
        <span className={`${styles.social_links} flex center`}>
          <span>Facebook</span>
          <span>|</span>
          <span>Instagram</span>
          <span>|</span>
          <span>TikTok</span>
        </span>
      </div>
      <div className={`${styles.notice} flex center`}>
        <span>© Fireplace Palace</span>
        <span>info@fireplace.co.uk</span>
      </div>
    </footer>
  );
}