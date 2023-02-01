import React from "react";
import { TwicImg } from "@twicpics/components/react";
import "./index.scss";

const images = [
  {
    url: `components/slider/pantone.jpg`,
  },
  {
    url: `components/slider/coffee.jpg`,
  },
  {
    url: `components/slider/reading.jpg`,
  },
  {
    url: `components/slider/cat-2.jpg`,
  },
  {
    url: `components/slider/mirror.jpg`,
  },
  {
    url: `components/slider/books.jpg`,
  },
  {
    url: `components/slider/sea.jpg`,
  },
  {
    url: `components/slider/frames.jpg`,
  },
  {
    url: `components/slider/dried-flower.jpg`,
  },
  {
    url: `components/slider/dune.jpg`,
  },
  {
    url: `components/slider/coffee-2.jpg`,
  },
  {
    url: `components/slider/yak.jpg`,
  },
  {
    url: `components/slider/dried-flower-2.jpg`,
  },
  {
    url: `components/slider/guitar.jpg`,
  },
  {
    url: `components/slider/field.jpg`,
  },
  {
    url: `components/slider/woman-and-sand.jpg`,
  },
];

export const Slider = () => {
  return (
    <div id="slider-container">
      <ul className="slider">
        {images.map((image, i) => (
          <li className="slider-item" key={i}>
            <figure className="card twic-item">
              <TwicImg src={image.url} />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};
