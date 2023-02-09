import React from 'react';
import { useForm } from '../../Hooks/useForm';

export const Signup = () => {

    const { form, changed } = useForm({});

    const saveUser = (e) => {
        e.preventDefault();
        let newUser = form;
        console.log(newUser)
    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Signup</h1>
            </header>
            
            <div className="content__posts">
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
