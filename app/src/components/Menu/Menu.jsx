import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu({ children }) {
  return (
    <>
      <div className={`${styles.menu_wrapper} flex center`}>
        <div className={`${styles.menu_container} flex`}>
          {children}
          <Link href="/" className={styles.menuItem}>
            Home
          </Link>
          <Link
            href="/founders"
            className={styles.menuItem}
            id="founders"
          >
            Founders
          </Link>
          <Link href="/booking" className={styles.menuItem}
            id="booking">
            Booking
          </Link>
        </div>
      </div>
    </>
  );
}
