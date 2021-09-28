import React from 'react'

const Vehiculos = () => {
    return (
        <div className ='' >
            <form className='flex flex-col content-center justify-items-center' >
                <h2>Formulario creacion de vehiculo</h2>
                <input type="text" placeholder='Nombre del vehiculo' />
                <input type="text" placeholder='Marca del vehiculo'/>
                <input type="text" placeholder='Modelo del vehiculo'/>
                <button className='bg-indigo-500 text-white'>Enviar datos</button>
            </form>
        </div>
    )
}

export default Vehiculos
