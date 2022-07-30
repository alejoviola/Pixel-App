// REACT
import React from "react";

// STYLE
import styles from "./DefaultButton.module.sass";

type DefaultButtonTypes = {
  text?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const DefaultButton: React.FC<DefaultButtonTypes> = ({ text, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default DefaultButton;
