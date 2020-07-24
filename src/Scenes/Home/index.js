import React from "react";
import './style.css'
import '../../global.css'
import '../../Fonts/fonts.css'
import Header from "../../Components/Header";
import Footer from '../../Components/Footer'
import GetStarted from "./getStarted";
import About from "./about";
import Clients from "./clients";


function Home() {
    return (
        <div className={'home'}>
            <Header/>
            <GetStarted/>
            <About/>
            <Clients/>
            <Footer/>
        </div>
    )
}

export default Home