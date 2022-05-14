import React, { useEffect, useState } from "react";
import FeatureCard from "./featurecard";
import "../style/features.scss";
import { Clock, Friends, BuildingStore } from "tabler-icons-react";

const Features = (props) => {
  return (
    <div className="features" id="features">
      <div className="features__wrapper">
        <div className="features__title">
          <h1 className="title">Hvad er skole snus?</h1>
          <p className="subtitle">Og hvad kan du lave her?</p>
        </div>
        <div className="features__cards">
          <FeatureCard
            icon={<Clock size={30} color={"#4F95F2"} />}
            title="Snus, når du har mest brug for det"
            desc="Når du har en lang
            skoledag, og du bare
            har brug for noget til
            at komme igennem den"
          />
          <FeatureCard
            icon={<Friends size={30} color={"#4F95F2"} />}
            title="Bliv medlem af et fællesskab"
            desc="Bliv medlem af et fællesskab af snuselskere nær dig."
          />
          <FeatureCard
            icon={<BuildingStore size={30} color={"#4F95F2"} />}
            title="Snus til ovres? Så sælg det her"
            desc="Hvis du har noget snus til ovres, så tjen lidt ekstra penge, og sælg det her."
          />
        </div>
        <button
          className="features__cta"
          onClick={() => (document.location.href = "https://app.skolesnus.dk")}
        >
          Gå til forum
        </button>
      </div>
    </div>
  );
};

export default Features;
