import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ToDo from '../components/toDo/ToDo';
import AboutApp from '../components/AboutApp';
import AboutUs from '../components/AboutUS';

const Home = () => {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      }, []);

    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    return (
        <main className="bg-gradient-to-r from-primary to-secondary">
            <motion.header
                initial="hidden"
                animate="visible"
                variants={variants}
                className="bg-gradient-to-r from-primary to-secondary p-8 flex flex-col justify-center items-center"
            >
                <nav className="mb-20">
                    <ul className="flex space-x-20">                        
                        <li>
                            <a href="#aboutApp" className="text-textSecondary no-underline font-arial text-3xl font-bold shadow-white" style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}>
                                About App
                            </a>
                        </li>
                        <li>
                            <a href="#aboutUs" className="text-textSecondary no-underline font-arial text-3xl font-bold shadow-white" style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}>
                                About Us
                            </a>
                        </li>
                    </ul>
                </nav>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="text-8xl font-bold text-textPrimary shadow-white"
                    style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}
                >
                    To-Do App
                </motion.h1>
            </motion.header>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <ToDo />
            </motion.section> 
            <motion.section
                id="aboutApp"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <AboutApp />
            </motion.section>
            <motion.section
                id="aboutUs"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <AboutUs />
            </motion.section>
        </main>
    );
}

export default Home;



