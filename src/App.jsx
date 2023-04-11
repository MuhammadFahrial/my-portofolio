import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Pages/Header/navbar/Navbar";
import Home from "./components/Pages/Body/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portofolio from "./components/Pages/Body/Portofolio/Portofolio";
import About from "./components/Pages/Body/About/About";
import Contact from "./components/Pages/Body/Contact/Contact";
import Web from "./components/Pages/Body/Portofolio/Sub/Web";
import Design3D from "./components/Pages/Body/Portofolio/Sub/Design3D";
import UI_UX from "./components/Pages/Body/Portofolio/Sub/UI_UX";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio /> }>
          <Route path="web" element={<Web />} />
          <Route path="3d-design" element={<Design3D />} />
          <Route path="ui/ux" element={<UI_UX />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
