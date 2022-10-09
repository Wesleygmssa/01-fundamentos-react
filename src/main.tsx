import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Existe confia --> ! <-- para que o react-dom/client seja reconhecido
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
