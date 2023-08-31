import { router } from '@inertiajs/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contextup } from './TableHardware'

export default function UpdateHardware() {
    const { data, edit, setedit } = useContext(contextup)
    const hardwareref = useRef(null)
    const locref = useRef(null)
    const timeref = useRef(null)
    const longref = useRef(null)
    const latref = useRef(null)
    const handleSubmit = () => {
        const datas = {
            'hardware': hardwareref.current.value,
            'location': locref.current.value,
            'timezone': timeref.current.value,
            'latitude': latref.current.value,
            'longitude': longref.current.value
        }
        router.put(`/data/hardware/update/${data.id}`,datas)
        setedit(false)
    }
    useEffect(() => {
        hardwareref.current.value = data.hardware
        locref.current.value = data.location
        timeref.current.value = data.timezone
        longref.current.value = data.longitude
        latref.current.value = data.latitude
    }, [data])
    return (
        <div className='flex justify-center'>
            <div className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full flex items-center justify-center ${edit ? ' scale-100 ' : ' scale-0 '}`}>
                <div className={`bg-white p-4 flex flex-col rounded-xl duration-500 ${edit ? ' scale-100 ' : ' scale-0 '}`}>
                    <h4>Update Hardware </h4>
                    <span>
                        <label>Hardware :</label>
                        <br />
                        <input type="text" className='rounded-lg' ref={hardwareref} />
                    </span>
                    <span>
                        <label>Location :</label>
                        <br />
                        <input type="text" className='rounded-lg' ref={locref} />
                    </span>
                    <span>
                        <label>Timezone :</label>
                        <br />
                        <input type="text" className='rounded-lg' ref={timeref} />
                    </span>
                    <span>
                        <label>Latitude :</label>
                        <br />
                        <input type="text" className='rounded-lg' ref={latref} />
                    </span>
                    <span>
                        <label>Longitude :</label>
                        <br />
                        <input type="text" className='rounded-lg' ref={longref} />
                    </span>
                    <button className='bg-blue-400 text-white rounded-lg p-2 mt-3' onClick={() => handleSubmit()}>Submit</button>
                </div>

            </div>
        </div>
    )
}
