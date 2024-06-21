import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Time from "./pages/Time";
import Leave from "./pages/Leave";
import Requests from "./pages/Requests";

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
