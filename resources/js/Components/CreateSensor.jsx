import { router } from '@inertiajs/react'
import React, { useState } from 'react'

export default function CreateSensor() {
    const [form, setform] = useState(false)
    const [sensor, setsensor] = useState('')
    const [sensorName, setsensorname] = useState('')
    const [unit, setunit] = useState('')
    const handleSubmit =() =>{
        const data={sensor, sensorName, unit}
        router.post('/data/master/create',data)
        console.log(data);
        setform(false)
    }

    return (
        <div>
            <button className=' bg-gray-400 text-white p-2' onClick={()=>{setform(true)}}>Create New Master Sensor</button>
            <div className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full flex items-center justify-center ${form?' scale-100 ':' scale-0 '}`}>
                <div className={`bg-white p-4 flex flex-col rounded-xl duration-500 ${form?' scale-100 ':' scale-0 '}`}>
                    <h4>Create Master Sensor </h4>
                    <span>
                        <label>Sensor :</label>
                        <br />
                        <input type="text" className='rounded-lg' onChange={(e)=>{setsensor(e.target.value)}}/>
                    </span>
                    <span>
                        <label>Sensor Name :</label>
                        <br />
                        <input type="text" className='rounded-lg' onChange={(e)=>{setsensorname(e.target.value)}}/>
                    </span>
                    <span>
                        <label>Unit :</label>
                        <br />
                        <input type="text" className='rounded-lg' onChange={(e)=>{setunit(e.target.value)}}/>
                    </span>
                    <button className='bg-blue-400 text-white rounded-lg p-2 mt-3' onClick={()=>handleSubmit()}>Submit</button>
                </div>

            </div>
        </div>
    )
}
