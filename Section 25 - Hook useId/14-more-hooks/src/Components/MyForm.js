import React, {useState} from 'react';

export const MyForm = () => {
    
    const [form, setForm] = useState({});

    const serializeForm = (form) => {
        const formData = new FormData(form)
        const objectFormComplete = {};
        for(let [name, value] of formData) {
            objectFormComplete[name] = value;
        }
        return objectFormComplete;
    }

    const sendData = (e) => {
        e.preventDefault();
        let course = serializeForm(e.target);
        setForm(course);
    }

    const change = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form, 
            [name]: value
        });
    }

    return (
        <div>
            <h1>Form</h1>
            <p>Form to save information about a course</p>
            <p>Course saved: {form.title}</p>
            <pre className='code'>{JSON.stringify(form)}</pre>
            <form className='my-form' onSubmit={sendData}>
                <input type='text' placeholder='Title' name='title' onChange={change} />
                <input type='number' placeholder='Year' name='year' onChange={change} />
                <textarea placeholder='Description' name='description'  onChange={change} />
                <input type='text' placeholder='Author' name='author'  onChange={change} />
                <input type='email' placeholder='Email' name='email'  onChange={change} />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}
