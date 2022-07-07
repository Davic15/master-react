import React from 'react'

export const Edit = ({movie}) => {
    const componentTitle = "Edit Movie"
    return (
        <div className='edit_form'>
            <h3 className='title'>{componentTitle}</h3>
            <form>
                <input 
                    type="text"
                    name="title"
                    className='title'
                    defaultValue={movie.title} 
                />
                <textarea
                    name="description"
                    defaultValue={movie.description}
                    className="description" 
                />
                <input 
                    type="submit"
                    className="edit"
                    value="Update" 
                />
            </form>
        </div>
    )
}
