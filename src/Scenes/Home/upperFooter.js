import React from 'react';

function UpperFooter(props) {
    return (
        <div className={'upper-footer'}>
            <div className={'case'}>
                <div className={'container'}>
                    <p className={'light footer-heading'}>LET'S GET CREATIVE,
                        <br/>
                        <span className={'bold'}>TOGETHER.</span>
                    </p>
                    <a href={'contact'} className={'button'}>CONTACT US</a>
                </div>
            </div>
        </div>
    );
}

export default UpperFooter;