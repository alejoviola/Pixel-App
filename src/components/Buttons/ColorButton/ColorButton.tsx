// REACT
import React from "react";

// Style
import styles from "./ColorButton.module.sass";

// COMPONENT
const ColorButton = ({
  selectedColor,
  color,
  setSelectedColor,
}: {
  selectedColor: string;
  color: string;
  style?: React.CSSProperties;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  // Functions
  const changeColor = () => {
    setSelectedColor(color);
  };

  const onMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    target.style.background = "none";
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    target.style.background = selectedColor == color ? "none" : color;
  };

  return (
    <button
      style={{
        background: selectedColor == color ? "none" : color,
        boxShadow: `0px 0px 0px 0.5em ${color} inset`,
      }}
      onClick={changeColor}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={styles.Button}
    />
  );
};

export default ColorButton;
