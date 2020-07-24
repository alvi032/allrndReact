import React from 'react';
import './style.css'

function Footer() {
    return (
        <div className={'footer container-l'}>
            <div className={'footer-content container'}>
                <p className={'light footer-heading'} style={{fontSize: '68px', }}>LET'S GET CREATIVE,
                    <br/>
                    <span className={'bold'}>TOGETHER.</span>
                </p>
                <button className={'button1'}>CONTACT US</button>
                <ul  className={'footer-links'}>
                    <li><a href={'#'}>HOMEPAGE</a></li>
                    <li><a href={'#'}>WORK</a></li>
                    <li><a href={'#'}>ABOUT</a></li>
                    <li><a href={'#'}>SERVICES</a></li>
                </ul>
                <div className={'contact-info'}>
                    <p>
                        12 House, Street 10,
                        <br/>
                        That Area, Lahore
                    </p>
                    <p>
                        +92 123 456 7889
                        <br/>
                        +92 123 456 7889
                    </p>
                    <p>hello@allrnd.com</p>
                </div>
                <p className={'copyrights'}>2020 ALLRND ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
}

export default Footer;