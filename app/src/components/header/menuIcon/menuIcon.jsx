import Image from "next/image";
import styles from "./menuIcon.module.css";

export default function MenuIcon() {
  return (
    <button className={styles.menuIcon}>
      <Image
        src="/images/menu-open-button.png"
        alt="burger-icon"
        width="30"
        height="30"
      />
    </button>
  );
}
