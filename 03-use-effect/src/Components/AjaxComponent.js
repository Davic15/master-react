import React, { useState, useEffect } from 'react'

export const AjaxComponent = () => {

    const [ usuarios, setUsuarios ] = useState([]);
    const [ cargando, setCargando ] = useState(true);
    const [ errores, setErrores ] = useState("");
    //* Generico / basic
    /*const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson"
              },
              {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson"
              },
              {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke"
              }
        ]);
    }*/

    /*const getUsuariosAjaxPms = () => {
        fetch('https://reqres.in/api/users?page=2')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado_final => {
            setUsuarios(resultado_final.data);
        })
        .catch(error => {
            console.log(error)
        })
    }*/



    const getUsuariosAjaxAW = () => {
        setTimeout(async() => {
            try {
                const peticion = await fetch('https://reqres.in/api/users?page=1');
                const {data} = await peticion.json();
                setUsuarios(data);
                setCargando(false)
            } catch (error) {
                console.log(error.message);
                setErrores(error.message);
            }
        }, 1000);


    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    if(errores !== "") {
//* Este return se carga pasa algun error.
return (
    <div className='errores'>
        {errores}
    </div>
);
    }
    else if (cargando === true) {
        //* Este return se carga cuando esta cargando.
        return (
            <div className='cargando'>
                Cargando datos .....
            </div>
        );
    } else if (cargando === false && errores === "") {
    //* Este return es cuando todo va bien
    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        return (
                        <li key={usuario.id}>
                            {usuario.first_name} 
                            {usuario.last_name}
                            &nbsp;
                            <img src={usuario.avatar} width="80" alt="npi"/>
                        </li>);
                    })
                }
            </ol>
        </div>
    )
    }
}
