import React, {useState} from 'react'
// import Navbar from "./header";
import logo from "../../Images/Logo/allrnd.png";

// import Menu from "./menu";

function Header(props) {

    let [menuState, setMenuState] = useState(false)
    const menuHandler = () => {
        setMenuState(prevState => !prevState)
    }
    let menuOpen = {
        // display: 'none'
        left: '-100vw'
    }
    if (menuState) {
        menuOpen = {
            left: '0vw',
            boxShadow: '2px 2px 17px 5px rgba(0, 0, 0, 0.4)'
        }
    }


    return (
        <div>
            <div className={'header'}>
                <div className={'case'}>
                    <div className={'container'}>
                        <a href={'/'}><img src={logo} alt="allrnd"/></a>
                        <div
                            className={'hamburgerIcon'}
                            onClick={menuHandler}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'menu'} style={menuOpen}>
                <div className={'content'}>
                    <div className={'sidebar-img'}></div>
                    <div className={'links'}>
                        <ul>
                            <li><a href="about">ABOUT</a></li>
                            <li><a href="work">WORK</a></li>
                            <li><a href="services">SERVICES</a></li>
                            <li><a href="contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className={'closeButton'} onClick={menuHandler}>
                        <div></div>
                        {/*<div></div>*/}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;