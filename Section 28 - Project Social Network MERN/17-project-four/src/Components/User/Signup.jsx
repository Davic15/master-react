import React, { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { Global } from '../../Helpers/Global';

export const Signup = () => {

    const { form, changed } = useForm({});
    const [ saved, setSaved ] = useState('not_sent')

    const saveUser = async(e) => {
        e.preventDefault();
        let newUser = form;

        //* Save user.
        const request = await fetch (Global.url + 'user/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await request.json();
        if(data.status === 'success') {
            setSaved('saved');
        } else {
            setSaved('error');
        }
    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Signup</h1>
            </header>
            
            <div className="content__posts">
                <strong className='alert alert-success'>{ saved == 'saved' ? 'User Registered' : '' }</strong>
                <strong className='alert alert-danger'>{ saved == 'error' ? 'User was not registed' : '' }</strong>
                <form className='register-form' onSubmit={saveUser}>
                    <div className="form-group">
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='surname'>Surname</label>
                        <input type='text' name='surname' onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='nick'>Nick</label>
                        <input type='text' name='nick' onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' onChange={changed} />
                    </div>
                    <input type='submit' value='Send' className='btn btn-success' />
                </form>
            </div>
        </>
    )
}
