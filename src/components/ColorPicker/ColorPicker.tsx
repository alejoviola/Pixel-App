//React
import React from "react";

//Components
import ColorButton from "../Buttons/ColorButton/ColorButton";

/////////////
//Component//
/////////////
const ColorPicker = ({
  selectedColor,
  setSelectedColor,
  colors,
  style,
}: {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;

  colors: string[];
  style?: React.CSSProperties;
}): JSX.Element => {
  //////////
  //RENDER//
  //////////
  return (
    <div>
      {colors.map((value, i) => {
        return (
          <ColorButton
            selectedColor={selectedColor}
            color={value}
            setSelectedColor={setSelectedColor}
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
