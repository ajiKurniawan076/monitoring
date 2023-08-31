import React, { useContext, useEffect, useRef, useState } from 'react'
import { contextup } from './TableMaster'
import { router } from '@inertiajs/react'

export default function UpdateSensor() {
    const { edit, setedit, sensor, sensorname, unit, reset,id } = useContext(contextup)

    const sensor2 = useRef(null)
    const sensorname2 = useRef(null)
    const unit2 = useRef(null)
    const handleSubmit = () => {
        const inputsensor = sensor2.current.value
        const inputnama = sensorname2.current.value
        const inputunit = unit2.current.value
        const data = {'sensor':inputsensor, 'sensorName':inputnama, 'unit':inputunit}
        router.put(`/data/master/update/${id}`,data)
        console.log(data);
        reset()
        setedit(false)
    }
    useEffect(()=>{
        sensor2.current.value = sensor
        sensorname2.current.value = sensorname
        unit2.current.value = unit
    },[sensor,sensorname,unit])


    return (
        <div>
            <div className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full flex items-center justify-center ${edit ? ' scale-100 ' : ' scale-0 '}`}>
                <div className={`bg-white p-4 flex flex-col rounded-xl duration-500 ${edit ? ' scale-100 ' : ' scale-0 '}`}>
                    <h4>Update Master Sensor </h4>
                    <span>
                        <label>Sensor :</label>
                        <br />
                        <input type="text" className='rounded-lg' defaultValue={sensor} ref={sensor2} />
                    </span>
                    <span>
                        <label>Sensor Name :</label>
                        <br />
                        <input type="text" className='rounded-lg' defaultValue={sensorname} ref={sensorname2} />
                    </span>
                    <span>
                        <label>Unit :</label>
                        <br />
                        <input type="text" className='rounded-lg' defaultValue={unit} ref={unit2} />
                    </span>
                    <button className='bg-blue-400 text-white rounded-lg p-2 mt-3' onClick={() => handleSubmit()}>Submit</button>
                </div>

            </div>
        </div>
    )
}