import React from "react";

import styles from "./profile.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pravi</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 months of experience using React and
          NestJS. Reach out if you'd like to learn more!
        </p>
      </div>
      <img
        src={getImageUrl("profile/pravi.png")}
        alt="image of me"
        className={styles.Img}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
