import { router } from '@inertiajs/react'
import React from 'react'

export default function Navbar(props) {
  return (
    <div className="flex w-full justify-center border-b-2 border-blue-400 relative">
                <h3 className='text-blue-500 text-center' onClick={()=>{window.open('/', '__self')}}>Hardware Monitoring App</h3>
                <div className='absolute right-0 flex gap-2'>
                <button className={`bg-white rounded-lg p-1 text-gray-400 font-bold hover:bg-gray-500 hover:text-black ${props.auth.user?'':' hidden '}`} onClick={()=>{router.post('/logout')}}>Logout</button>
                <button className={`bg-white rounded-lg p-1 text-gray-400 font-bold hover:bg-gray-500 hover:text-black ${props.auth.user?' hidden ':''}`} onClick={()=>{router.get('/login')}}>Login</button>
                </div>
            </div>
  )
}
