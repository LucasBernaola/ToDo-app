import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import ToDoApp from "./Pages/To-DoApp";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
