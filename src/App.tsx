import React, { useEffect, useLayoutEffect } from "react";
import "./assets/css/app.scss";
import Router from "./router/index";
import { preloadImage } from "src/lib/worker/preloadImage";

function App() {
  let page = "";

  useEffect(() => {
    if (window.location.href.includes("introduce")) {
      page = "IntroducePage";
    } else if (window.location.href.includes("projects")) {
      page = "ProjectsPage";
    } else if (window.location.href.includes("awards")) {
      page = "AwardsPage";
    }

    preloadImage(page);
  }, [window.location]);
  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
