import React, { useRef } from 'react'

export const Foms = () => {

    const nameValue = useRef();
    const surnameValue = useRef();
    const emailValue = useRef();

    const myBox = useRef();

    const show = (e) => {
        e.preventDefault();
        console.log(nameValue.current.value);
        console.log(surnameValue.current.value);
        console.log(emailValue.current.value);

        //* Execute inside myBox
        console.log(myBox)
        myBox.current.classList.add('green');
        myBox.current.innerHTML = "Sent Form."
    }

    return (
        <div>
            <h1>Form</h1>

            <div ref={myBox} className="box">
                <h2>Using useRef</h2>
            </div>

            <form onSubmit={ show }>
                <input type="text" placeholder='Name' ref={nameValue}/> <br />
                <input type="text" placeholder='Surname' ref={surnameValue}/> <br />
                <input type="email" placeholder='Email' ref={emailValue}/> <br />
                <input type="submit" value="Send" /> <br />
            </form>

            <button onClick={() => nameValue.current.select()}>Focus on name.</button>
        </div>
    )
}
