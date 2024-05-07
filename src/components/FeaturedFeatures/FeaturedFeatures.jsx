import React from 'react';
import './FeaturedFeatures.css';

const FeaturedFeatures = () => {
  return (
    <section className="featured-features">
      <div className="container">
        <h2>Características Destacadas</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="sub-card">
              <div className="text-content">
                <h3>Interfaz Intuitiva</h3>
                <p>Disfruta de una interfaz intuitiva y fácil de usar que te permite gestionar tus tareas de manera eficiente.</p>
              </div>
            </div>
            <div className="image-container">
              <img src="interfaz.jpg" alt="Interfaz Intuitiva" />
            </div>
          </div>
          <div className="feature-card">
            <div className="image-container">
              <img src="sincronizacion.jpg" alt="Sincronización en Tiempo Real" />
            </div>
            <div className="sub-card">
              <div className="text-content">
                <h3>Sincronización en Tiempo Real</h3>
                <p>Sincroniza tus datos en tiempo real en todos tus dispositivos para acceder a ellos en cualquier momento y lugar.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="sub-card">
              <div className="text-content">
                <h3>Organización Eficiente de Tareas</h3>
                <p>Optimiza tu productividad con nuestra aplicación de gestión de tareas. Organiza tus notas, recordatorios y tareas de manera efectiva y no pierdas de vista ninguna actividad importante en tu rutina diaria.</p>
              </div>
            </div>
            <div className="image-container">
              <img src="tasks.jpg" alt="Organización Eficiente de Tareas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFeatures;

