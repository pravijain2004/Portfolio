import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pravi</h1>
        <p className={styles.description}>
          I'm a full-stack developer and building website using React and
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
