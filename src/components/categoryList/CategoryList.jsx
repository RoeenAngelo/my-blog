import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./categoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link
          className={`${styles.category} ${styles.style}`}
          href="/blog?cat=style"
        >
          <Image
            className={styles.image}
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          Style
        </Link>
        <Link
          className={`${styles.category} ${styles.fashion}`}
          href="/blog?cat=fashion"
        >
          <Image
            className={styles.image}
            src="/fashion.png"
            alt=""
            height={32}
            width={32}
          />
          Fashion
        </Link>
        <Link
          className={`${styles.category} ${styles.food}`}
          href="/blog?cat=food"
        >
          <Image
            className={styles.image}
            src="/food.png"
            alt=""
            height={32}
            width={32}
          />
          Food
        </Link>
        <Link
          className={`${styles.category} ${styles.travel}`}
          href="/blog?cat=travel"
        >
          <Image
            className={styles.image}
            src="/travel.png"
            alt=""
            height={32}
            width={32}
          />
          travel
        </Link>
        <Link
          className={`${styles.category} ${styles.culture}`}
          href="/blog?cat=culture"
        >
          <Image
            className={styles.image}
            src="/culture.png"
            alt=""
            height={32}
            width={32}
          />
          culture
        </Link>
        <Link
          className={`${styles.category} ${styles.coding}`}
          href="/blog?cat=coding"
        >
          <Image
            className={styles.image}
            src="/coding.png"
            alt=""
            height={32}
            width={32}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
