import React, { useEffect, useState } from "react";

const FeatureCard = (props) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__icon">{props.icon}</div>
        <p className="card__title">{props.title}</p>
        <p className="card__desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
