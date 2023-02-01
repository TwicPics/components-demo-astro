/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Code } from "../code";
import { TwicVideo } from "@twicpics/components/react";
import "./index.scss";

export const ShortVideos = () => {
  return (
    <div id="twic-short-videos-container">
      <div className="twic-grid">
        <div className="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            placeholder="preview"
            ratio="16/9"
          />
          <span>
            <Code>ratio="16/9"</Code>&<Code>mode="cover"</Code>: the video fills
            the area
          </span>
        </div>
        <div className="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            focus="center"
            intrinsic="1280x720"
            mode="cover"
            placeholder="maincolor"
          />
          <span> Default values </span>
        </div>
        <div className="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            placeholder="meancolor"
            mode="contain"
            ratio="1"
          />
          <span>
            <Code>ratio="1"</Code>&<Code>mode="contain"</Code>: the video sits
            inside the area
          </span>
        </div>
        <div className="twic-item">
          <TwicVideo
            src="video/skater.mp4"
            intrinsic="1280x720"
            placeholder="preview"
            ratio="2/3"
          />
          <span>
            <Code>ratio="2/3"</Code>,<Code>mode="cover"</Code>: the video fills
            the area
          </span>
        </div>
      </div>
    </div>
  );
};
