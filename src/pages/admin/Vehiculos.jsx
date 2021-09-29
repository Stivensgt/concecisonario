import React, {useEffect, useState} from 'react'

const Vehiculos = () => {

    const [edad, setEdad] = useState(0)
    const [esMenorEdad, setEsMenorEdad] = useState(false)

    useEffect(()=>{
        if (edad>=18){
            setEsMenorEdad(false)
        } else {
            setEsMenorEdad(true)
        }
    })
    return (
        <div className ='' >
            <h2>Formulario creacion de vehiculo</h2>
            <form className='flex flex-col ' >
                <label htmlFor="edad">
                    Por favor ingrese su edad
                
                <input 
                value={edad}
                onChange={(e) =>{
                    setEdad(e.target.value)
                }}
                 className='border border-gray-600' type="number" name="edad"  />
                </label>
                {
                    esMenorEdad? (
                        <span className= 'text-3xl text-green-500'>
                            Usted es menor de edad
                            </span>
                        ) : (
                        <span className= 'text-3xl text-red-500'>
                            Usted es mayor de edad
                            </span>
                        )

                    }
                
                       
                       
            </form>
        </div>
    )
}


export default Vehiculos
