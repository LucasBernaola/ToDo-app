import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { TaskProvider } from './context/TaskContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ToDoApp from './Pages/To-DoApp';
import AboutPage from './Pages/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoApp />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  </React.StrictMode>
);

