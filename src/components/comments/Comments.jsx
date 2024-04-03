import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Write a comment..." />
          <button className={styles.button}>post</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Roeen</span>
              <span className={styles.date}>04/03/2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem necessitatibus adipisci cum ea id itaque
            debitis, maiores quae ratione?
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Roeen</span>
              <span className={styles.date}>04/03/2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem necessitatibus adipisci cum ea id itaque
            debitis, maiores quae ratione?
          </p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Roeen</span>
              <span className={styles.date}>04/03/2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem necessitatibus adipisci cum ea id itaque
            debitis, maiores quae ratione?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
