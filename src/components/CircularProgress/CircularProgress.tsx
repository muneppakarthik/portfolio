import React from "react";
import "./circularprogress.scss";

interface Props {
  value: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const CircularProgress = ({
  value,
  size = 45,
  strokeWidth = 4,
  color = "#f46258",
}: Props) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="circular-progress">
      <circle
        className="trail"
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="path"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="progress-text"
      >
        {`${value}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
