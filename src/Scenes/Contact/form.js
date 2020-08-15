import React, {useState} from 'react';

function Form() {

    const [message, setMessage] = useState({
        name:'',
        number:'',
        email: '',
        subject:'',
        message:''
    })

    const changeHandler = (e) => {
        e.preventDefault();

        let nam = e.target.name;
        let val = e.target.value;
        // console.log(nam)
        // console.log(val)

            setMessage({
                ...message,
                [nam]:val
            })
        console.log(message)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(message)
    }

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
                                onChange={changeHandler}
                            />
                            <input
                                type="text"
                                name={'email'}
                                placeholder={'Email'}
                                onChange={changeHandler}
                            />
                            <input
                            type="text"
                            name={'number'}
                            placeholder={'Number'}
                            onChange={changeHandler}
                            />
                            <input
                                type="text"
                                name={'subject'}
                                placeholder={'Subject'}
                                onChange={changeHandler}
                            />
                        </div>
                        <input
                            type="text"
                            name={'message'}
                            placeholder={'Message'}
                            className={'message-input'}
                            onChange={changeHandler}
                        />
                        <button className={'button'} onClick={onSubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;