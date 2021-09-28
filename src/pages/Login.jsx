import React from 'react'
import { Link } from 'react-router-dom'
import Google from 'media/google_logo.png';

const Login = () => {
    return (
    <>
        <div className='max-w-md w-full space-y-8'>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesion en tu cuenta</h2>
            <form className='mt-8  space-y-6'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
                <div>
                <input 
                name='email'
                autoComplete = 'email'
                className='appearance-none focus:outline-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-s ' 
                type="email"
                placeholder='Correo electronico '
                required />
                </div>
                <div>
                <input 

                id= 'password'
                name= 'password'
                autoComplete='current-password'
                className='appearance-none focus:outline-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-s ' 
                type="password" 
                placeholder='Contraseña'
                required />
                </div>
                <div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <input 
                            id='recuerdame'
                            type="checkbox" 
                            name='recuerdame'
                            className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                        />
                        <label htmlFor='recuerdame' className='ml-2 block text-sm text-gray-900'>
                         Recuerdame
                        </label>
                    </div>
                    <div className='text-sm'>
                        <a href='/' className='font-medium text-indigo-600 hover:text-indigo-500'>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
                </div>
                <div>
                    
                    <button type='submit'
                        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                    <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        {/* <LockClosedIcon
                        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                        aria-hidden='true'
                        /> */}
                    </span>
                    <Link to='/admin'>Inicia sesion</Link>
                    </button>
                </div>
                <div className='flex items-center justify-between' >
                    <span>¿No tienes cuenta?</span>
                    <Link to='/registro'>
                    <span className='font-medium text-indigo-600 hover:text-indigo-500'>Regístrate</span>
                    </Link>
                </div>
            </div>
            </form>
        </div>
        <div className='flex items-center justify-center'>
          <span className='mx-4'>------------------------</span>
          <h2 className='my-4 text-center text-sm font-extrabold text-gray-900'>O</h2>
          <span className='mx-4'>------------------------</span>
        </div>
            <div className='max-w-md w-full'>
             <div>
                <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                >
                    <div className='flex items-center justify-start'>
                        <img src={Google} alt='Logo Google' className='h-6 w-6' />
                        <span className='mx-4'>Continúa con Google</span>
                    </div>
                </button>
             </div>
            </div>
    </>
        
        
    )
}

export default Login
