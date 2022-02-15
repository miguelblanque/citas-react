import {useState} from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import react from "react"

function App() {

const [pacientes, setPacientes] = useState([]);



  return ( 
    <div className="container mx-auto mt-20">

     <Header
     // Props de padre a hijo
  
     />
      <div className="mt-12 flex">
          <Formulario
           pacientes={pacientes}
          setPacientes={setPacientes}
         
          />
          <ListadoPacientes 
           pacientes={pacientes}
          
           />
      </div>
    </div>
  )
}

export default App
