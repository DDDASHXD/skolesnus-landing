import React, { useEffect, useState } from "react";
import "../style/hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className="herobg"></div>
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__wrapper__text">
            <h1 className="hero__wrapper__text__title">SKOLESNUS.DK</h1>
            <p className="hero__wrapper__text__subtitle">
              Fede deals på snus, smøger og nikotin poser, nær dig
            </p>
          </div>
          <div className="hero__wrapper__buttons">
            <button
              className="hero__wrapper__buttons__cta"
              onClick={() =>
                (document.location.href = "https://app.skolesnus.dk")
              }
            >
              Gå til forum
            </button>
            <button
              className="hero__wrapper__buttons__sub-cta"
              onClick={() => (document.location.href = "#features")}
            >
              Lær mere
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
