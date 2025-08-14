import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Task from "./components/Task";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import './index.css';

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
