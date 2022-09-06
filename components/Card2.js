import React from "react";

// icons
import heart from "../assets/icons/heart.png";
import comment from "../assets/icons/comment-bubble.svg";
import bookmark from "../assets/icons/bookmark.svg";
import more from "../assets/icons/more.png";

import styles from "./Card2.module.css"

const Card2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <span className={styles.date}>
            <span>12</span>
            <span>AUG</span>
            <span>2016</span>
        </span>
        <div className={styles.iconsMenu}>
          <img src={bookmark} alt="heart" />
          <img src={heart} alt="heart" />
          <img src={comment} alt="comment" />
        </div>


    </div>
    <div className={styles.cardBody}>
        <div className={styles.header}>
          <p className={styles.author}>Jane Doe</p>
          <span className={styles.menu} >
            <img src={more} alt="more" />
          </span>
        </div>

        <h2 className={styles.title}>
          Boxing icon has the will for a couple more fights
        </h2>
        <p className={styles.description}>
          The highly anticipated world championship
           fight will take place at
          10am and is the second major
           boxing blockbuster in the nation after 43
          years.
        </p>
      </div>
    </div>
  );
};

export default Card2;
