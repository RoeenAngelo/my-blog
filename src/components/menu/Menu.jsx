import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuPosts from "../menuPost/MenuPosts";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
      </div>
      <h2 className={styles.subtitle}>Chosen by the author</h2>
      <h1 className={styles.title}>Author's Picks</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
