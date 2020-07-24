import React from 'react';
import './style.css'
import logo from '../../Images/Logo/allrnd.png'

function Header(props) {
    return (
        <div className={'header container-l'}>
            <img src={logo} alt="allrnd"/>
            <div className={'hamburgerIcon'}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;