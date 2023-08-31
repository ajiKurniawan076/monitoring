import React, { createContext, useState } from 'react'
import CreateSensor from './CreateSensor'
import { router } from '@inertiajs/react'
import UpdateSensor from './UpdateSensor';

export const contextup = createContext(null);

export default function TableMaster(props) {
    const [edit, setedit] = useState(false)
    const [sensor, setsensor] = useState('')
    const [sensorname, setsensorname] = useState('')
    const [unit, setunit] = useState('')
    const [id, setid] = useState('')
    const handleEdit=(a)=>{
        setsensor(a.sensor)
        setsensorname(a.sensor_name)
        setunit(a.unit)
        setid(a.id)
        setedit(true)
    }
    const reset =() =>{
        setsensor('')
        setsensorname('')
        setunit('')
    }
    return (
        <contextup.Provider value={{edit,setedit,sensor,sensorname,unit,reset,id}}>
            <CreateSensor/>
        <table className='table-fixed mt-3 border-2 border-black'>
            
            <thead className='bg-gray-500 text-white'>
                <tr  className='border-2 border-black'>
                <th className='table-heads'>Sensor</th>
                <th className='table-heads'>Sensor Name</th>
                <th className='table-heads'>Unit</th>
                <th className='table-heads'>Created By</th>
                <th className='table-heads'>Created At</th>
                <th className='table-heads'>Deleted At</th>
                <th className='table-heads'></th>
                </tr>
            </thead>
            <tbody className='bg-gray-300 text-black'>
            {props.data? props.data.map((data, index)=>(
                <tr className='table-row' key={index}>
                    <td className='table-cells'>{data.sensor}</td>
                    <td className='table-cells'>{data.sensor_name}</td>
                    <td className='table-cells'>{data.unit}</td>
                    <td className='table-cells'>{data.created_by}</td>
                    <td className='table-cells'>{data.created_at}</td>
                    <td className='table-cells'>{data.deleted_at}</td>
                    <td className='table-cells text-sm'>
                        <button className='bg-blue-700 text-white p-1 rounded hover:bg-blue-800 w-14' onClick={()=>{handleEdit(data)}}>Edit</button>
                        <button className='bg-red-700 text-white p-1 rounded hover:bg-red-800 w-14' onClick={()=>{router.delete(`/data/master/delete/${data.id}`)}}>Delete</button>
                    </td>
                    </tr>
            )): 'No Data'}
            </tbody>
        </table>
        <UpdateSensor/>
        </contextup.Provider>
    )
}
