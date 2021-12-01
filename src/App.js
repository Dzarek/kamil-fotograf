import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={!lightMode ? "app" : "app2"}>
      <Router>
        {!lightMode ? (
          <button
            onClick={() => setLightMode(true)}
            className="modeLightDark darkMode"
          >
            <MdKeyboardArrowUp className="modeLightIcon" />
            <MdLightMode />
          </button>
        ) : (
          <button
            onClick={() => setLightMode(false)}
            className="modeLightDark lightMode"
          >
            <MdDarkMode />
            <MdKeyboardArrowDown className="modeDarkIcon" />
          </button>
        )}
        <Navbar />
        {/* <Routes> */}
        {/* <Route path="/" element={<HomePage />}></Route>
          <Route path="/gallery" element={<HomePage />}></Route> */}
        {/* </Routes> */}
        <HomePage />
        <GalleryPage />
      </Router>
    </div>
  );
}

export default App;
