import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "src/lang/index";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(
  <>
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecoilRoot>
  </>,
);
