import Image from "next/image";
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
          <span className={styles.date}>04/01/2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
