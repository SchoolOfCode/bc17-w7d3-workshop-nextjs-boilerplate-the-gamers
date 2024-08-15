import styles from "./header.module.css";

import Menu from "../Menu/Menu";
import MenuIcon from "./MenuIcon/MenuIcon";

function Header() {
  return (
    <>
      <header className={styles.header_wrapper}>
        <h1 className={styles.header_title}>🔥 Fireplace Palace</h1>
        <MenuIcon />
        {/* <Menu /> */}
      </header>
    </>
  );
}

export default Header;
