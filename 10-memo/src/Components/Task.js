import React, { useMemo, useState } from 'react'

export const Task = () => {

    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(1230);

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

    const sumCounter = (e) => {
        setCount(count + 1);
    }

    const oldCounter = (acu) => {

        for(let i = 0; i <= acu; i++) {
            console.log('Executing old acumulators...');
        }
        return `Task List: ${acu}`;
    }

    const memoCount = useMemo(() => oldCounter(count), [count])

    return (
        <div className='taskContainer'>
            <h1>Mis Tares</h1>
            <form onSubmit={saveTasks}>
                <input type='text' name='title' placeholder='Describe your task' />
                <input type='submit' value='Save'/>
            </form>
            <h3>{memoCount}</h3>
            <button onClick={sumCounter}>Add</button>
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
