// REACT
import React, { useState } from "react";

// STYLES
import styles from "./Pixel.module.css";

type PixelTypes = {
  selectedColor?: `#${string}`;
  style?: React.CSSProperties;
};

const Pixel: React.FC<PixelTypes> = ({ selectedColor }) => {
  const [color, setColor] = useState<`#${string}`>("#333333");

  return (
    <div
      className={styles.Pixel}
      style={{ background: color }}
      onMouseEnter={() => {
        selectedColor ? setColor(selectedColor) : "";
      }}
    ></div>
  );
};

export default Pixel;
