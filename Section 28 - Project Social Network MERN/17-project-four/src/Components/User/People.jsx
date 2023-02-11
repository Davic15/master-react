import React, { useEffect, useState } from 'react';
import avatar from '../../assets/img/user.png';
import { Global } from '../../Helpers/Global';


export const People = () => {

    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async() => {
        //* Request
        const request = await fetch(Global.url + 'user/list/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        const data = await request.json();
        
        //* Create state to list them
        if(data.users && data.status == 'success') {
            setUsers(data.users);
            setLoading(false)
            console.log(users)
            //* Pagination
        }
    }

    return (
        <>
            <header className="content__header">
                <h1 className="content__title">People</h1>
            </header>

            <div className="content__posts">
                {!loading && users.map(user => {
                    return (
                        <article className="posts__post" key={user._id}>
                            <div className="post__container">
                                <div className="post__image-user">
                                    <a href="#" className="post__image-link">
                                        {user.image != 'default.png' && <img src={ Global.url + 'user/avatar/' + user.image } className="post__user-image" alt="profile picture" />}
                                        {user.image == 'default.png' && <img src={ avatar } className="post__user-image" alt="profile picture" />}
                                    </a>
                                </div>

                                <div className="post__body">
                                    <div className="post__user-info">
                                        <a href="#" className="user-info__name">{user.name} {user.surname}</a>
                                        <span className="user-info__divider"> | </span>
                                        <a href="#" className="user-info__create-date">{user.created_at}</a>
                                    </div>
                                    <h4 className="post__content">{user.bio}</h4>
                                </div>
                            </div>
                            <div className="post__buttons">
                                <a href="#" className="post__button post__button--green">
                                    Follow
                                </a>
                                { /*
                                <a href="#" className="post__button">
                                    Unfollow
                                </a>
                                */}
                            </div>
                        </article>
                    )
                })}
                
            </div>
            <div className="content__container-btn">
                <button className="content__btn-more-post">
                    More people
                </button>
            </div>
            <br />
        </>
    )
}