import React, { useState } from 'react'

export const FormComponent = () => {

    const [user, setUser] = useState({});

    const getDataForm = (e) => {
        e.preventDefault();
        let data = e.target;
        let user = {
            name: data.name.value,
            surname: data.surname.value,
            gender: data.gender.value,
            bio: data.bio.value,
            send: data.send.value
        }
        console.log(user);
        setUser(user)
    }

    const changeData = (e) => {
        let inputName = e.target.name;
        setUser(prevState => ({
            ...prevState, [inputName]: e.target.value
            })
        );
    }

    return (
        <div>
            <h1>Forms with React</h1>

            {user.send &&
                (<div className="info-user label label-gray">
                    {user.name} {user.surname} is {user.gender}.
                    The Bio is: {user.bio}
                </div>) 
            }

            <form onSubmit={getDataForm}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    onChange={changeData}
                />
                <input 
                    type="text" 
                    placeholder="Surname" 
                    name="surname"
                    onChange={changeData}
                />
                <select name="gender" onChange={changeData}>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                </select>
                <textarea 
                    placeholder='Bio' 
                    name="bio"
                    onChange={changeData}
                ></textarea>
                <input type="submit" value="Send" name="send" />
            </form>
        </div>
    )
}
