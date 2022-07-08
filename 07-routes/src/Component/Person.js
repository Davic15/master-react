import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {

    //* Default values in optional parameters
    //let {name = "Frank", surname="Mac"} = useParams(); 

    const {name, surname} = useParams();
    const navigate = useNavigate();

    const send = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let surname = e.target.surname.value;

        //* redirect to person route
        if(name.length <= 0 && surname.length <=0)
        {
            navigate('/start')
        } else if(name === 'contact') {
            navigate('/contact')
        } 
        else {
            navigate(`/person/${name}/${surname}`);
        }

    }

    return (
        <div>
            {!name && <h1>No person to show</h1>}
            {name && <h1>Person Page: {name} {surname}</h1>}
            <p>This is the Person page.</p>

            <form onSubmit={ send }>
                <input type="text" name="name" />
                <input type="text" name="surname" />
                <input type="submit" name="enviar" value="enviar" />
            </form>
        </div>
    )
}
