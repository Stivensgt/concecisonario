import React, {useEffect, useState} from 'react'

const vehiculosBackend =[
    {
    nombre: 'Corolla',
    marca: 'Toyota',
    modelo: 2014
    },
    {
    nombre: 'Sandero',
    marca: 'Renault',
    modelo: 2014
    },
    {
    nombre: 'Duster',
    marca: 'Renault',
    modelo: 2020
    },
    {
    nombre: 'Rav4',
    marca: 'Toyota',
    modelo: 2012
    },
    {
    nombre: 'Fiesta',
    marca: 'Ford',
    modelo: 2003
    }

]
const Vehiculos = () => {
    const [mostrartabla,setMostrartabla] = useState(true)
    const [textoBoton,setTextoBoton] = useState('Crear nuevo vehiculo')
    const [vehiculos,setVehiculos] = useState([])
    
    useEffect(()=>{
        //obetener lista de vehiculos desde el backend
        setVehiculos(vehiculosBackend)



    },[])

    useEffect(()=>{
        if(mostrartabla){
            setTextoBoton('Crear nuevo Vehiculo')
        } else {
            setTextoBoton('Mostrar todos los vehiculos')
        }
    },[mostrartabla])
    return (
        <div className='flex h-full w-full flex-col items-center justify-start'>
            <div className='flex flex-col'>
            <h2 className='text-3xl font-extrabold text-gray-900 p-8'>Pagina de administracion de vehiculos</h2>
            <button onClick={()=>{
                setMostrartabla(!mostrartabla)
            }} 
            
            className='bg-indigo-500 p-5 text-white rounded-full m-6 w-28 self-end'>
            {textoBoton}</button>
            </div>
            {mostrartabla ? <TablaVehiculos listaVehiculos={vehiculos}/> :
            <FormularioVehiculos/>
            }



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
                        <td>{vehiculos.nombre}</td>
                        <td>{vehiculos.marca}</td>
                        <td>{vehiculos.modelo}</td>
                    </tr>
                )}
                )}
                
            </tbody>
        </table>
        </div>
    )
}

const FormularioVehiculos = ()=>{
    
    return(
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-gray-800 text-2xl font-extrabold'>Crear nuevo vehiculo</h2>
            <form className='grid grid-cols-2'>
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <button className='col-span-2 bg-green-400 p-2 rounded-lg shadow-md hover:bg-green-600 text-white'> Guardar vehiculo</button>
            </form>
        </div>
    )
}

export default Vehiculos
