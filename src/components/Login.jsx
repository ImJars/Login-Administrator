import React, {useState} from 'react'
import Imagen from '../assets/login-img.webp'
import ImagenProfile from '../assets/profile.jpg'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false)

  const functAutentication = async(e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasena = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contrasena)
      } catch (error) {
        alert ('Asegurese de que la contraseña tenga al menos 8 caracteres')
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contrasena)
      } catch (error) {
        alert ('El correo o contraseña son incorrectos')
      }
    }
  }

  return (
    <div className='container'>
      <div className="row">
        {/* columna mas pequeña formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImagenProfile} alt="" className='estilo-profile' />
              <form onSubmit={functAutentication}>
                <input type="text" placeholder='Ingresar Email' className='cajaTexto' id='email'/>
                <input type="password" placeholder='Ingresa Contraseña' className='cajaTexto' id='password'/>
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