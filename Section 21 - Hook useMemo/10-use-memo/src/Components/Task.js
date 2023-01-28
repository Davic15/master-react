import React, {useState, useMemo} from 'react'

export const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(1230);

    const saveTask = (e) => {
        e.preventDefault();
        setTasks(task => [...task, e.target.description.value]);
    }

    const deleteTask = (id) => {
        // Filter task to delete one by index.
        let newTask = tasks.filter((task, index) => index !== id);
        console.log(newTask)
        // Set the new state
        setTasks(newTask)
    }

    const addCounter = () => {
        setCounter(counter + 1);
    }

    const oldCounter = (acu) => {
        for (let i = 0; i <= acu; i++) {
            console.log('Executing old counters...');
        }
        return `Task counter: ${acu}`
    }

    const memoCounter = useMemo(() => oldCounter(counter), [counter])

    return (
        <div className='task-container'>
            <h1>My tasks</h1>
            <form onSubmit={saveTask}>
                <input type='text' name='description' placeholder='Describe your task' />
                <input type='submit' value='Send' />
            </form>

            <h3>{memoCounter}</h3>
            <button onClick={ addCounter }>Add</button>
            
            <h3>Task list</h3>
            {
                tasks.map((task, index) => {
                    return (
                            <li key={index}>
                                {task} &nbsp; <button onClick={ () => deleteTask(index) }>X</button>
                            </li>
                        )
                })
            }
        </div>
    )
}
