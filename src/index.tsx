import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  // Reactの規約に基づくように厳密に設定
  <StrictMode>
    <App />
  </StrictMode>
);
