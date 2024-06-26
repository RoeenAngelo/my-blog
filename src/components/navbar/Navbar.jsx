import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" height={24} width={24} />
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/tiktok.png" alt="tiktok" height={24} width={24} />
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
      </div>
      <div className={styles.logo}>Roeen Angelo</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
        <Link className={styles.link} href="/">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
