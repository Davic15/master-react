import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState([]);

    const conseguirDatosFormulario = (e) => {
        e.preventDefault();
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        }
        console.log(usuario);

        setUsuario(usuario);
    }

    const cambiarDatos = (e) => {
        let name_del_input = e.target.name;
        let usuario_para_modificar = usuario;

        //usuario_para_modificar[name_del_input] = e.target.value;
        setUsuario(estado_previo => {
            return{
                ...estado_previo,
                [name_del_input]: e.target.value
            }
        });
    }

    return (
        <div>
            <h1>Formularios con React</h1>

            {usuario.enviar && usuario.bio.length >= 1 && 
                (<div className='info_usuario label label_gray'>
                    {usuario.nombre} {usuario.apellido} es un {usuario.genero}
                    y su biografia es esta: <p>{usuario.bio}</p>
                </div>)
            }

            <form onSubmit={ conseguirDatosFormulario }>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    name="nombre"
                    onChange={cambiarDatos}
                />
                <input 
                    type="text" 
                    placeholder="Apellido" 
                    name="apellido"
                    onChange={cambiarDatos}
                />
                <select name="genero" onChange={cambiarDatos}>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea 
                    placeholder='Biografia'
                    name="bio"
                    onChange={cambiarDatos}
                ></textarea>
                <input type="submit" value="Enviar" name="enviar"></input>
            </form>
        </div>
    )
}
