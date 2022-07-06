import React, { useEffect, useState } from 'react'
import { AvisoComponente } from './AvisoComponente';

export const PruebasComponent = () => {

    const [ usuario, setUsuario ] = useState('Franklin Macias');
    const [ fecha, setFecha ] = useState('01-01-1998');
    const [ contador, setContador ] = useState(0);
    
    const modUsuario = (e) => {
        setUsuario(e.target.value);
        console.log('Ha habido un cambio en usuario');
    }

    const cambiarFecha = (e) => {
        setFecha(Date.now());
    }

    //* Solo se ejecuta una vez con [], solo al cargar el component.
    useEffect(() => {
        console.log("Has cargado el component PruebasComponent o has realizado algun cambio en algun componente!");
    }, []);

    //* Solo se ejecuta si cambia el usuario.
    useEffect(() => {
        setContador(contador + 1);
        console.log('Has modificado el usuario: ' + contador);
    }, [fecha, usuario]);

    return (
        <div>
            <h1>El effeto - Hook useEffect</h1>
            <strong >{usuario}</strong>
            <strong className={ contador >=10 ? 'label label-green' : 'label' }>{ fecha }</strong>
            <p>
                <input 
                    type="text" 
                    onChange={ modUsuario } 
                    placeholder="Cambia el nombre" 
                />
                <button onClick={ cambiarFecha }>Cambiar fecha</button>
            </p>
            { usuario === 'DAVID' && <AvisoComponente /> }
        </div>
    )
}
