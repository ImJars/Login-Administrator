import React, {useState} from 'react'
import Imagen from '../assets/login-img.webp'
import ImagenProfile from '../assets/profile.jpg'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)


const Login = () => {

  const [registrando, setRegistrando] = useState(false)
  return (
    <div className='container'>
      <div className="row">
        {/* columna mas pequeña formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImagenProfile} alt="" className='estilo-profile' />
              <form action="">
                <input type="text" placeholder='Ingresar Email' className='cajaTexto' />
                <input type="password" placeholder='Ingresa Contraseña' className='cajaTexto' />
                <button className='btnForm'>{registrando ? 'Registrate': 'Inicia Sesion'}</button>
              </form>
              <h4 className='texto'>{registrando ? 'Si ya tienes cuenta  ':'No tienes cuenta  '}<button className='btnswitch' onClick={() => setRegistrando(!registrando)}>{registrando ? 'Inicia Sesion':'Registrate'}</button></h4>
            </div>
          </div>
        </div>
        {/* columna mas grande imagen */}
        <div className="col-md-8">
          <img src={Imagen} alt="" className='tamaño-imagen'/>
        </div>
      </div>
    </div>
  )
}

export default Login