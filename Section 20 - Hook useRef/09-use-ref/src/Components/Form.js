import React, {useRef} from 'react'

export const Form = () => {

    const nameInput = useRef ();
    const surnameInput = useRef ();
    const emailInput = useRef ();
    const myBox = useRef();

    const showData = (e) => {
        e.preventDefault();
        console.log(nameInput.current.value);
        console.log(surnameInput.current.value);
        console.log(emailInput.current.value);

        //* myBox ref.
        console.log(myBox);
        let {current: box} = myBox
        box.classList.add('greeBackground');
        box.innerHTML = 'Form sent'
    }

    return (
        <div>
            <h1>Form</h1>
            <div ref={myBox} className='my-box'>
                <h2>useRef</h2>
            </div>
            <form onSubmit={showData}>
                <input type='text' placeholder='Name' ref={nameInput} /> <br/>
                <input type='text' placeholder='Surname' ref={surnameInput} /> <br />
                <input type='email' placeholder='Email' ref={emailInput} /> <br />
                <input type='submit' value='Send' />
            </form>
            <button onClick={() => nameInput.current.select() }>Fill the Form</button>
        </div>
    )
}
