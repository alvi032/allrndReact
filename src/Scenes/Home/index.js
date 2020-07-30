import React from "react";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer'
import GetStarted from "./getStarted";
import About from "./about";
import Clients from "./clients";
import UpperFooter from "./upperFooter";


function Home() {
    return (
        <div className={'home'}>
            <Header />
            <GetStarted />
            <About />
            <Clients />
            <UpperFooter />
            <Footer />
        </div>
    )
}

export default Home