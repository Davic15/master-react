import React, { useContext } from 'react'
import { ContextWork } from '../Context/Context';

export const Login = () => {
    const { user, setUser } = useContext(ContextWork)
    const saveData = (e) => {
        e.preventDefault();
        let user = {
            nick: e.target.nick.value,
            name: e.target.name.value,
            web: e.target.web.value
        }
        setUser(user)
    } 
    return (
        <div>
            <h1>Login</h1>
            <p>Login page</p>
            <form className='login' onSubmit={ saveData }>
                <input text='text' name='nick' placeholder='Nickname:' />
                <input text='text' name='name' placeholder='Name:' />
                <input text='text' name='web' placeholder='Web:' />
                <input type='submit' value='Login'/>
            </form>
        </div>
    )
}
