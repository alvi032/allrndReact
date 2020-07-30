import React from 'react';
import play from "../../Icons/play.png";
import facebook from '../../Icons/facebook.png'
import instagram from '../../Icons/instagram.png'

function GetStarted(props) {
    return (
        <div className={'getStarted'}>
            <div className={'case'}>
                <div className={'main container'}>
                    <div>
                        <p className={'extraBold'}>
                            Absolutely
                            <br/>
                            Original.
                        </p>
                        <p className={'bold'}>WE ARE A DESIGN, DEVELOPMENT & ANIMATION AGENCY</p>
                        <a href={'contact'} className={'button'}>CONTACT US</a>
                    </div>
                    <div className={'playButton'}>
                        <img src={play} alt="allrnd"/>
                    </div>
                </div>
                <div className={'social'}>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <p className={'medium'}>FOLLOW ALLRND</p>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;