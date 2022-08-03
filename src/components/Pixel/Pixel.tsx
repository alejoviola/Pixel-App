// REACT
import React, { useState } from "react";

// STYLES
import styles from "./Pixel.module.sass";

// COMPONENT
const Pixel = ({
  selectedColor,
}: {
  selectedColor: string;
  style?: React.CSSProperties;
}): JSX.Element => {
  const [color, setColor] = useState<`#${string}`>("#FFFFFF");
  const [oldColor, setOldColor] = useState<`#${string}`>("#FFFFFF");
  const [canChange, setCanChange] = useState<boolean>(true);

  const applyColor = () => {
    setColor(selectedColor);
    setCanChange(false);
  };

  const changeColorOnHover = () => {
    setOldColor(color);
    setColor(selectedColor);
  };

  const resetColor = () => {
    if (canChange) {
      setColor(oldColor);
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
    />
  );
};

export default Pixel;
