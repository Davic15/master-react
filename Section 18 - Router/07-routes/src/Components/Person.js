import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {

    //* Default values, optional params
    //const {name = "David", surname = "Macias"} = useParams();

    const {name, surname} = useParams();
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault()
        let name = e.target.name.value;
        let surname = e.target.surname.value;
        //*Redirect to persona/name/surname
        let url = `/person/${name}/${surname}`;
        if (name.length <= 0 && surname.length <= 0) {
            navigate('/home')
        } else if (name === 'contact') {
            navigate('/contact')
        } 
        else {
            navigate(url);
        }
    }


    return (
        <div>
            {!name && <h1>No person to show</h1>}
            {name && <h1>Person Page: {name} {surname}</h1>}
            <p>This is the person page.</p>

            <form onSubmit={sendData}>
                <input type="text" name="name" />
                <input type="text" name="surname" />
                <input type="submit" name="send" value="Send" />
            </form>

        </div>
    )
}
