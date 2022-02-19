import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import './index.css'

function App() {
  //citas en localstorage
  let initialcitas = JSON.parse(localStorage.getItem('citas'))
  if (!initialcitas) {
    initialcitas = [];
  }

  const [citas, setcitas] = useState(initialcitas)

  //operaciones segun el estado
  useEffect(() => {
    console.log("algo paso ")

    if (initialcitas) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas, initialcitas])//si la cita cambia pues llama este evento nuevamente

  //Funcion que toma las citas actuales y agrege la nueva
  const crearCita = cita => {
    console.log("cita recibida ", cita)
    setcitas([
      ...citas,
      cita
    ])
    console.log("citas en memoria ", citas)
  }

  //eliminar cita
  const deleteCita = id => {
    console.log("delete..")
    const newCitas = citas.filter(cita => cita.id !== id)
    setcitas(newCitas)
  }
  //contar citas para sms 
  const titleCitas = citas.length === 0 ? 'Sin registros' : 'Tus citas'

  return (
    <Fragment>
      <div className="container--title">
        <span className='title--icon'></span>
        <h1>Citas Medicas</h1>
      </div>
      <div className='container'>
        <div className='container--form'>
          <Formulario
            createCita={crearCita}
          />
        </div>
        <div className='container--list'>
          <h2>{titleCitas}</h2>
          {citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              deleteCita={deleteCita}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
