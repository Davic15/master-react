import React from 'react'

export const SideBar = () => {
    return (
        <aside className="aside">
            <div className="sarch">
                <h3 className="title">Search</h3>
                <form>
                    <input type="text" />
                    <button>Search</button>
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
