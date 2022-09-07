import React, { useState } from "react";
function PlaceCard({ img, imgAlt, Info, price, details, deleteTour }) {
  const [readmore, setReadmore] = useState(false);
  return (
    <div>
      <article className="single-tour">
        <img src={img} alt={imgAlt} />
        <footer>
          <div className="tour-info">
            <h4>{Info}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>
            {readmore ? details : details.substring(0, 200) + " ..."}
            <button onClick={() => setReadmore(!readmore)}>
              {readmore ? `Show less` : `Read more`}
            </button>
          </p>
          <button className="delete-btn" onClick={deleteTour}>
            Not Interested!
          </button>
        </footer>
      </article>
    </div>
  );
}

export default PlaceCard;
