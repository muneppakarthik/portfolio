// components/CustomSlider.jsx
"use client";
// import dynamic from "next/dynamic";
// const Slider = dynamic(() => import("react-slick"), { ssr: false });
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "./CustomSlider.scss";

export default function CustomSlider({
  items = [],
  settings = {},
  renderItem,
  className = "",
}) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 30,
      ...(settings.slides || {}),
    },
    ...settings,
  });

  return (
    <div className={`keen-slider custom-slider ${className}`} ref={sliderRef}>
      {items.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          {renderItem ? renderItem(item, index) : item}
        </div>
      ))}
    </div>
  );
}
