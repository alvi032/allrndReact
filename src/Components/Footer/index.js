import React from 'react';

function Footer() {
    return (
        <div className={'footer'}>
            <div className={'case'}>
                <div className={'footer-content container'}>
                    <ul className={'footer-links'}>
                        <li><a href={'/'}>HOMEPAGE</a></li>
                        <li><a href={'work'}>WORK</a></li>
                        <li><a href={'about'}>ABOUT</a></li>
                        <li><a href={'services'}>SERVICES</a></li>
                        <li><a href={'terms'}>TERMS</a></li>
                    </ul>
                    <div className={'contact-info'}>
                        <p className={'light'}>
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
                    <p className={'copyrights light'}>2020 ALLRND ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;