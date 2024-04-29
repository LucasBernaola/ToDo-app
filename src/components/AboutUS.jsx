import React from 'react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const members = [
  {
    id: 1,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    linkedin: 'https://www.linkedin.com/in/lucas-bernaola-b58b3720a/',
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
    <div className="bg-gradient-to-r from-primary to-secondary text-textPrimary p-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8 shadow-white" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>About Us</h2>
      <p className="text-xl text-center text-textPrimary shadow-white mb-8" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>The React practice team, gathered through Ademass.com, worked with enthusiasm and collaboration on the development of the To-Do application. Together, we shared knowledge and experiences to carry out this project, demonstrating our commitment to learning and continuous improvement.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {members.map(member => (
          <div key={member.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="w-24 h-24 rounded-full mb-4" />
            <p className="text-lg font-bold mb-1">{member.firstName} {member.lastName}</p>
            <p className="mb-1 text-textSecondary">{member.profession}</p>
            <div className="flex items-center">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-xl text-blue-500" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-800" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

