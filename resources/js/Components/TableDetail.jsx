import React, { createContext, useState } from 'react'
import CreateHD from './CreateHD'
import UpdateHD from './UpdateHD'
import { router } from '@inertiajs/react'

export const upcontext = createContext(null)
export default function TableDetail(props) {

    const [update, setupdate] = useState(false)
    const [hw, sethw] = useState('')
    const [ms, setms] = useState('')
    const [id, setid] = useState('')
    const [data, setdata] = useState({})

    const handleEdit = (a) =>{
        setdata({'hardware':a.hardware, 'sensor':a.sensor, 'id':a.id})
        setupdate(true)
    }

    const handleDelete = (a) =>{
        setid(a)
        router.delete(`/data/detail/delete/${id}`) 
    }
    
    return (
        <upcontext.Provider value={{update, setupdate, data, setdata}}>
            <CreateHD hw={props.hw} ms={props.ms}/>
            
        <table className='table-fixed mt-3 border-2 border-black'>
        <thead className='bg-gray-500 text-white'>
            <tr className=''>
                <th className='table-heads'>ID</th>
                <th className='table-heads'>Hardware</th>
                <th className='table-heads'>Sensor</th>
                <th className='table-heads'>Deleted At</th>
                <th className='table-heads'></th>
            </tr>
            </thead>
            <tbody className='bg-gray-300 text-black'>
            {props.data? props.data.map((data, index)=>(
                <tr className='table-row' key={index}>
                    <td className='table-cells'>{data.id}</td>
                    <td className='table-cells'>{data.hardware}</td>
                    <td className='table-cells'>{data.sensor}</td>
                    <td className='table-cells'>{data.deleted_at}</td>
                    <td className='table-cells text-sm'>
                        
                        <button className='bg-blue-700 text-white p-1 rounded hover:bg-blue-800 w-14' onClick={()=>handleEdit(data)}>Edit</button>
                        <button className='bg-red-700 text-white p-1 rounded hover:bg-red-800 w-14' onClick={()=>handleDelete(data.id)}>Delete</button>
                    </td>
                    </tr>
            )): 'No Data'}
            </tbody>
        </table>
        <UpdateHD hw={props.hw} ms={props.ms}/>
        </upcontext.Provider>
    )
}
