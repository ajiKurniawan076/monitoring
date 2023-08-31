import Navbar from '@/Components/Navbar';
import TableDetail from '@/Components/TableDetail';
import TableHardware from '@/Components/TableHardware';
import TableMaster from '@/Components/TableMaster';
import React, { useState } from 'react'

export default function Data(props) {
    const [navopen, setnavopen] = useState(false)
    return (
        <div className='flex flex-col items-center w-screen h-screen justify-start bg-gray-200 overflow-auto'>
            <Navbar auth={props.auth}/>
            <button className='sm:hidden text-blue-500 mt-10' onClick={()=>{setnavopen(!navopen); console.log(navopen);}}>{!props.rute?'Choose Data':props.rute} --</button>
            <div className="w-full flex flex-col mt-3 p-3 text-blue-400 gap-3 items-center">
                <div className={`sm:flex ${navopen ? "flex flex-grow" : "hidden"}`} >
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a href="/data/master">Master Sensor</a>
                        <a href="/data/hardware">Hardwarer</a>
                        <a href="/data/detail">Hardware Detail</a>
                    </div>
                </div>
                <div className='w-full max-w-full flex flex-col items-center'>                  
                    {props.rute=='Master Sensor'&& <TableMaster data={props.data}/> || props.rute=='Hardware'&& <TableHardware data={props.data}/> || props.rute=='Hardware Detail'&&<TableDetail data={props.data} hw={props.hw} ms={props.ms}/>}
                </div>
            </div>
        </div>
    )
}

