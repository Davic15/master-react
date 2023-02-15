import React, { useEffect, useState } from 'react';
import avatar from '../../assets/img/user.png';
import { Global } from '../../Helpers/Global';


export const People = () => {

    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(true);
    const [following, setFollowing] = useState([]);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        getUser(1);
    }, [])

    const getUser = async(nextPage = 1) => {
        setLoadingUser(true)
        //* Request
        const request = await fetch(Global.url + 'user/list/' + nextPage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        const data = await request.json();
        
        //* Create state to list them
        if(data.users && data.status == 'success') {
            let newUsers = data.users;

            if(users.length >= 1) {
                newUsers = [...users, ...data.users];
            }
            setUsers(newUsers);
            setFollowing(data.following)
            setLoading(false);
            setLoadingUser(false);
            console.log(data)
            
            //* Pagination
            if(users.length >= (data.total - data.users.length)) {
                setMore(false)
            }
        }
    }

    const follow = async(id) => {
        console.log(id)
        //* Save Follow in the backed
        const request = await fetch (Global.url + 'follow/save',{
            method: 'POST',
            body: JSON.stringify({followed: id}),
            headers: {
                'CONTENT-TYPE': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        })
        const data = await request.json()
        //* Check if correct
        if(data.status === 'success') {
            //* Update the following.
            setFollowing([...following, id])
        }
    }

    const unfollow = async(id) => {
        console.log(id)
        //* Save Follow in the backed
        const request = await fetch(Global.url + 'follow/unfollow/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        //* Check if correct
        const data = await request.json()

        //* Update the following.
        if (data.status === 'success') {
            let filterFollowing = following.filter(followingUserId => userId !== followingUserId);
            setFollowing(filterFollowing)
        }
    }

    const nextPage = () => {
        let next = page + 1;
        setPage(next);
        getUser(next);
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
                                {!following.include(user._id) && 
                                    <button className="post__button post__button--green" onClick={ () => follow(users._id)}>
                                        Follow
                                    </button>
                                }
                                {following.include(user._id) && 
                                    <button className="post__button" onClick={ () => unfollow(users._id) }>
                                        Unfollow
                                    </button>
                                }
                            </div>
                        </article>
                    )
                })}
            </div>
            {loadingUser ? <div>Loading...</div> : ''}
            {more && 
                <div className="content__container-btn">
                    <button className="content__btn-more-post" onClick={nextPage}>
                        More people
                    </button>
                </div>
            }
            <br />
        </>
    )
}
