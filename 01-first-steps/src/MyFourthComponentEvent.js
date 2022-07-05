import React from 'react'

export const MyFourthComponentEvent = () => {

    //* Funciones con evento, empiezan con handler
    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al boton!" + nombre);
    }

    function hasDadoDobleClick() {
        alert("Has dado doble click!");
    }

    const hasEntrado = (e, accion) => {
        console.log(`Has ${accion}  en la caja con el mouse`);
    }

    const estasDentro = (e) => {
        console.log('Estas dentro del input, mete tu nombre!!');
    }
    const estasFuera = (e) => {
        console.log('Estas fuera del input, chao!!');
    }

    return (
        <div>
            <h1>Eventos en React</h1>
            {/* Evento click */}{/* Pasar un parametro a un evento */}
            <p>
                <button onClick={ e => hasDadoClick(e, "David") }>Click Simple</button>
            </p>
            <p>
                {/* Evento doble click */}
                <button onDoubleClick={ hasDadoDobleClick }>Doble Click</button>
            </p>
            <div id="caja" 
                onMouseEnter={ e => hasEntrado(e, "entrado") }
                onMouseLeave={ e => hasEntrado(e, "salido") }    
            >
                {/* Evento onMouseEnter/onMouseLEaver */}
                Pasa por encima!!
            </div>
            <p>
                {/* Evento onFocus/onBlur */}
                <input 
                    type="text" 
                    onFocus={ estasDentro }  
                    onBlur={ estasFuera}
                    placeholder="Introduce tu nombre..."/>
            </p>
        </div>
    )
}
