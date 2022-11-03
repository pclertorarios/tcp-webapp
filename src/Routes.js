import React from "react";
import DesktopFiftyOne from "pages/DesktopFiftyOne";
import Inicio from "pages/Inicio";
import Rendimiento from "pages/Rendimiento";
import MisTutorias from "pages/MisTutorias";
import Asistencia from "pages/Asistencia";
import DetallesTaller from "pages/DetallesTaller";
import MisTalleres from "pages/MisTalleres";
import Calendario from "pages/Calendario";
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
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/mistalleres" element={<MisTalleres />} />
        <Route path="/detallestaller" element={<DetallesTaller />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/mistutorias" element={<MisTutorias />} />
        <Route path="/rendimiento" element={<Rendimiento />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
        <Route path="/desktopfiftyone" element={<DesktopFiftyOne />} />
      </Routes>
    </Router>
  );
};

//
export default ProjectRoutes;
