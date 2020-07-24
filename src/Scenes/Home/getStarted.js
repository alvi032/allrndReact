import React from 'react';
import play from "../../Icons/play.png";
import facebook from '../../Icons/facebook.png'
import instagram from '../../Icons/instagram.png'

function GetStarted(props) {
    return (
        <div className={'getStarted container-l'}>
            <div className={'main'}>
                <div>
                    <p className={'extraBold'} style={{fontSize: '75px', margin: '0'}}>
                        Absolutely
                        <br/>
                        Original.
                    </p>
                    <p className={'bold'} style={{fontSize: '25px'}}>WE ARE A DESIGN, DEVELOPMENT & ANIMATION AGENCY</p>
                    <button className={'button1'}
                            style={{border: '3px solid var(--ablue)', color: 'var(--ablue)'}}>CONTACT US
                    </button>
                </div>
                <div className={'playButton'}>
                    <img src={play} alt="allrnd"/>
                </div>
            </div>
            <div className={'social'}>
                <img src={facebook} alt=""/>
                <img src={instagram} alt=""/>
                <p className={'medium'} style={{fontSize: '21px'}}>FOLLOW ALLRND</p>
            </div>
        </div>
    );
}

export default GetStarted;