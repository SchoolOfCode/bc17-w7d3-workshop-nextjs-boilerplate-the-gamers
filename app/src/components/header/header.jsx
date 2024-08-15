"use client";
import styles from "./header.module.css";

import Menu from "../Menu/Menu";
import MenuIcon from "./MenuIcon/MenuIcon";
import { useState } from "react";
import Image from "next/image";

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  function handleMenu() {
    setToggleButton(!toggleButton);
  }

  console.log(toggleButton);

  return (
    <>
      <header className={styles.header_wrapper}>
        <h1 className={styles.header_title}>🔥 Fireplace Palace</h1>
        {/* <MenuIcon onClick={handleMenu} /> */}
        <button className={styles.MenuIcon} onClick={handleMenu}>
          <Image
            src="/images/menu-open-button.png"
            alt="burger-icon"
            width="40"
            height="40"
          />
        </button>
      </header>
      {toggleButton ? <Menu>
        <button className={`${styles.menuIcon} ${styles.closeIcon}`} onClick={handleMenu}>
          <Image
            src="/images/menu-close-button.png"
            alt="close-icon"
            width="40"
            height="40"
          />
        </button>
      </Menu> : ""}
    </>
  );
}

export default Header;
