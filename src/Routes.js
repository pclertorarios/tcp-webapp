import React from "react";
import Regsitroerror from "pages/Regsitroerror";
import DesktopFortyThree from "pages/DesktopFortyThree";
import Regsitro from "pages/Regsitro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Regsitro />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktopfortythree" element={<DesktopFortyThree />} />
        <Route path="/regsitroerror" element={<Regsitroerror />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
