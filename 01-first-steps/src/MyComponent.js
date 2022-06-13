//importar modulos de react / dependenasi
import React, { Fragment } from "react";
//function del component

const MyComponent = () => {
    //return hacer el render el html/js
    //tres formas the contener varias etiquetas, fragments, divs o un fragment vacio.
    // <div></div> <></> <Fragment></Fragment>
    const nombre = "David";
    const web = "davic15.github.io"
    // mostrar datos de variables {variable}
    let usuario = {
        nombre: "David",
        apellido: 'Macias',
        web: "davic15.github.io"
    }

    console.log(usuario);
    return (
        <div>
            <hr/>
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Apellido: {usuario.apellido}</li>
                <li>Web: {usuario.web}</li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>Vue</li>
                <li>React</li>
                <li>Angular</li>
            </ul>
        </div>
    );
}

export default MyComponent;

//export