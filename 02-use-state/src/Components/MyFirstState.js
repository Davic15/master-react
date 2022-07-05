import React, { useState } from 'react'

export const MyFirstState = () => {
    /*
        Problematica, no funciona, pero lo haremos funcionar con un estado
    let nombre = "Franklin Macias";

    const cambiarNombre = (e) => {
        nombre = "David Avellan";
    }*/

    const [nombre, setNombre] = useState('Franklin Macias');

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target)
    }



    //* React solo actualiza la etiqueta strong, y no toda la pagina.
    return (
        <div>
            <h3>Componente: MyFirstState</h3>
            <strong className='label'>
                {nombre}
            </strong>
            &nbsp;
            <button onClick={ e => {cambiarNombre(e, "David Avellan")} }>Cambiar nombre por David</button>
            {/* Mostrar lo que estoy escribiendo en el tag, enviamos el evento, y el target.value del evento onKeyUp */}
            <input type="text" onKeyUp={ e=> { cambiarNombre(e, e.target.value) }} placeholder="Cambia el nombre" />
        </div>
    )
}
