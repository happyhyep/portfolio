import React, { useLayoutEffect } from "react";
import "./assets/css/app.scss";
import Router from "./router/index";
import { preloadImage } from "src/lib/worker/preloadImage";

function App() {
  let page = "";

  useLayoutEffect(() => {
    if (window.location.href.includes("introduce")) {
      page = "IntroducePage";
    } else if (window.location.href.includes("projects")) {
      page = "ProjectsPage";
    }

    preloadImage(page);
    console.log("ww");
  });
  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
