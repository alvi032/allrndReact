import React from 'react';

function Form(props) {
    return (
        <div className={'form'}>
            <div className={'case'}>
                <div className={'container content'}>
                    <a href="/" className={'backButton'}>Back</a>
                    <p className={'bold'}>
                        Hello there, let's get to know
                        <br/>
                        more about each other...
                    </p>
                    <form>
                        <div>
                            <input
                            type="text"
                            name={'name'}
                            placeholder={'Name'}
                            />
                            <input
                                type="text"
                                name={'email'}
                                placeholder={'Email'}
                            />
                            <input
                            type="text"
                            name={'number'}
                            placeholder={'Number'}
                            />
                            <input
                                type="text"
                                name={'project'}
                                placeholder={'Project Field'}
                            />
                        </div>
                        <input
                            type="text"
                            name={'message'}
                            placeholder={'Message'}
                        />
                        <a href="contact" className={'button'}>SUBMIT</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;