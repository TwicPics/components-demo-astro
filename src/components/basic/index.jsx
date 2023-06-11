/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Code } from "../code";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

export const Basic = () => {
  return (
    <div id="twic-basic-grid-container">
      <div className="twic-grid">
        <div className="twic-item">
          <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
          <span> Default values </span>
        </div>
        <div className="twic-item">
          <TwicImg
            src="football.jpg"
            ratio="16/9"
            mode="cover"
            placeholder="meancolor"
          />
          <span>
            <Code>ratio="16/9"</Code>&<Code>mode="cover"</Code>: the image fills
            the area
          </span>
        </div>
        <div className="twic-item">
          <TwicImg src="football.jpg" step="100" mode="contain" ratio="16/9" />
          <span>
            <Code>ratio="16/9"</Code>&<Code>mode="contain"</Code>: the image
            sits inside the area
          </span>
        </div>
        <div className="twic-item">
          <TwicImg
            src="football.jpg"
            focus="auto"
            mode="contain"
            ratio="2/3"
            step="100"
            placeholder="maincolor"
          />
          <span>
            <Code>ratio="2/3"</Code>,<Code>mode="contain"</Code>&
            <Code>focus="auto"</Code>
          </span>
        </div>
      </div>
    </div>
  );
};
