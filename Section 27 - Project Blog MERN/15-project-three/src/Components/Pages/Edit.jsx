import React, { useState, useEffect } from 'react';
import { useForm } from '../../Hooks/useForm';
import { useParams } from 'react-router-dom';
import { Request } from '../../helpers/Request';
import { Global } from '../../helpers/Global';

export const Edit = () => {
    
    const [article, setArticle] = useState([]);
    const {form, sendData, changeData} = useForm({});
    const [result, setResult] = useState('no_sent');
    const params = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const {data} = await Request(Global.url + 'article/' + params.id, "GET");

        if(data.status === 'Success') {
            setArticle(data.article);
        }
    }

    const editArticle = async(e) => {
        e.preventDefault();
        //* Getting data from the form
        let newArticle = form;
        
        /* */
        if(newArticle.title == null) {
            newArticle.title = article.title;
        }
        if(newArticle.content == null) {
            newArticle.content = article.content;
        }
        if(newArticle.image == null) {
            newArticle.image = article.image;
        }
        /* */

        //* Save data in our backend
        const {data, loading} = await Request(Global.url + 'article/' + params.id, 'PUT', newArticle);
        if (data.status === 'Success') {
            setResult('saved');
        } else {
            setResult('error')
        }

        //* Upload the image.
        const fileInput = document.querySelector('#file');
        if(data.status === 'Success') {
            if(fileInput.files.length >= 1) {
                const formData = new FormData();
                formData.append('file', fileInput.files[0]);
                const upload = await Request(Global.url + 'upload-image/' + data.article._id, 'POST', formData, true);
                if (upload.data.status === 'Success') {
                    setResult('saved');
                } else {
                    setResult('error')
                }
            }
            setResult('saved');
        } else {
            setResult('error');
        }
    }
    return (
        <div className='jumbo'>
            <h1>Edit Article</h1>
            <p>Form to edit: {article.title}</p>
            <strong>{result === 'saved' ? 'Article saved.' : ''}</strong>
            <strong>{result === 'error' ? 'Data is not correct.' : ''}</strong>
            {/* Form */}
            <form className='form' onSubmit={editArticle}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' onChange={changeData} defaultValue={article.title} />
                </div>
                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <textarea name='content' onChange={changeData} defaultValue={article.content}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='file'>Image</label>
                    <div className="mask">
                        {article.image != 'default.png' && <img src={Global.url + 'image/' + article.image} alt={article.title} />}
                        {article.image == 'default.png' && <img src={Global.url + 'image/' + article.image} alt={article.title} />}
                    </div>
                    <input type='file' name='file' id='file' />
                </div>
                <input type='submit' value='Save' className='btn btn-success' />
            </form>
        </div>
    )
}