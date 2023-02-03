import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Global } from '../../helpers/Global';

export const SideBar = () => {

    const [search, setSearch] = useState('');
    const redirect = useNavigate();

    const makeSearch = (e) => {
        e.preventDefault();
        const mySearch = e.target.search_field.value;
        redirect('/search/' + mySearch, {replace: true});
        
    }

    return (
        <aside className="aside">
            <div className="sarch">
                <h3 className="title">Search</h3>
                <form onSubmit={makeSearch}>
                    <input type="text" name='search_field' />
                    <input type='submit' value='Search' id='search' />
                </form>
            </div>
            {/*<div className="add">
                <h3 className="title">Add movie</h3>
                <form>
                    <input type="text" aria-placeholder="Title" />
                    <textarea placeholder="Description" />
                    <input type="submit" value="Send" />
                </form>
            </div>*/}
        </aside>
    )
}
