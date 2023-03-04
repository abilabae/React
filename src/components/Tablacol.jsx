import React from 'react'

const Tablacol = ({user}) => {

    const {id, nombre, correo}= user

  return (
    <tr>
        <td>{nombre}</td>
        <td>{correo}</td>
    </tr>
  )
}

export default Tablacol
