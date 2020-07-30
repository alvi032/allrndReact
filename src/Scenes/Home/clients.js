import React from 'react';
import logo from "../../Images/Logo/allrnd.png";

function Clients(props) {
    return (
        <div className={'clients'}>
            <p>Empowering <span className={'bold'}>brands</span>, <span className={'bold'}>artists</span> and <span className={'bold'}>businesses</span>, worldwide.</p>
            <div className={'clients-logo'}>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
                <img src={logo} alt="brand"/>
            </div>
            <button className={'button'}>OUR WORK</button>
        </div>
    );
}

export default Clients;