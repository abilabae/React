import React from 'react'
import { useState } from 'react'
import Error from './Error'
import {getId} from '../helpers/getId'

const Formulario = ({usuarios, setUsuarios}) => {
    const [nombre, setNombre]= useState('')
    const [correo, setCorreo]= useState('')
    const [error, setError]=useState(false)

  const handleSubmit= e=>{
        e.preventDefault();

  if([nombre,correo].includes('')){
    setError(true)
  }else{
    setError(false)
  }

  const objetoUsuarios={
    nombre,
    correo,
    id: getId ()
  }

  setUsuarios([...usuarios, objetoUsuarios])

  setNombre('')
  setCorreo('')


  };



  return (
    <div>
      <h1 className='text-center'>Dataset de todos los colaboradores</h1>
      <h3>Inscriba más colaboradores</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor="nombre">Nombre: </label>
            <input className='form-control' id="nombre" type="text" value={nombre} onChange={e=>setNombre(e.target.value)} />
        </div>
        <div className='mb-3'>
            <label htmlFor="correo">Correo electrónico: </label>
            <input className='form-control' id="correo" type="email" value={correo} onChange={e=>setCorreo(e.target.value)} />
        </div>
        <button className='btn btn-info '>Agregar</button>
        {error && <Error message="Todos los datos son obligatorios"/>}
      </form>
    </div>
  )
}

export default Formulario
