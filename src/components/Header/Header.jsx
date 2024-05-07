import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="card">
          <h1 className="card-title">Organiza tus tareas con To Do App</h1>
          <p className="card-description">
            Mantén todas tus notas, recordatorios y tareas organizadas en un solo lugar con To Do App. Simplifica tu día a día y nunca olvides ninguna tarea importante.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;