import React from 'react'
import PropTypes from 'prop-types';

//* Pasar datos de un componente a otro usando props.
//* use destructuring
//* Podemos poner un valor por defecto.
//* nombre = "David"
export const MyThirdComponent = ({nombre, apellido, ficha}) => {

    
    return (
        <div>
            <h1>Comunication entre Componentes</h1>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </ul>
        </div>
    )
}

//* Validacion
MyThirdComponent.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

MyThirdComponent.defaultProps = {
    nombre: 'Juan',
    apellido: 'Martinez'
}