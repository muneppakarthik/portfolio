// components/CustomSlider.jsx
"use client";
// import dynamic from "next/dynamic";
// const Slider = dynamic(() => import("react-slick"), { ssr: false });
import React from "react";
import { useKeenSlider, KeenSliderOptions } from "keen-slider/react";
import "./CustomSlider.scss";

interface CustomSliderProps<T> {
  items: T[];
  settings?: KeenSliderOptions;
  renderItem?: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export default function CustomSlider<T>({
  items = [],
  settings = {},
  renderItem,
  className = "",
}: CustomSliderProps<T>) {
  const slidesConfig =
    typeof settings?.slides === "object" && settings.slides !== null
      ? settings.slides
      : {};
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 30,
      ...slidesConfig,
    },
    ...settings,
  });

  return (
    <div className={`keen-slider custom-slider ${className}`} ref={sliderRef}>
      {items.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          {renderItem ? renderItem(item, index) : null}
        </div>
      ))}
    </div>
  );
}
