// REACT
import React, { useState } from "react";

// Components
import TestCanvas from "./components/TestCanvas/TestCanvas";
import CreateFile from "./components/CreateFile/CreateFile";
import Draw from "./components/Draw/Draw";

import ColorPicker from "./components/ColorPicker/ColorPicker";

// DATA
import { colors } from "./data/data.json";

enum Views {
  Create,
  Draw,
}

// Types
type SizeType = {
  width: number;
  height: number;
};

// Component
const App: React.FC = () => {
  //Views
  const [view, setView] = useState<Views>(Views.Create);
  const [selectedColor, setSelectedColor] = useState<string>("#FFFFFF");

  const [size, setSize] = useState<SizeType>({
    width: 16,
    height: 16,
  });

  const create = () => {
    setView(Views.Draw);
  };

  ////////////
  // RENDER //
  ////////////
  return (
    <>
      {/* {view == Views.Create ? (
        <CreateFile size={size} setSize={setSize} onButtonClick={create} />
      ) : null}
      {view == Views.Draw ? (
        <>
          <ColorPicker
            colors={colors}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
          <Draw size={size} selectedColor={selectedColor} />
        </>
      ) : null} */}
      <TestCanvas />
    </>
  );
};

export default App;
