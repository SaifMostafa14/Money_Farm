import React from 'react'
import './App.css';
import HomePage from "./HomePage";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
    return (
     
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
      </Routes>
  </BrowserRouter>

    );
  }

export default App;
