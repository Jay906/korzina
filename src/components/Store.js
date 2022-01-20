import React from "react";

function Store({ title, icon }) {
  return (
    <div className="store">
      <img src={icon} className="store-icon" alt={title} />
      <span>{title}</span>
    </div>
  );
}

export default Store;
