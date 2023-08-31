import React, { useEffect } from 'react'
import DatePicker from 'flowbite-datepicker/Datepicker'
import { router } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'

export default function Home(props) {
    props.errors.error? alert(props.errors.error) :''
    return (
        <div className='flex flex-col items-center w-screen h-screen justify-start bg-gray-200'>
            <Navbar auth={props.auth}/>
            <div className="w-full grid sm:grid-cols-2 mt-3 text-blue-600 gap-1 place-items-center bg-blue-300"> 
                    <button className='bg-gray-400 hover:bg-gray-600 duration-300 text-white sm:h-[250px] sm:text-2xl rounded-s-lg p-3 flex w-full justify-center items-center' onClick={()=>{window.open('/data', '__self')}}>DATA MANAGEMENT</button>
                    <button className='bg-gray-400 hover:bg-gray-600 duration-300 text-white sm:h-[250px] sm:text-2xl rounded-e-lg p-3 flex w-full justify-center items-center' onClick={()=>{window.open('/report', '__self')}}>MONITORING</button>
                
            </div>
        </div>
    )
}
