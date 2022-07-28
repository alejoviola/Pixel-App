// REACT
import React from "react";

// STYLE
import styles from "./PixelRow.module.sass";

// Components
import Pixel from "../Pixel/Pixel";

// Types
type PixelRowTypes = {
  width: number;
  selectedColor: `#${string}`;
  style?: React.CSSProperties;
};

// COMPONENT
const PixelRow: React.FC<PixelRowTypes> = ({ width, selectedColor }) => {
  let pixels: JSX.Element[] = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className={styles.PixelRow}>{pixels}</div>;
};

export default PixelRow;
