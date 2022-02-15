import {useState, useEffect} from 'react'
import Error from './Error'

function Formulario( {pacientes,setPacientes}) {

    const [nombre,setNombre]= useState('');
    const [propietario,setPropietario]= useState('');
    const [email,setEmail]= useState('');
    const [fecha,setFecha]= useState('');
    const [sintomas,setSintomas]= useState('');
    
    const [error,setError]=useState(false);

    // Codigo para generar un id unico
    const generarId= () =>{
        const random=Math.random().toString(36).substr(2);
        const fecha=Date.now().toString(36)

        return fecha+random;
    }

   const handleSubmit = (e) => {
        e.preventDefault();
        //Validacion del formulario

        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log('Existe algun campo vacio')
            setError(true)
            return;
        }

        setError(false)

        //Objeto de paciente
        const objetoPaciente ={
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()
        }

         //Creamos una copia de paciente
         setPacientes([...pacientes,objetoPaciente])

         //Reiniciamos el formulario

         setNombre('')
         setPropietario('')
         setEmail('')
         setFecha('')
         setSintomas('')
   }
   
 
     console.log(nombre)
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {' '}
            <span className="text-indigo-600 font-bold "> Administralos</span>
        </p>
 
        <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

            {error && <Error><p>Todos los campos son obligatorios</p></Error>
            }

            <div className="mb-5">
                <label htmlFor="nombre" className="block text-grey-700 uppercase font-bold">Nombre Mascota</label>
                <input  
                id="nombre"
                  type="text"
                 placeholder="Nombre de la mascota"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded md"
                 value={nombre}
                 onChange={ (e) => setNombre(e.target.value)}
            />
                
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">Nombre del Propietario</label>
                <input
                id="propietario"
                  type="text"
                 placeholder="Nombre del Propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded md"
                 value={propietario}
                 onChange={ (e) => setPropietario(e.target.value)}
                />
                
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-grey-700 uppercase font-bold">Email</label>
                <input
                id="email"
                  type="email"
                 placeholder="Email contacto Propietario"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded md"
                 value={email}
                 onChange={ (e) => setEmail(e.target.value)}
                />
                
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">Fecha Alta</label>
                <input
                id="alta"
                  type="date"
                 placeholder="Fecha de alta"
                 className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded md"
                 value={fecha}
                 onChange={ (e) => setFecha(e.target.value)}
                />
                
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">Síntomas</label>
               <textarea id="sintomas"
               placeholder="Describe los Sintomas"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded md"
               value={sintomas}
               onChange={ (e) => setSintomas(e.target.value)}
               />
                
            </div>

            <input type="submit"
            className="bg-indigo-600 w-full text-white uppercase font-bold
            hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
            />
        </form>

    </div>
  )
}

export default Formulario;

