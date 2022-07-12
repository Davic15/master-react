import React from 'react'

export const Contact = () => {
    return (
        <div className='page' action="mailto:try@try.com">
            <h1 className='heading'>Contacts</h1>
            <form className='contact'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Surname' />
                <input type="text" placeholder='Email' />
                <textarea placeholder='Contact'></textarea>
                <input type="submit" value="Send"></input>
            </form>
        </div>
    )
}
