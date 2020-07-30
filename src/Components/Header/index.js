import React from 'react'
import logo from '../../Images/Logo/allrnd.png'

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'case'}>
                <div className={'container'}>
                    <img src={logo} alt="allrnd" />
                    <div className={'hamburgerIcon'}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;