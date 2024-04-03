import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";
import styles from "./singlePage.module.css";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" className={styles.avatar} alt="" fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Roeen</span>
              <span className={styles.date}>04/03/2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" className={styles.image} alt="" fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              ipsa accusamus, officia minima iusto neque consequuntur mollitia
              quas nostrum eaque!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              ipsa accusamus, officia minima iusto neque consequuntur mollitia
              quas nostrum eaque!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              ipsa accusamus, officia minima iusto neque consequuntur mollitia
              quas nostrum eaque!
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
