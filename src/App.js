import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Layout from "./Layout";
import {
  Abitur,
  Contacts,
  Docs,
  EduCuality,
  EduProcess,
  Home,
  Info,
  NotFound,
  Projects,
  Structur,
  Stubpage,
  Tech,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="structur" element={<Structur />} />
        <Route path="eduprocess" element={<EduProcess />} />
        <Route path="docs" element={<Docs />} />
        <Route path="abitur" element={<Abitur />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tech" element={<Tech />} />
        <Route path="educuality" element={<EduCuality />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="stubpage" element={<Stubpage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
