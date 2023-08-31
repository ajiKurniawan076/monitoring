import React, { createContext, useState } from 'react'
import CreateHardware from './CreateHardware'
import { router } from '@inertiajs/react'
import UpdateHardware from './UpdateHardware'

export const contextup = createContext(null)
export default function TableHardware(props) {
    const [data, setdata] = useState({})
    const handleDelete = (id) => {
        router.delete(`/data/hardware/delete/${id}`)
    }
    const[edit,setedit] = useState(false)

    const handleEdit = (datas) => {
        setdata({'hardware':datas.hardware, 
        'location':datas.location,
        'timezone':datas.timezone,
        'localtime':datas.localtime,
        'latitude':datas.latitude,
        'longitude':datas.longitude,
        'id': datas.id
    })
    console.log(data);
    setedit(true)
    }

    return (
        <contextup.Provider value={{data, edit, setedit}}>
            <CreateHardware />
            <table className='table-fixed mt-3 border-2 border-black max-w-full'>
                <thead className='bg-gray-500 text-white'>
                    <tr className=''>
                        <th className='table-heads'>Hardware</th>
                        <th className='table-heads'>Location</th>
                        <th className='table-heads'>Timezone</th>
                        <th className='table-heads'>Local Time</th>
                        <th className='table-heads'>Latitude</th>
                        <th className='table-heads'>Longitude</th>
                        <th className='table-heads'>Created By</th>
                        <th className='table-heads'>Created At</th>
                        <th className='table-heads'>Deleted At</th>
                        <th className='table-heads'></th>
                    </tr>
                </thead>
                <tbody className='bg-gray-300 text-black'>
                    {props.data ? props.data.map((data, index) => (
                        <tr className='table-row' key={index}>
                            <td className='table-cells text-sm'>{data.hardware}</td>
                            <td className='table-cells text-sm'>{data.location}</td>
                            <td className='table-cells text-sm'>{data.timezone}</td>
                            <td className='table-cells text-sm'>{data.localtime}</td>
                            <td className='table-cells text-sm'>{data.latitude}</td>
                            <td className='table-cells text-sm'>{data.longitude}</td>
                            <td className='table-cells text-sm'>{data.created_by}</td>
                            <td className='table-cells text-sm'>{data.created_at}</td>
                            <td className='table-cells text-sm'>{data.deleted_at}</td>
                            <td className='table-cells text-sm'>
                                <button className='bg-blue-700 text-white p-1 rounded hover:bg-blue-800 w-14' onClick={() => handleEdit(data)}>Edit</button>
                                <button className='bg-red-700 text-white p-1 rounded hover:bg-red-800 w-14' onClick={() => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>
                    )) : 'No Data'}
                </tbody>
            </table>
            <UpdateHardware/>
        </contextup.Provider>
    )
}
