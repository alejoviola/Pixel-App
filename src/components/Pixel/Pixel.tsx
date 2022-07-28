// REACT
import React, { useState } from "react";

// STYLES
import styles from "./Pixel.module.css";

type PixelTypes = {
  selectedColor?: `#${string}`;
  style?: React.CSSProperties;
};

const Pixel: React.FC<PixelTypes> = ({ selectedColor }) => {
  const [color, setColor] = useState<`#${string}`>("#FFFFFF");
  const [oldColor, setOldColor] = useState<`#${string}`>("#FFFFFF");
  const [canChange, setCanChange] = useState<boolean>(true);

  const applyColor = () => {
    selectedColor ? setColor(selectedColor) : "";
    setCanChange(false);
  };

  const changeColorOnHover = () => {
    setOldColor(color);
    selectedColor ? setColor(selectedColor) : "";
  };

  const resetColor = () => {
    if (canChange) {
      selectedColor ? setColor(oldColor) : "";
    }
    setCanChange(true);
  };
  return (
    <div
      className={styles.Pixel}
      style={{ background: color }}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
    ></div>
  );
};

export default Pixel;
