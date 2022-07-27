import React, { useState } from 'react'

export const Task = () => {

    const [tasks, setTasks] = useState([]);

    const saveTasks = (e) => {
        e.preventDefault();
        //* save the previous tasks and add a new one.
        setTasks(task => [...task, e.target.title.value]);
    }

    const deleteTask = (id) => {
        //* Filter task to delete one
        let newTask = tasks.filter((task, index) =>  index !== id)
        console.log(newTask)
        //* setState, save the new task list
        setTasks(newTask)
    }

    return (
        <div className='taskContainer'>
            <h1>Mis Tares</h1>
            <form onSubmit={saveTasks}>
                <input type='text' name='title' placeholder='Describe your task' />
                <input type='submit' value='Save'/>
            </form>
            <h3>Task List</h3>
            <ul>
            {
                tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            {task}
                            &nbsp;
                            <button onClick={() => deleteTask(index)}>x</button>
                        </li>
                    )
                })
            }
            </ul>
            
        </div>
    )
}
