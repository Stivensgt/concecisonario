import React, {useEffect, useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




const Vehiculos = () => {
    const [mostrartabla,setMostrartabla] = useState(true)
    const [textoBoton,setTextoBoton] = useState('Crear nuevo vehiculo')
    const [vehiculos,setVehiculos] = useState([])
    const [colorBoton,setColorBoton] = useState('indigo')
    
    useEffect(()=>{
        const obtenerVehiculos = async () => {
            const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/vehicle/' };
            await axios
              .request(options)
              .then(function (response) {
                setVehiculos(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
          };



    },[])

    useEffect(()=>{
        if(mostrartabla){
            setTextoBoton('Crear nuevo Vehiculo')
            setColorBoton('indigo')
        } else {
            setTextoBoton('Mostrar todos los vehiculos')
            setColorBoton('red')
        }
    },[mostrartabla])
    return (
        <div className='flex h-full w-full flex-col items-center justify-start'>
            <div className='flex flex-col'>
            <h2 className='text-3xl font-extrabold text-gray-900 p-8'>Pagina de administracion de vehiculos</h2>
            <button onClick={()=>{
                setMostrartabla(!mostrartabla)
            }} 
            
            className={`bg-${colorBoton}-500 p-5 text-white rounded-full m-6 w-28 self-end`}>
            {textoBoton}</button>
            </div>
            {mostrartabla ? <TablaVehiculos listaVehiculos={vehiculos}/> :
            <FormularioVehiculos 
            listaVehiculos={vehiculos}
            mostrartabla={setMostrartabla} 
            agregarVehiculo={setVehiculos}/>
            }
            <ToastContainer
            position="bottom-center"
            autoClose={5000}/>

             

        </div> 
    )
}

const TablaVehiculos = ({listaVehiculos})=>{
    return(
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-gray-800 text-2xl font-extrabold'>Todos los vehiculos</h2>
        <table>
            <thead>
                <tr>
                <th>Nombre de Vehiculo</th>
                <th>Marca de Vehiculo</th>
                <th>Modelo de Vehiculo</th>
                </tr>
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculos)=>{
                    return (
                    <tr>
                        <td>{vehiculos.name}</td>
                        <td>{vehiculos.brand}</td>
                        <td>{vehiculos.model}</td>
                    </tr>
                )}
                )}
                
            </tbody>
        </table>
        </div>
    )
}

const FormularioVehiculos = ({mostrartabla, listaVehiculos,agregarVehiculo})=>{

    const form = useRef(null)
    

    
    const submitform = async(e)=>{
        e.preventDefault()
        const fd = new FormData(form.current)


        const nuevoVehiculo = {};
        fd.forEach((value,key) => {
            nuevoVehiculo[key] = value
        })

        const options = {
            method: 'POST',
            url: 'https://vast-waters-45728.herokuapp.com/vehicle/create',
            headers: { 'Content-Type': 'application/json' },
            data: { name: nuevoVehiculo.name, brand: nuevoVehiculo.brand, model: nuevoVehiculo.model },
          };

        await axios
        .request(options)
        .then(function (response) {
        console.log(response.data);
        toast.success('Vehículo agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un vehículo');
      });


        mostrartabla(true)
        
        

    }

    return(
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-gray-800 text-2xl font-extrabold'>Crear nuevo vehiculo</h2>
            <form ref={form} onSubmit={submitform} className='grid grid-cols-2'>
                <label htmlFor="name">
                    Nombre del vehiculo
                <input 
                    name='nombre'
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' 
                    type="text"
                    placeholder='Corolla'
                    
                    required
                />
                </label>
                <label htmlFor="brand">
                    Marca del vehiculo
                    <select 
                        
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' name='marca'
                        defaultValue= {0}
                        required
                         >
                    
                        <option disabled value={0}>Seleccion una opcion</option>
                        <option >Renault</option>
                        <option >Toyota</option>
                        <option >Ford</option>
                        <option >Mazda</option>
                        <option >Chevrolet</option>
                    </select>
                </label>
                <label htmlFor="model">
                    Modelo del vehiculo
                <input 
                    name='modelo'
                    className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' 
                    type="number"
                    min= {1992}
                    max= {2022}
                    placeholder='2014'
                    
                    required
                />
                
                </label>
               
                <button 
                type='submit'
                className='col-span-2 bg-green-400 p-2 rounded-lg shadow-md hover:bg-green-600 text-white'> Guardar vehiculo</button>
            </form>
        </div>
    )
}

export default Vehiculos
