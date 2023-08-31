import { router } from '@inertiajs/react'
import React, {useContext, useEffect, useRef, useState} from 'react'
import { upcontext } from './TableDetail'

export default function UpdateHD(props) {
    const {update, setupdate, data, setdata} = useContext(upcontext)
    const hardref = useRef(null)
    const senref = useRef(null)
    const handleSubmit = () => {
        const datas = {'hardware':hardref.current.value, 'sensor':senref.current.value}
        router.put(`/data/detail/update/${data.id}`, datas)
        setupdate(false)
    }
    useEffect(()=>{
        hardref.current.value = data.hardware
        senref.current.value = data.sensor
    },[data])
  return (
    <div>
        <datalist id='datahw'>
                {props.hw.map((isi, index)=>(<option key={index} value={isi.hardware}></option>))}
            </datalist>
            <datalist id='datams'>
                {props.ms.map((isi, index)=>(<option key={index} value={isi.sensor}></option>))}
            </datalist>
        <div className={`fixed top-0 left-0 z-10 bg-black/30 w-full h-full flex items-center justify-center ${update?' scale-100 ':' scale-0 '}`}>
            <div className={`bg-white p-4 flex flex-col rounded-xl duration-500 ${update?' scale-100 ':' scale-0 '} text-blue-500`}>
                
                <h4>Update Hardware Detail </h4>
                <span>
                    <label>Hardware :</label>
                    <br />
                    <input type="text" className='rounded-lg placeholder:text-xs' ref={hardref} list='datahw' name='hardware' placeholder={`before was ${data.hardware}`}/>
                </span>
                <span>
                    <label>Sensor :</label>
                    <br />
                    <input type="text" className='rounded-lg placeholder:text-xs' ref={senref} list='datams' name='sensor' placeholder={`before was ${data.sensor}`}/>
                </span>
                <button className='bg-blue-400 text-white rounded-lg p-2 mt-3' onClick={()=>handleSubmit()}>Submit</button>
            </div>

        </div>
    </div>
)}
