import Link from "next/link";
import styles from "./menu.module.css"

export default function Menu({ children }) {
  return (
    <>
      <div className={styles.menu_wrapper}>
        {children}
        <Link href="../" className={styles.menuItem}>Home</Link>
        <Link href="/founders" className={styles.menuItem}>Founders</Link>
      </div>
    </>
  );
}
