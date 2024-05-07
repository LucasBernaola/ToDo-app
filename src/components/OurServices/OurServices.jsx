import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/reminders.jpg" alt="Gestión de notas" />
            <h3>Gestión de notas</h3>
            <p>Registra y organiza tus notas de forma rápida y sencilla. Accede a ellas en cualquier momento y en cualquier lugar.</p>
          </div>
          <div className="service-card">
            <img src="/reminders2.jpg" alt="Recordatorios personalizados" />
            <h3>Recordatorios personalizados</h3>
            <p>Establece recordatorios personalizados para asegurarte de no perder ningún evento importante. Nunca olvides una fecha límite o una reunión.</p>
          </div>
          <div className="service-card">
            <img src="/reminders3.jpg" alt="Organización de tareas" />
            <h3>Organización de tareas</h3>
            <p>Crea y administra tus tareas diarias, semanales o mensuales de manera eficiente. Prioriza tus actividades y alcanza tus metas con facilidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
