// REACT
import { useState } from "react";

// STYLES
import styles from "./App.module.sass";

// Components
import Pixel from "./components/Pixel/Pixel";

function App() {
  const [selectedColor, setSelectedColor] = useState<`#${string}`>("#333333");

  return (
    <div className="App">
      <div>
        <button
          className={styles.SelectColor}
          style={{ background: "#FF8E00" }}
          onClick={() => setSelectedColor("#FF8E00")}
        ></button>
        <button
          className={styles.SelectColor}
          style={{ background: "#003F7D" }}
          onClick={() => setSelectedColor("#003F7D")}
        ></button>
        <button
          className={styles.SelectColor}
          style={{ background: "#333333" }}
          onClick={() => setSelectedColor("#333333")}
        ></button>
      </div>

      <Pixel selectedColor={selectedColor} />
      <Pixel selectedColor={selectedColor} />
      <Pixel selectedColor={selectedColor} />
      <Pixel selectedColor={selectedColor} />
      <Pixel selectedColor={selectedColor} />
      <Pixel selectedColor={selectedColor} />
    </div>
  );
}

export default App;
