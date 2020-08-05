import React from 'react';

function About(props) {
    return (
        <div className={'home-about'}>
            <div className={'case'}>
                <div className={'home-about-container'}>
                    <div className={'home-about-tag'}>
                        <div> </div>
                        <p> WHO & WHAT </p>
                        <div> </div>
                    </div>
                    <div className={'home-about-content'}>
                        <p className={'bold heading'}>
                            Allrnd pursues creative
                            <br/>
                            greatness with hunger,
                            <br/>
                            desire and passion.</p>
                        <p className={'light description'}>
                            Backed by years of
                            <br/>
                            experience in
                            <span className={'bold'}> Design</span>,
                            <br/>
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
                    <div className={'about-img'}> </div>
                </div>
            </div>
        </div>
    );
}

export default About;