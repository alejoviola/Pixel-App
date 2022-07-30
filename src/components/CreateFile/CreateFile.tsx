// REACT
import React, { useRef, useState } from "react";

// STYLES
import styles from "./CreateFile.module.sass";

//Components
import DefaultButton from "../Buttons/DefaultButton/DefaultButton";

// Types
type CreateFileTypes = {
  size: any;
  setSize: any;
  onButtonClick: () => void;
  style?: React.CSSProperties;
};

//////////////
// COMPONENT//
//////////////
const CreateFile: React.FC<CreateFileTypes> = ({
  size,
  setSize,
  onButtonClick,
}) => {
  // FUNCTIONS //
  // Catch Input Values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSize({
      ...size,
      [e.target.name]: value,
    });

    console.log(size);
  };

  ////////////
  // RENDER //
  ////////////
  return (
    <div>
      <form action="">
        <input
          className={styles.Input}
          type="number"
          name="width"
          maxLength={3}
          value={size.width}
          onChange={handleChange}
        />
        <input
          className={styles.Input}
          type="number"
          name="height"
          maxLength={3}
          value={size.height}
          onChange={handleChange}
        />
      </form>

      <div style={{ textAlign: "center" }}>
        <DefaultButton text="Create File" onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default CreateFile;
