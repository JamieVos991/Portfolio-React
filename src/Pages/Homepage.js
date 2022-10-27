import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import React from 'react'

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Projects />
            <About />
            <Footer />
        </>
    );
}

export default HomePage;