import React from 'react'
import Header from "../../Components/Header";
import Intro from "./intro";
import Services from "./services";
import Showcase from "./showcase";
import Footer from "../../Components/Footer";

const About = () => {
    return (
        <div className={'about'}>
            <Header />
            <Intro />
            <Services />
            <Showcase />
            <Footer />
        </div>
    );
};

export default About;
