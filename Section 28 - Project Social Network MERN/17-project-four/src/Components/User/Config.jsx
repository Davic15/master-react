import React, { useState } from 'react'
import useAuth from '../../Hooks/useAuth';
import { Global } from '../../Helpers/Global';
import avatar from '../../assets/img/user.png';
import { SerializeForm } from '../../Helpers/SerializeForm';

export const Config = () => {
    const {auth, setAuth} = useAuth();
    const [saved, setSaved] = useState('not_saved');

    const updateUser = async(e) => {
        e.preventDefault();

        const authorizationToken = localStorage.getItem('token');
        let newDataUser = SerializeForm(e.target);
        delete newDataUser.file0;
        const request = await fetch(Global.url + 'user/update', {
            method: 'PUT',
            body: JSON.stringify(newDataUser),
            headers: {
                'Content-Type': 'application/json',
                'authorization': authorizationToken
            }
        });
        const data = await request.json()
        if(data.status == 'success' && data.user) {
            delete data.user.password;
            setAuth(data.user);
            setSaved('saved');
            console.log(auth)
        } else {
            setSaved('error');
        }

        //* Upload images
        const fileInput = document.querySelector('#file');
        if(data.status == 'success' && fileInput.files[0]) {
            //* Get image to upload
            const formData = new FormData();
            formData.append('file0', fileInput.files[0]);

            //* Upload image to the backed.
            const uploadRequest = await fetch(Global.url + 'user/upload', {
                method: "POST",
                body: formData,
                headers: {
                    'authorization': authorizationToken
                }
            });
            const uploadData = await uploadRequest.json();
            if (uploadData.status == 'success' && uploadData.user) {
                delete uploadData.user.password;
                setAuth(uploadData.user)
                setSaved('saved');
            } else {
                setSaved('error');
            }

        }

    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Config</h1>
            </header>
            <div className="content__post">
                { saved == 'saved' ? 
                    <strong className='alert alert-success'>User Updated</strong>
                : ''}
                { saved == 'error' ?
                    <strong className='alert alert-danger'>User was not updated</strong>
                : ''}
                <form className='config-form' onSubmit={updateUser}>
                    <div className="form-group">
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' defaultValue={auth.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='surname'>Surname</label>
                        <input type='text' name='surname' defaultValue={auth.surname} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='nick'>Nick</label>
                        <input type='text' name='nick' defaultValue={auth.nick} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='bio'>Bio</label>
                        <textarea name='bio' defaultValue={auth.bio} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' defaultValue={auth.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file0">Avatar</label>
                        <div className="general-info__container-avatar">
                            {auth.image != 'default.png' && <img src={ Global.url + 'user/avatar/' + auth.image } className="container-avatar__img" alt="profile picture" />}
                            {auth.image == 'default.png' && <img src={ avatar } className="container-avatar__img" alt="profile picture" />}
                        </div>
                        <br />
                        <input type='file' name='file0' id='file' />
                    </div>
                    <br/>
                    <input type='submit' value='Update' className='btn btn-success' />
                </form>
                <br />
            </div>
        </>
    )
}
