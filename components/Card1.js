import React from 'react';

// icons
import heart from "../assets/icons/heart.png";
import comment from "../assets/icons/comment-bubble.svg";
import bookmark from "../assets/icons/bookmark.svg";
import arrow from "../assets/icons/arrow.png";




const Card = () => {
    return (
        <div className='card' >
            <div className='card_container'>
                <span className='card_date' ></span>
                <div className='card_icons' style={{"backgroundColor":"black"}} > 
                    <img src={heart} alt="heart" />
                    <img src={comment} alt="comment" />
                    <img src={bookmark} alt="heart" />
                </div>
            </div>
            <div className='card_body'> 
                <p className='card_author' >Jane Doe</p>
                <h2 className='card_title'>Stranger Things: The sound of the Upside Down</h2>
                <p className='card_description'>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.
                <span><a href='#' >see more <img src={arrow} alt="arrow" /></a></span>
                </p>
            </div>
            
        </div>
    );
};

export default Card;