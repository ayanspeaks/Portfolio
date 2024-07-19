import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Ayan</h1>
        <p className={styles.description}>
          I am an aspiring Software Engineer with hand-on experince of problem
          solving and MERN stack development. I also possess keen interest in data analysis and data visualiazation. Reach out if you would like to
          know more!
        </p>
        <a href="mailto:ayanspeakss@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("male avatar.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
