import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/images/royal-crest-logo.png";
import Card from "../ui/Card";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [background, setBackground] = useState(false);

  // Changes nav background from transparent to white on blue on scroll
  function onScroll() {
    if (window.scrollY >= 60) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const toggleHandler = () => {
    setMenuOpen((current) => !current);
  };
  return (
    <div
      className={`${styles.navigationContainer} ${
        background ? styles.navChangeBg : null
      }`}
    >
      <Card>
        <div className={styles.navWrap}>
          <div>
            <div className={styles.logoImgWrapper}>
              <Image src={Logo} alt='company logo' />
            </div>
            <div className={styles.slogan}>...Step into Royalty</div>
          </div>
          <div className={styles.menu} onClick={toggleHandler}>
            {!menuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>
          {menuOpen && (
            <nav className={styles.navLinksWrapperMobile}>
              <ul className={styles.navListGroup}>
                <li className={styles.navItem}>
                  <Link href='/' className={styles.linkItem}>
                    Home
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='/about' className={styles.linkItem}>
                    About us
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link href='/rooms' className={styles.linkItem}>
                    Rooms
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    className={styles.linkItem}
                    href='/contact'
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          {/* -----------  Large Screens --------------- */}
          <nav className={styles.navLinksWrapperLg}>
            <ul className={styles.navListGroupLg}>
              <li className={styles.navItemLg}>
                <Link href='/' className={styles.linkItemLg}>
                  Home
                </Link>
              </li>
              <li className={styles.navItemLg}>
                <Link href='/about' className={styles.linkItemLg}>
                  About us
                </Link>
              </li>
              <li className={styles.navItemLg}>
                <Link href='/rooms' className={styles.linkItemLg}>
                  Rooms
                </Link>
              </li>
              <li className={styles.navItemLg}>
                <Link className={styles.linkItemLg} href='/contact'>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Card>
    </div>
  );
};

export default MainNavigation;
