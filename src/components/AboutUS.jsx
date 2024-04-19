import React from 'react';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Datos de los integrantes (puedes modificar según necesites)
const members = [
  {
    id: 1,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@gmail.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 2,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 3,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 4,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 5,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 6,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 7,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  {
    id: 8,
    firstName: 'Lucas',
    lastName: 'Bernaola',
    image: 'lucasbernaola.jpg',
    profession: 'Front End Developer',
    email: 'bernalb2014@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-textPrimary p-8 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map(member => (
          <div key={member.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="w-24 h-24 rounded-full mb-4" />
            <p className="text-lg font-bold mb-1">{member.firstName} {member.lastName}</p>
            <p className="mb-1 text-textSecondary">{member.profession}</p>
            <p className="mb-4 text-textSecondary">{member.email}</p>
            <div className="flex items-center">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mr-4"><i className="fab fa-linkedin-in text-xl text-blue-500"></i></a>
              <a href={member.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-xl text-gray-800"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

