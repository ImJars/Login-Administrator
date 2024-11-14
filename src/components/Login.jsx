import React from 'react'
import Imagen from '../assets/login-img.webp'
import ImagenProfile from '../assets/profile.jpg'

const Login = () => {
  return (
    <div className='container'>
      <div className="row">
        {/* columna mas pequeña formulario */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body">
              <img src={ImagenProfile} alt="" className='estilo-profile' />
              <form action="">
                <input type="text" placeholder='Ingresar Email' className='cajaTexto' />
                <input type="password" placeholder='Ingresa Contraseña' className='cajaTexto' />
                <button className='btnForm'>Registrarse</button>
              </form>
              <h4><button>Iniciar Sesion</button></h4>
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