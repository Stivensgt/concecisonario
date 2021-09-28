import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='bg-red-600'>
            <ul className='flex justify-between my-3'>
                <li>logo</li>
                <li>navegacion 1</li>
                <li>navegacion 2</li>
                <li>navegacion 3</li>
                <li className='px-3'>
                    <Link to ='/login'>
                    <button className='p-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-700' >Iniciar sesion</button>
                    </Link>
                </li>

            </ul>
            
            
        </nav>
    )
}

export default Navbar
