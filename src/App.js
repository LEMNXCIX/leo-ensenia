import React from "react";
import {Inicio}  from "./pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cursos } from "./pages/Cursos";
import { Curso } from "./pages/Curso";
import { Acercade } from "./pages/Acercade";
import { Registro } from "./pages/Registro";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/cursos" element={<Cursos/>}/>
          <Route exact path="/cursos/:id" element={<Curso/>}/>
          <Route exact path="/acercade" element={<Acercade/>}/>
          <Route exact path="/registro" element={<Registro/>}/>
        </Routes>
      </Router>
    </>
  );
};
