import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import PageCom from "./PageCom";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <Routes>
        {Array.from({ length: 100 }, (_, i) => (
          <Route key={i} path={`/baskiliposet${i + 1}`} element={<PageCom />} />
        ))}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
