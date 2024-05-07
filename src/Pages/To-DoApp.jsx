import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ToDo from '../components/toDo/ToDo';

const ToDoApp = () => {
  return (
    <div>
      <NavBar />
      <ToDo />
      <Footer />
    </div>
  );
}

export default ToDoApp;
