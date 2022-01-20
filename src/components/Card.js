import React from "react";

function Card({ title, subtitle, img }) {
  return (
    <div className="card">
      <div className="card-info">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <img src={img} alt={img} />
    </div>
  );
}

export default Card;
