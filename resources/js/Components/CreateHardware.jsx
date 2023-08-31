import { router } from '@inertiajs/react'
import React, { useRef, useState } from 'react'

export default function CreateHardware() {
    const [form, setform] = useState(false)
    const hardwareref = useRef(null)
    const locref = useRef(null)
    const timeref = useRef(null)
    const longref = useRef(null)
    const latref = useRef(null)
    const handleSubmit =()=>{
        const hardware = hardwareref.current.value
        const location = locref.current.value
        const timezone = timeref.current.value
        const longitude = longref.current.value
        const latitude = latref.current.value
        const data = {hardware, location, timezone, longitude, latitude}
        router.post(`/data/hardware/create`, data)
        setform(false)
    }
  return (
    <div className='flex justify-center'>
        <button className=' bg-gray-400 text-white p-2' onClick={()=>{setform(true)}}>Create New Hardware</button>
        <div className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full flex items-center justify-center ${form?' scale-100 ':' scale-0 '}`}>
            <div className={`bg-white p-4 flex flex-col rounded-xl duration-500 ${form?' scale-100 ':' scale-0 '}`}>
                <h4>Create Hardware </h4>
                <span>
                    <label>Hardware :</label>
                    <br />
                    <input type="text" className='rounded-lg' ref={hardwareref}/>
                </span>
                <span>
                    <label>Location :</label>
                    <br />
                    <input type="text" className='rounded-lg' ref={locref}/>
                </span>
                <span>
                    <label>Timezone :</label>
                    <br />
                    <input type="text" className='rounded-lg' ref={timeref}/>
                </span>
                <span>
                    <label>Latitude :</label>
                    <br />
                    <input type="text" className='rounded-lg' ref={latref}/>
                </span>
                <span>
                    <label>Longitude :</label>
                    <br />
                    <input type="text" className='rounded-lg' ref={longref}/>
                </span>
                <button className='bg-blue-400 text-white rounded-lg p-2 mt-3' onClick={()=>handleSubmit()}>Submit</button>
            </div>

        </div>
    </div>
)
}
