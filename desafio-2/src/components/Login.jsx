import React, { useState } from 'react'

const Login = () => {
    const[email, setemail]= useState('')  
  return (
    <div>
      <h1>Desafios Eventos y componentes</h1>
      <form>
        <div class="mb-3">
            <label htmlFor="email" className="form-label">Ingresa tu correo electronico</label>
            <input 
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Correo electronico"
            value={email}
            onChange={e=>setemail(e.target.value)}
            />
        </div>

        <div class="mb-3">
            <label htmlFor="email" className="form-label">Ingresa tu contraseña</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"              placeholder="name@example.com"/>
        </div>
        



      </form>
    </div>
  )
}

export default Login
