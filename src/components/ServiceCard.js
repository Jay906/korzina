import React from "react";

function ServiceCard({ title, subtitle }) {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default ServiceCard;
