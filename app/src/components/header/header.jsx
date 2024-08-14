import styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header_wrapper}>
        <h1 className={styles.header_title}>🔥 Fireplace Palace</h1>
      </header>
    </>
  );
}

export default Header;
