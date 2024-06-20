import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Time from "./components/Time";
import Leave from "./components/Leave";
import Requests from "./components/Requests";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/time" element={<Time />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </div>
  );
}

export default App;
