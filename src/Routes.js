import React from "react";
import DesktopFifty from "pages/DesktopFifty";
import DesktopEight from "pages/DesktopEight";
import Regsitroerror from "pages/Regsitroerror";
import Register from "pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/regsitroerror" element={<Regsitroerror />} />
        <Route path="/desktopeight" element={<DesktopEight />} />
        <Route path="/desktopfifty" element={<DesktopFifty />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
