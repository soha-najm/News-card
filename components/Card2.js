import React from "react";

// icons
import heart from "../assets/icons/heart.png";
import comment from "../assets/icons/comment-bubble.svg";
import bookmark from "../assets/icons/bookmark.svg";
import more from "../assets/icons/more.png";

const Card2 = () => {
  return (
    <div className="card">
      <div className="card_container">
        <span className="card_date"></span>
        <div className="card_icons" style={{ backgroundColor: "black" }}>
          <img src={heart} alt="heart" />
          <img src={comment} alt="comment" />
          <img src={bookmark} alt="heart" />
        </div>
      </div>
      <div className="card_body">
        <div className="card_header">
          <p className="card_author">Jane Doe</p>
          <span className="show_menu">
            <img src={more} alt="more" />
          </span>
        </div>

        <h2 className="card_title">
          Boxing icon has the will for a couple more fights
        </h2>
        <p className="card_description">
          The highly anticipated world championship fight will take place at
          10am and is the second major boxing blockbuster in the nation after 43
          years.
        </p>
      </div>
    </div>
  );
};

export default Card2;
