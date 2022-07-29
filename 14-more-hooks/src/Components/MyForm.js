import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MyForm = () => {

    const { form, edited, sent} = useForm({})

    return (
        <div>
            <h1>Form</h1>
            <p>Save a course</p>
            <p>Saved courses: {form.title}</p>
            <pre className='code'>{JSON.stringify(form)}</pre>
            <form className='my-form' onSubmit={sent}>
                <input type='text' placeholder='Title:' name='title' onChange={edited} />
                <input type='number' placeholder='Publish:' name='year' onChange={edited} />
                <textarea name='description' placeholder='Description:' onChange={edited} ></textarea>
                <input type='text' placeholder='Author:' name='author' onChange={edited} />
                <input type='email' placeholder='Email:' name='email' onChange={edited} />
                <input type='submit' value='Send'/>

            </form>
        </div>
    )
}
