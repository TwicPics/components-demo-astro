import React from "react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const imgUrl = `components/greece.jpg`;

export const ArtDirections = () => {
  return (
    <div id="twic-art-direction-container">
      <div className="style-driven-responsive twic-item">
        <TwicImg src={imgUrl} focus="48px100p" />
      </div>
    </div>
  );
};
