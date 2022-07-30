// REACT
import React, { useState } from "react";

// STYLES
import styles from "./App.module.sass";

// Components
import DrawingPanel from "./components/DrawingPanel/DrawingPanel";
import CreateFile from "./components/CreateFile/CreateFile";

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
  const [selectedColor, setSelectedColor] = useState<`#${string}`>("#333333");

  const [size, setSize] = useState<SizeType>({
    width: 32,
    height: 32,
  });

  const create = () => {
    setView(Views.Draw);
  };

  ////////////
  // RENDER //
  ////////////
  return (
    <div className="App">
      {view == Views.Create ? (
        <CreateFile size={size} setSize={setSize} onButtonClick={create} />
      ) : null}
    </div>
  );
};

export default App;
