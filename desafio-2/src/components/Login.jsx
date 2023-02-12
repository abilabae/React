import React, { useState } from 'react'

const Login = ({setAlerta}) => {
    const[email, setemail]= useState('')  
    const[password, setpassword]= useState('')
    const handleSubmit= (e)=>{
    e.preventDefault()
    if(email.trim()=== 'abilabae@uc.cl'&& password.trim()==="123456"){
        setAlerta({msg:'Correcto inicio de sesión', color:'info'})
    }else{
        setAlerta({msg:'Datos incorrectos, vuelve a ingresar tu correo o contraseña', color:'warning'})
    }
    }
  return (
    <div>
      <h1>Desafios Eventos y componentes</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label htmlFor="email" className="form-label">Ingresa tu correo electronico</label>
            <input 
            type="email"
            class="form-control"
            id="email"
            placeholder="Correo electronico"
            value={email}
            onChange={e=>setemail(e.target.value)}
            />
        </div>

        <div class="mb-3">
            <label htmlFor="password" className="form-label">Ingresa tu contraseña</label>
            <input 
            type="password"
            class="form-control"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={e=>setpassword(e.target.value)}
            />
        </div>
        <button className='btn btn-info' disabled={!email.trim()|| !password.trim()}>Ingresar</button>
        



      </form>
    </div>
  )
}

export default Login
