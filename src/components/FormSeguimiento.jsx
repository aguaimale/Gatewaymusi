import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const FormSeguimiento = () => {
    const { planSeleccionado } = useParams();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Correo:', correo);
        setNombre('');
        setCorreo('');
    };

    const handleButtonClick = () => {
        navigate('/View');
    };

    const handleButtonback = () => {
        navigate('/');
    };

    return (
        <div className='contenedor'>
            <div className='contentText'>
                <h2>Contratá</h2>
                <h3 className='namePlan'>{planSeleccionado}</h3> {/* Utiliza la variable planSeleccionado */}
                <p>Para empezar te pedimos que nos indiques tu nombre</p>
                <p>y un email.</p>
            </div>
           
            <div className='cardDescrbuttons'>
                <button className='buttonAtras' type='button' onClick={handleButtonback} >Atras</button>
                <button className='button' type='button' onClick={handleButtonClick} >Siguiente</button>
            </div>


        </div>
    )
}

export default FormSeguimiento