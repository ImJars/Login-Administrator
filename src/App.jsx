import React from 'react'

//Importando los modulos de Firebase
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)



function App() {
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
