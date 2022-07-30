import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// STYLES
import "./index.sass";
import "./_var.sass";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
