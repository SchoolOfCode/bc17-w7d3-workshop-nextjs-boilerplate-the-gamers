"use client";
import styles from "./header.module.css";

import Menu from "../Menu/Menu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  function handleMenu() {
    setToggleButton(!toggleButton);
  }

  //Close menu when user navigates to another page
  const pathname = usePathname();
  useEffect(() => {
    setToggleButton(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header_wrapper}>
        <h1 className={styles.header_logo}>🔥</h1>
        <h1 className={styles.header_title}>Fireplace Palace</h1>
        {/* <MenuIcon onClick={handleMenu} /> */}
        <button
          className={`${styles.MenuIcon} flex`}
          onClick={handleMenu}
          id="menu-button"
        >
          <Image
            src="/images/menu-open-button.png"
            alt="burger-icon"
            width="40"
            height="40"
          />
        </button>
      </header>
      {toggleButton ? (
        <Menu>
          <button
            className={`${styles.menuIcon} ${styles.closeIcon}`}
            onClick={handleMenu}
          >
            <Image
              src="/images/menu-close-button.png"
              alt="close-icon"
              width="40"
              height="40"
            />
          </button>
        </Menu>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
