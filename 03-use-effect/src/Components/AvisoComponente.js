import React, {useEffect} from 'react'

export const AvisoComponente = () => {

    useEffect(() => {
        //* cuando el component se monta, y se ejecuta una vez, porque recibe el array vacio como parametro.
        alert('El componente AvisoComponent esta montado!');

        //* Cuando el componente se desmonta.
        return () => {
            alert('Componente desmontado');
        }
    }, []);

    return (
        <div>
            <hr />
            <h3>Saludos David, que tal estas?</h3>
            <button onClick={ e => { alert("Bienvenido") } }>Mostrar alerta</button>
        </div>
    )
}
