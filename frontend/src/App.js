import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage.tsx";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
