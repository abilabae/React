import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Tabla from './components/Tabla'
import { colaboradores } from './data'

function App() {
  
const [usuarios, setUsuarios]= useState (colaboradores)  

  return (
    <div className='container'>
      <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/>
      <hr />
      <Tabla usuarios={usuarios}/>
    </div>
  )
}

export default App
