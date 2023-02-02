import React, { useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import { Request } from '../../helpers/Request';
import { Global } from '../../helpers/Global';

export const Create = () => {
    const {form, sendData, changeData} = useForm({});
    const [result, setResult] = useState('no_sent');

    const saveArticle = async(e) => {
        e.preventDefault();
        //* Getting data from the form
        let newArticle = form;
        
        //* Save data in our backend
        const {data, loading} = await Request(Global.url + 'create', 'POST', newArticle);
        if (data.status === 'Success') {
            setResult('saved');
        } else {
            setResult('error')
        }

        //* Upload the image.
        const fileInput = document.querySelector('#file');

        if(data.status === 'Success' && fileInput.files[0]) {
            setResult('saved');
            const formData = new FormData();
            formData.append('file', fileInput.files[0]);
            const upload = await Request(Global.url + 'upload-image/' + data.article._id, 'POST', formData, true);
            if (upload.data.status === 'Success') {
                setResult('saved');
            } else {
                setResult('error')
            }
        } 
    }
    return (
        <div className='jumbo'>
            <h1>Create Article</h1>
            <p>Form to create a new article</p>
            <strong>{result === 'saved' ? 'Article saved.' : ''}</strong>
            <strong>{result === 'error' ? 'Data is not correct.' : ''}</strong>
            {/* Form */}
            <form className='form' onSubmit={saveArticle}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' onChange={changeData} />
                </div>
                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <textarea name='content' onChange={changeData} />
                </div>
                <div className='form-group'>
                    <label htmlFor='file'>Image</label>
                    <input type='file' name='file' id='file' />
                </div>
                <input type='submit' value='Save' className='btn btn-success' />
            </form>
        </div>
    )
}
