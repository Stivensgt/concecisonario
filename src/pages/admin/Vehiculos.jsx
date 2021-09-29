import React, {useEffect, useState} from 'react'

const Vehiculos = () => {

    const [nombreVehiculo, setNombreVehiculo] = useState('');

    useEffect(()=>{
    console.log('Hola soy un use effect que se ejecuta una sola vez')},[])

    

    const enviarDatosAlBackend = () => {
        console.log('El valor de la variable nombreVehiculo es: ', nombreVehiculo)

    }

    return (
        <div className ='' >
            <form className='flex flex-col content-center justify-items-center' >
                <h2>Formulario creacion de vehiculo</h2>
                <input onChange={(e) =>{setNombreVehiculo(e.target.value)}}
                    type="text" placeholder='Nombre del vehiculo' />
                <input onChange={ (e) =>{console.log('Marca: ',e.target.value) }}
                    type="text" placeholder='Marca del vehiculo'/>
                <input type="text" placeholder='Modelo del vehiculo'/>
                <button type='button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar datos</button>
            </form>
        </div>
    )
}

export default Vehiculos
