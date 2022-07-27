// REACT
import React from "react";

// STYLES
import styles from "./Pixel.module.css";

type PixelTypes = {
  style?: React.CSSProperties;
};

const Pixel: React.FC<PixelTypes> = () => {
  return <div className={styles.Pixel} style={{ background: "red" }}></div>;
};

export default Pixel;
