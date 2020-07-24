import React from 'react';
import design from "../../Images/design.png";

function About(props) {
    return (
        <div className={'about'}>
            <div className={'container-l temp-cont'}>
                <div className={'about-tag'}>
                    <div></div>
                    <p> WHO & WHAT </p>
                    <div></div>
                </div>
                <div style={{maxWidth: '1036px', width: '100%'}}>
                    <p className={'bold'} style={{fontSize: '64px', maxWidth: "700px"}}>Allrnd pursues creative
                        greatness
                        with hunger, desire and passion.</p>
                    <p className={'light'} style={{fontSize: '42px', maxWidth: '520px'}}>Backed by years of
                        experience
                        in
                        <span className={'bold'}> Design</span>,
                        <span className={'bold'}> Animation</span> &<span className={'bold'}> Development</span>
                    </p>
                    <div className={'services'}>
                        <div>
                            <p className={'service-heading'}>Graphic Design</p>
                            <p className={'service-desc'}>
                                Corporate Branding
                                <br/>
                                UI/UX Design
                                <br/>
                                Event Flyers and Posters
                                <br/>
                                Social Media
                            </p>
                        </div>
                        <div>
                            <p className={'service-heading'}>Web Development</p>
                            <p className={'service-desc'}>
                                Custom Websites
                                <br/>
                                WordPress Websites
                                <br/>
                                Web Applications
                                <br/>
                                Databases
                            </p>
                        </div>
                        <div>
                            <p className={'service-heading'}>Animation</p>
                            <p className={'service-desc'}>
                                Music/Lyric Videos
                                <br/>
                                Explainer Videos
                                <br/>
                                Company Intros
                                <br/>
                                Youtube
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'about-img'}>
                    <img src={design} alt="allrnd"/>
                </div>
            </div>
        </div>
    );
}

export default About;