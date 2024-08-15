import Link from "next/link";
import styles from "./menu.module.css"

export default function Menu() {
  return (
    <>
      <div className={styles.menu_wrapper}>
        <Link href="../">Home</Link>
        <Link href="/founders">Founders</Link>
      </div>
    </>
  );
}
