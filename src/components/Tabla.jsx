import React, { useState } from 'react'
import Tablacol from './Tablacol'


const Tabla = ({usuarios}) => {

  const[palabra, setPalabra]=useState('');
  let results= [];
  if(!palabra){
    results=usuarios;
  }else{
    results=usuarios.filter(
      (user)=>
      user.nombre.toLowerCase().includes(palabra.toLowerCase())|| 
      user.correo.toLowerCase().includes(palabra.toLowerCase())
    );
  }

  return (
    <div>
      <div className='mb-5'>
        <h3> Buscar colaboradores</h3>
        <input className='form-control' type="text" placeholder="Buscar" value={palabra} onChange={(e)=>setPalabra(e.target.value)} />
      </div>
      <h2>Lista de colaboradores</h2>
      
      <table className='table table-striped table-info'>
        <thead>
          <tr>
            <th>Nombre colaborador</th>
            <th>Correo electrónico</th>
          </tr>
        </thead>  
        <tbody>
          {results.length > 0 ? (
            results.map((user)=> <Tablacol key={user.id} user={user} />)
            ): (
              <tr>
                <td>No hay resultados</td>
              </tr>
            )}
        </tbody>
      </table>

    </div>
  )
}

export default Tabla
