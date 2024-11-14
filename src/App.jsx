import React, {useState} from 'react'

//Importando los modulos de Firebase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)

//Importando nuestros componentes
import Login from './components/Login'
import Home from './components/Home'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  }
  )

  return (
    <>
      <div>
        {usuario ? <Home correoUsuario ={ usuario.email} /> : <Login />}
      </div>
    </>
  )
}

export default App
