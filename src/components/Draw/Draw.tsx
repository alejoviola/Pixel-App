// REACT
import React from "react";

// STYLE
import styles from "./Draw.module.sass";

// Components
import DrawingPanel from "../DrawingPanel/DrawingPanel";

// types
type DrawTypes = {
  size: { width: number; height: number };
  selectedColor: string;
  style?: React.CSSProperties;
};

const Draw: React.FC<DrawTypes> = ({ size, selectedColor, style }) => {
  return (
    <div>
      <DrawingPanel
        width={size.width}
        height={size.height}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default Draw;
