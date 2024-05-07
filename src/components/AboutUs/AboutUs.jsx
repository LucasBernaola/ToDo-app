import React from 'react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutUs.css';

const members = [
  {
    id: 1,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    linkedin: 'https://www.linkedin.com/in/lucas-bernaola/',
    github: 'https://github.com/LucasBernaola'
  },
  {
    id: 2,
    firstName: 'Francisco',
    lastName: 'Molleda',
    image: 'franmolleda.jpg',
    profession: 'Front End Developer',
    linkedin: 'https://www.linkedin.com/in/franciscomolledajerez/',
    github: 'https://github.com/FranMolleda'
  },
  {
    id: 3,
    firstName: 'Moises',
    lastName: 'Vegas Padron',
    image: 'moisesvegaspadron.jpg',
    profession: 'FullStack Developer',
    email: '',
    linkedin: 'https://www.linkedin.com/in/zail-vegas-padron/',
    github: 'https://github.com/rekzail'
  },
  {
    id: 4,
    firstName: 'Gabriela',
    lastName: 'De Freitas',
    image: 'gabrieladefreitas.jpg',
    profession: 'Full Stack Developer',
    linkedin: 'https://www.linkedin.com/in/gabriela-de-freitas-90529b121/',
    github: 'https://github.com/gabrielaDF'
  },
  {
    id: 5,
    firstName: 'Jaaziel',
    lastName: 'Polanco',
    image: 'jaazielpolanco.jpg',
    profession: 'Front End Developer',
    linkedin: 'https://www.linkedin.com/in/jaaziel-sebasti%C3%A1n-polanco-martinez-63a851288/',
    github: 'https://github.com/Jaaziel-Polanco'
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-us-title">Sobre Nosotros</h2>
      <p className="about-us-description">
        El equipo de prácticas de React, reunido a través de Ademass.com, trabajó con entusiasmo y colaboración en el desarrollo de la aplicación To-Do. Juntos compartimos conocimientos y experiencias para llevar a cabo este proyecto, demostrando nuestro compromiso con el aprendizaje y la crecimiento profesional continuo.</p>
      <div className="member-grid">
        {members.map(member => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="member-image" />
            <p className="member-name">{member.firstName} {member.lastName}</p>
            <p className="member-profession">{member.profession}</p>
            <div className="member-social-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <FontAwesomeIcon icon={faLinkedinIn} className="linkedin-icon" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
