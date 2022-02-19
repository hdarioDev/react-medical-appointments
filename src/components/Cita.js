import React, { Fragment } from 'react'

function Cita({ cita, deleteCita }) {
    console.log("cita nivel cita ", cita)
    return (
        <Fragment>
            <div className='container-cita'>
                <p>Mascota: <span>{cita.mascota}</span></p>
                <p>propietario: <span>{cita.propietario}</span></p>
                <p>fecha: <span>{cita.fecha}</span></p>
                <p>hora: <span>{cita.hora}</span></p>
                <p>sintomas: <span>{cita.sintomas}</span></p>
                <button className='button button-delete' onClick={() => deleteCita(cita.id)}>X</button>
            </div>
        </Fragment>
    )
}

export default Cita
