import React, {useEffect, useState} from 'react'

export const Workers = React.memo(({page = 1, message}) => {

    const [employeesState, setEmployeesState] = useState([])

    useEffect(() => {
        getEmployees(page);
    }, [page]);
    
    useEffect(() => {
        console.log('Re-render Workers');
        message();
    }, [employeesState]);

    const getEmployees = async(page) => {
        const url = 'https://reqres.in/api/users?page=' + page;
        const request = await fetch (url);
        const { data: employees } = await request.json();
        setEmployeesState(employees);
    }



    return (
        <div>
            <p>Page: {page}</p>
            <ul className='employees'>
                {employeesState.length >=1 && employeesState.map(employee => {
                    return <li key={employee.id}>{employee.first_name + ' ' + employee.last_name}</li>
                })}
            </ul>
        </div>
    )
})
