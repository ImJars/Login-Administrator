import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

function Home({ correoUsuario }) {
  return (
    <div>
      <h2 className="text-center">BIENVENIDO {correoUsuario} <button className="btn btn-primary" onClick={() => signOut(auth)}>Logout</button></h2>
    </div>
  );
}

export default Home;
