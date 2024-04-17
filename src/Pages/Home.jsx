import React from 'react';

const Home = () => {
    return (
        <main className="bg-gradient-to-r from-primary to-secondary">
            <header className="bg-gradient-to-r from-primary to-secondary p-8 flex flex-col justify-center items-center">
                <nav className="mb-20">
                    <ul className="flex space-x-20">
                        <li><a href="#" className="text-textSecondary no-underline font-arial text-3xl font-bold shadow-white" style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}>Inicio</a></li>
                        <li><a href="#" className="text-textSecondary no-underline font-arial text-3xl font-bold shadow-white" style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}>Acerca</a></li>
                        <li><a href="#" className="text-textSecondary no-underline font-arial text-3xl font-bold shadow-white" style={{ textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" }}>Contacto</a></li>
                    </ul>
                </nav>
                <h1 className="text-8xl font-bold text-textPrimary shadow-white" style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>To-Do App</h1>
            </header>
        </main>
    );
}

export default Home;


