import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Introduce from "src/pages/Introduce";
import Awards from "src/pages/Awards";
import Projects from "src/pages/Projects";
import Activities from "src/pages/Activity";
import Gallery from "src/pages/Gallery";
import ScrollToTop from "src/components/common/ScorollToTop";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route
          path={process.env.PUBLIC_URL + "/introduce"}
          element={<Introduce />}
        />
        <Route path={process.env.PUBLIC_URL + "/awards"} element={<Awards />} />
        <Route
          path={process.env.PUBLIC_URL + "/projects"}
          element={<Projects />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/activities"}
          element={<Activities />}
        />
        <Route
          path={process.env.PUBLIC_URL + "/gallery"}
          element={<Gallery />}
        />
      </Routes>
    </BrowserRouter>
  );
}
