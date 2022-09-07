/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// icons
import heart from "../assets/icons/heart.png";
import comment from "../assets/icons/comment-bubble.svg";
import bookmark from "../assets/icons/bookmark.svg";

// style
import styles from "./Card1.module.css"




const Card = () => {
    return (
    
        <div className={styles.card} >
            <div className={styles.cardContainer}>
                <span className={styles.date} >12 Aug 2016</span>
                <div className={styles.iconsMenu} > 
                    <img src={bookmark} alt="bookmark" />
                    <img src={heart} alt="heart" />
                    <img src={comment} alt="comment" />
                </div>
            </div>

            <div className={styles.body}> 
                <p className={styles.author} >Jane Doe</p>
                <h2 className={styles.title}><a href='#'>Stranger Things: The sound of the Upside Down</a></h2>
                <p className={styles.description}>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                <p className={styles.more}>
                <span><a href='#' >Read more
                <span className={styles.arrow}> → </span></a></span>
                </p>
                
            </div>
            
        </div>
    );
};

export default Card;