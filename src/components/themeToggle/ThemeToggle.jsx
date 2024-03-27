"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon pic" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="sun pic" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
