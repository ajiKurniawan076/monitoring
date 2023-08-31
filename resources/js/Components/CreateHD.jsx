import { router } from '@inertiajs/react'
import React, {useState} from 'react'

export default function CreateHD(props) {
    const [form, setform] = useState(false)
    const [hardware, sethardware] = useState('')
    const [sensor, setsensor] = useState('')
    const handleSubmit = () => {
        const data= {hardware, sensor}
        router.post('/data/detail/create',data)
        setform(false)
    }
  return (
    <div>
        <datalist id='datahw'>
                {props.hw.map((isi, index)=>(<option key={index} value={isi.hardware}></option>))}
            </datalist>
            <datalist id='datams'>
                {props.ms.map((isi, index)=>(<option key={index} value={isi.sensor}></option>))}
            </datalist>
        <button className=' bg-gray-400 text-white p-2' onClick={()=>{setform(true)}}>Create Hardware Detail</button>
        <div className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full flex items-center justify-center ${form?' scale-100 ':' scale-0 '}`}>
            <div className={`bg-white p-4 flex flex-col rounded-xl duration-500 ${form?' scale-100 ':' scale-0 '}`}>
                
                <h4>Create Hardware Detail </h4>
                <span>
                    <label>Hardware :</label>
                    <br />
                    <input type="text" className='rounded-lg' list='datahw' name='hardware' onChange={(hw)=>{sethardware(hw.target.value)}}/>
                </span>
                <span>
                    <label>Sensor :</label>
                    <br />
                    <input type="text" className='rounded-lg' list='datams' name='sensor' onChange={(ms)=>{setsensor(ms.target.value)}}/>
                </span>
                <button className='bg-blue-400 text-white rounded-lg p-2 mt-3' onClick={()=>handleSubmit()}>Submit</button>
            </div>

        </div>
    </div>
)
}
