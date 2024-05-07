import React, { useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import OurServices from '../components/OurServices/OurServices';
import FeaturedFeatures from '../components/FeaturedFeatures/FeaturedFeatures';
import ProductivitySection from '../components/ProductivitySection/ProductivitySection';
import Footer from '../components/Footer/Footer';

import ".././styles/home.css"

const Home = () => {

    return (
        <main>
            <NavBar />
            <Header />
            <OurServices />
            <FeaturedFeatures />
            <ProductivitySection />
            <Footer />
        </main>
    );
}

export default Home;



