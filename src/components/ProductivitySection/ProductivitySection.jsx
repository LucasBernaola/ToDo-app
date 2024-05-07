import React from 'react';
import './ProductivitySection.css';

const ProductivitySection = () => {
  return (
    <section className="productivity-section">
      <div className="container">
        <div className="productivity-content">
          <div className="text-content">
            <h2>Aumente la productividad con nuestra aplicación To Do</h2>
            <p>Manténgase organizado y al tanto de sus tareas sin esfuerzo.</p>
          </div>
          <div className="small-cards">
            <div className="small-card">
              <div className="number">2x</div>
              <div className="text-content">
                <h4>Incremento en eficiencia</h4>
              </div>
            </div>
            <div className="small-card">
              <div className="number">80%</div>
              <div className="text-content">
                <h4>Menos tiempo dedicado a la organización</h4>
              </div>
            </div>
            <div className="small-card">
              <div className="number">3.5x</div>
              <div className="text-content">
                <h4>Crecimiento en la tasa de finalización de tareas</h4>
              </div>
            </div>
            <div className="small-card">
              <div className="number">95%</div>
              <div className="text-content">
                <h4>Satisfacción con la gestión de tareas</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductivitySection;
