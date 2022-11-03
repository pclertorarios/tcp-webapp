import React from "react";
import DesktopFiftyOne from "pages/DesktopFiftyOne";
import DesktopEight from "pages/DesktopEight";
import DesktopFifty from "pages/DesktopFifty";
import DesktopFortyNine from "pages/DesktopFortyNine";
import DesktopFortyEight from "pages/DesktopFortyEight";
import DesktopThirtySeven from "pages/DesktopThirtySeven";
import DesktopThirteen from "pages/DesktopThirteen";
import DesktopFortySeven from "pages/DesktopFortySeven";
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
        <Route path="/desktopfortyseven" element={<DesktopFortySeven />} />
        <Route path="/desktopthirteen" element={<DesktopThirteen />} />
        <Route path="/desktopthirtyseven" element={<DesktopThirtySeven />} />
        <Route path="/desktopfortyeight" element={<DesktopFortyEight />} />
        <Route path="/desktopfortynine" element={<DesktopFortyNine />} />
        <Route path="/desktopfifty" element={<DesktopFifty />} />
        <Route path="/desktopeight" element={<DesktopEight />} />
        <Route path="/desktopfiftyone" element={<DesktopFiftyOne />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
