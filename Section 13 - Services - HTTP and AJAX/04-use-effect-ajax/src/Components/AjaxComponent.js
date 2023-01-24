import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState('');

    /*const getUsers = () => {
        setUsers([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
        ])
    }*/

    /*const getUsersAjaxPromise = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(result => {
                setUsers(result.data);
                console.log(users)
            },
            error => {
                console.log(error)
            })
    }*/

    const getUsersAjaxAW =  () => {
        setTimeout( async() => {
            try {
                const request = await fetch('https://reqres.in/api/users?page=1')
                const {data} = await request.json();
                setUsers(data);
                setLoading(false);
            } catch(error) {
                console.log(error);
                setErrors(error.message);
            }

        }, 2000)
        
    }

    useEffect(() => {
        //getUsers();
        //getUsersAjaxPromise();
        getUsersAjaxAW();
    }, []);

    //* Error
    if(errors !== '') {
        return (
            <div className='loading'>
                {errors}
            </div>
        ); 
    }

    //* Return when it is loading.
    else if (loading === true) {
        return (
            <div className='loading'>
                Loding data....
            </div>
        ); 
    } else if (loading === false && errors === '') {
        //* Return all is fine
        return (
            <div>
                <h2>User list (Ajax)</h2>
                <ol className='users'>
                    {
                        users.map(user => {
                            return (
                                <li key={user.id}>
                                    <img src={user.avatar} alt="user" width="20px" />
                                    <br/>
                                    {user.first_name} {user.last_name}
                                </li>)
                        })
                    }
                </ol>
            </div>
        )
    }
}
