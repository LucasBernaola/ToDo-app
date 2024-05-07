import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-section">
          <h2>To Do App</h2>
        </div>
        <div className="middle-section">
          <div className="footer-column">
            <h3>COMPANIA</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Quienes Somos?</a></li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <div className="footer-column">
            <h3>RECURSOS</h3>
            <ul>
              <li><a href="#">POLITICA DE PRIVACIDAD</a></li>
              <li><a href="#">TERMINOS Y CONDICIONES</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <p className="copyright">© Copyright 2024, All Rights Reserved by To Do App</p>
    </footer>
  );
}

export default Footer;
