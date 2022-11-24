import React from "react";
import DesktopFiftyOne from "pages/DesktopFiftyOne";
import DesktopFortyNine from "pages/DesktopFortyNine";
import DesktopFortyEight from "pages/DesktopFortyEight";
import DesktopThirtySeven from "pages/DesktopThirtySeven";
import DesktopThirteenOne from "pages/DesktopThirteenOne";
import DesktopEightTwo from "pages/DesktopEightTwo";
import RegsitroOne from "pages/RegsitroOne";
import DesktopFifty from "pages/DesktopFifty";
import DesktopFortyNineOne from "pages/DesktopFortyNineOne";
import DesktopFortyEightOne from "pages/DesktopFortyEightOne";
import DesktopThirtySevenTwo from "pages/DesktopThirtySevenTwo";
import DesktopThirteen from "pages/DesktopThirteen";
import DesktopFortySeven from "pages/DesktopFortySeven";
import Regsitroerror from "pages/Regsitroerror";
import DesktopThirtySevenOne from "pages/DesktopThirtySevenOne";
import DesktopSeventeen from "pages/DesktopSeventeen";
import DesktopEight from "pages/DesktopEight";
import DesktopOneOne from "pages/DesktopOneOne";
import DesktopFifteen from "pages/DesktopFifteen";
import DesktopThirteenTwo from "pages/DesktopThirteenTwo";
import DesktopEightOne from "pages/DesktopEightOne";
import DesktopOne from "pages/DesktopOne";
import Register from "pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopEightOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/desktopone" element={<DesktopOne />} />
        <Route path="/desktopthirteentwo" element={<DesktopThirteenTwo />} />
        <Route path="/desktopfifteen" element={<DesktopFifteen />} />
        <Route path="/desktoponeone" element={<DesktopOneOne />} />
        <Route path="/desktopeight" element={<DesktopEight />} />
        <Route path="/desktopseventeen" element={<DesktopSeventeen />} />
        <Route
          path="/desktopthirtysevenone"
          element={<DesktopThirtySevenOne />}
        />
        <Route path="/regsitroerror" element={<Regsitroerror />} />
        <Route path="/desktopfortyseven" element={<DesktopFortySeven />} />
        <Route path="/desktopthirteen" element={<DesktopThirteen />} />
        <Route
          path="/desktopthirtyseventwo"
          element={<DesktopThirtySevenTwo />}
        />
        <Route
          path="/desktopfortyeightone"
          element={<DesktopFortyEightOne />}
        />
        <Route path="/desktopfortynineone" element={<DesktopFortyNineOne />} />
        <Route path="/desktopfifty" element={<DesktopFifty />} />
        <Route path="/regsitroone" element={<RegsitroOne />} />
        <Route path="/desktopeighttwo" element={<DesktopEightTwo />} />
        <Route path="/desktopthirteenone" element={<DesktopThirteenOne />} />
        <Route path="/desktopthirtyseven" element={<DesktopThirtySeven />} />
        <Route path="/desktopfortyeight" element={<DesktopFortyEight />} />
        <Route path="/desktopfortynine" element={<DesktopFortyNine />} />
        <Route path="/desktopfiftyone" element={<DesktopFiftyOne />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
