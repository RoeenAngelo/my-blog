import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>04/01/2023 - </span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <Link href="/">
            <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          </Link>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            error voluptatibus quam unde nisi repudiandae harum recusandae magni
            culpa cum!
          </p>
          <Link className={styles.link} href="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
