import React from 'react';
import imageHolder from '../../Images/image-holder.png'

function Services(props) {
    return (
        <div className={'services'}>
            <div className={'case'}>
                <div className={'content container'}>
                    <div className={'service-type'}>
                        <img src={imageHolder} alt="holder"/>
                        <div>
                            <p className={'service-heading bold'}>
                                GRAPHIC DESIGN
                            </p>
                            <p className={'service-desc medium'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div className={'service-type reverse'}>
                        <img src={imageHolder} alt="holder"/>
                        <div>
                            <p className={'service-heading bold'}>
                                GRAPHIC DESIGN
                            </p>
                            <p className={'service-desc medium'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div className={'service-type'}>
                        <img src={imageHolder} alt="holder"/>
                        <div>
                            <p className={'service-heading bold'}>
                                GRAPHIC DESIGN
                            </p>
                            <p className={'service-desc medium'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;