import React, { useEffect, useState } from 'react'

export const Employee = React.memo (({page}) => {

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        console.log("New render Employee");
    }, [emp])




    const getEmployee = async(p) => {
        const url = `https://reqres.in/api/users?page=${p}`;
        const res = await fetch(url);
        const {data: employee} = await res.json();
        setEmp(employee)
        console.log('API success')
    }

    useEffect(() => {
        getEmployee(page);
    }, [page])


    return (
        <div>
            <p>Page: {page}</p>
            <ul className='Employee'>
                {emp.length >= 1 &&
                    emp.map(em => {
                        return <li key={em.id}>{em.first_name + ' ' + em.last_name}</li>
                    })}
            </ul>
        </div>
    )
})
