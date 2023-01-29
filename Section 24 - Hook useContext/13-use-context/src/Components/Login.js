import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext';

export const Login = () => {

    const {user, setUser} = useContext(MyContext);

    const saveData = (e) => {
        e.preventDefault();

        let user = {
            username: e.target.username.value,
            name: e.target.name.value,
            web: e.target.web.value
        }
        setUser(user)
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Login Page</p>
            <form className='login' onSubmit={saveData}>
                <input type='text' name='username' placeholder='Type your username' />
                <input type='text' name='name' placeholder='Your name' />
                <input type='text' name='web' placeholder='Your website' />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}
