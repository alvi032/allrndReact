import React from 'react';
import play from "../../Icons/play.png";

function Intro(props) {
    return (
        <div className={'about-intro'}>
            <div className={'case'}>
                <div className={'container content'}>
                    <p className={'intro-heading extraBold'}>
                        We have a personal
                        <br/>
                        hatred for templates.
                    </p>
                    <p className={'intro-desc bold'}>
                        ALLRND OFFERS CREATIVE SERVICES WITH A SPECIAL
                        <br/>
                        EMPHASIS ON ORIGINALITY.
                    </p>
                    <div className={'intro-video'}>
                        <img src={play} alt="play video"
                             className={'dark-image'}
                        />
                        <p className={'bold'}>WATCH WHAT SERVICES WE OFFER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;