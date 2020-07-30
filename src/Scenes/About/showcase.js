import React from 'react';
import ReactPlayer from "react-player";

function Showcase(props) {
    return (
        <div className={'showcase'}>
            <div className={'case'}>
                <div className={'content container'}>
                    <p className={'heading bold'}>
                        Watch our animation
                        <br/>
                        showcase video
                    </p>
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=_Hp_dI0DzY4&t=886s'}
                    />
                    <p className={'imageText bold'}>
                        How we revamped this brand's
                        <br/>
                        completely bland website
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Showcase;