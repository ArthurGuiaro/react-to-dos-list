import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import ToDo from "./components/ToDo"
import React from 'react';

function App() {
  return (
    <div className="App">
      
     <Routes>
    <Route path="/" element={<ToDo/>}/>
     </Routes>
    </div>
  );
}

export default App;
