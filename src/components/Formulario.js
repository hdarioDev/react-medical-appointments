import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


function Formulario({ createCita }) {
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [error, seterror] = useState(false)
    const handleState = (e) => {
        console.log(e.target.value);
        //spred operator
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })

    }
    //des estructuring
    const {
        mascota,
        propietario,
        fecha,
        hora,
        sintomas
    } = cita

    const submitAppointment = e => {
        e.preventDefault()
        /** Detener submit */
        console.log("Sending...");
        //validaciones
        console.log("mascota ", mascota)
        console.log("propietario ", propietario)
        console.log("fecha ", fecha)
        console.log("hora ", hora)
        console.log("sintomas ", sintomas)
        if (
            mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ) {
            seterror(true)
            console.log("Complete los campos")
            return;

        }
        seterror(false)
        cita.id = uuid()
        //CREA CITA
        createCita(cita)
        //REINICIA FORM
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }




    return (
        <React.Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='err-sms'>Completa todos los campos.</p> : null}
            <form className='container--form-items' onSubmit={submitAppointment}>
                <div className='form-items-group'>
                    {/* <label>Nombre mascota</label> */}
                    <input
                        type="text"
                        name="mascota"
                        value={mascota}
                        placeholder='Nombre mascota'
                        onChange={handleState}
                    /><span className='items-group-bar'></span>
                </div>
                <div className='form-items-group'>
                    {/* <label>Nombre propietario</label> */}
                    <input
                        type="text"
                        name="propietario"
                        value={propietario}
                        placeholder='Nombre propietario'
                        onChange={handleState}
                    /><span className='items-group-bar'></span>
                </div>
                <div className='form-items-group'>

                    {/* <label>Fecha</label> */}
                    <input
                        type="date"
                        name="fecha"
                        value={fecha}
                        placeholder=''
                        onChange={handleState}
                    /><span className='items-group-bar'></span>
                </div>
                <div className='form-items-group'>
                    {/* <label>Hora</label> */}
                    <input
                        type="time"
                        name="hora"
                        value={hora}
                        placeholder=''
                        onChange={handleState}
                    /><span className='items-group-bar'></span>
                </div>
                <div className='form-items-group'>
                    {/* <label>Síntomas</label> */}
                    <textarea
                        placeholder='Sintomas'
                        name="sintomas"
                        value={sintomas}
                        onChange={handleState}
                    >

                    </textarea><span className='items-group-bar'></span>
                </div>

                <button type='submit'>Agregar cita</button>
            </form >
        </React.Fragment >
    )
}


export default Formulario
