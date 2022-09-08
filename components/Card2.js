/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState}from "react";


// icons
import heart from "../assets/icons/heart.png";
import comment from "../assets/icons/comment-bubble.svg";
import bookmark from "../assets/icons/bookmark.png";
import more from "../assets/icons/more.png";

import styles from "./Card2.module.scss"

const Card2 = () => {

  const [isShown , setIsShown]=useState(false);

  const clickHandler=(event)=>{
    setIsShown(current => !current);
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <span className={styles.date}>
            <span>12</span>
            <span>AUG</span>
            <span>2016</span>
        </span>

       


    </div>
    <div className={styles.cardBody}>

    <div className={`${styles.iconsMenu} ${isShown ? styles.visible : styles.hidden}`}>
    <li><img src={bookmark} alt="bookmark" /></li>
                    <li className={styles.num}><span>18</span><img src={heart} alt="heart" /></li>
                    <li className={styles.num}><span>3</span><img src={comment} alt="comment" /></li>
        </div>
        <div className={styles.header}>
          <p className={styles.author}>Jane Doe</p>
          <button className={styles.menu} onClick={clickHandler} >
            <img src={more} alt="more" />
          </button>
        </div> 
        

        <h2 className={styles.title}>
          <a href="#">Boxing icon has the will for a couple more fights</a>
        </h2>
        <p className={styles.description}>
          The highly anticipated world championship
           fight will take place at
          10am and is the second major
           boxing blockbuster in the nation after 43
          years.
          <br/>
        </p>
      </div>
    </div>
  );
};

export default Card2;
