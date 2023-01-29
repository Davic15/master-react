import React from 'react';
import { useForm } from '../Hooks/useForm';

export const MyForm = () => {
    
    const {form, changeData, sendData} = useForm({});
    
    return (
        <div>
            <h1>Form</h1>
            <p>Form to save information about a course</p>
            <p>Course saved: {form.title}</p>
            <pre className='code'>{JSON.stringify(form)}</pre>
            <form className='my-form' onSubmit={sendData}>
                <input type='text' placeholder='Title' name='title' onChange={changeData} />
                <input type='number' placeholder='Year' name='year' onChange={changeData} />
                <textarea placeholder='Description' name='description'  onChange={changeData} />
                <input type='text' placeholder='Author' name='author'  onChange={changeData} />
                <input type='email' placeholder='Email' name='email'  onChange={changeData} />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}
