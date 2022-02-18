import {useState ,useEffect} from 'react';
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import react from "react"

function App() {

  //
const [pacientes, setPacientes] = useState([]);

const [paciente, setPaciente] = useState({});

//UseEffect se ejecuta en el orden en el que se declaran
// Revisamos localStorage para cargar los datos almacenados
useEffect(()=> {
  const obtenerLs=()=>{
    const pacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS)
  }
  obtenerLs();
  },[])

//Utilizamos useEffect para implementar la funcionalidad de localStorage. Cada vez que se modifique pacientes useEffect se realizara
useEffect(()=> {
localStorage.setItem('pacientes', JSON.stringify(pacientes));
},[pacientes])


const eliminarPaciente = (id) => {
  console.log('Eliminando paciente ',id);

  const pacientesActualizados=pacientes.filter( paciente => paciente.id !== id);
  
  setPacientes(pacientesActualizados)
}


  return ( 
    <div className="container mx-auto mt-20">

     <Header
     // Props de padre a hijo
  
     />
      <div className="mt-12 flex">
          <Formulario
           pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
         
          />
          <ListadoPacientes 
           pacientes={pacientes}
           setPaciente={setPaciente}
           eliminarPaciente={eliminarPaciente}
          
           />
      </div>
    </div>
  )
}

export default App
