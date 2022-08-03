// REACT
import React from "react";

// Style Module
import styles from "DrawingPanel.module.sass";

// Components
import PixelRow from "../PixelRow/PixelRow";

type DrawingPanelTypes = {
  width: number;
  height: number;
  selectedColor: string;
  style?: React.CSSProperties;
};

const DrawingPanel: React.FC<DrawingPanelTypes> = ({
  width,
  height,
  selectedColor,
}) => {
  let rows: JSX.Element[] = [];

  for (let i = 0; i < height; i++) {
    rows.push(<PixelRow key={i} width={width} selectedColor={selectedColor} />);
  }

  return <div>{rows}</div>;
};

export default DrawingPanel;
