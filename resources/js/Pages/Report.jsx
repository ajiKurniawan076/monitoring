import React, { createRef, useEffect, useRef, useState } from 'react'
import DatePicker from 'flowbite-datepicker/Datepicker'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import ReactToPdf from 'react-to-pdf'
import Navbar from '@/Components/Navbar'
import { router } from '@inertiajs/react'


export default function Report(props) {
    useEffect(() => {
        const datepicker1 = document.getElementById('dateFrom')
        const datepicker2 = document.getElementById('dateEnd')
        new DatePicker(datepicker1, {})
        new DatePicker(datepicker2, {})
    }, [])
    const hardref = useRef(null)
    const handleload = () => {
        const hardware = hardref.current.value
        const data = { hardware }
        router.post('/report', data)
    }

    const [value, setvalue] = useState(0)
    const getValue = (id, sensor) => {
        let nilai = 0
        props.all.map((td, i) => {
            if (td.trans_id == id && td.sensor == sensor.sensor) { nilai = td.value }

        })
        return nilai
    }

    const getmin = (sensor) => {
        let min = 0
        let index = 0
        props.all.map((td, i) => {
            if (min == 0 && td.sensor == sensor) { min = td.value }
            else {
                if (td.value < min && td.sensor == sensor) { min = td.value; index = i }
            }
        }
        )
        return min
    }
    const getmax = (sensor) => {
        let max = 0
        let index = 0
        props.all.map((td, i) => {
            if (max == 0 && td.sensor == sensor) { max = td.value }
            else {
                if (td.value > max && td.sensor == sensor) { max = td.value; index = i }
            }
        }
        )
        return max
    }
    const ref = createRef()
    return (
        <div className='flex flex-col items-center w-screen min-h-screen h-fit justify-start bg-gray-200' >
            <Navbar auth={props.auth} />
            <div className="w-full grid sm:grid-cols-4 mt-3 p-3 text-blue-600 gap-3 justify-center">
                <span>
                    <label>DATE FROM</label><br />
                    <input type='text' placeholder='YYYY-MM-DD' className='sm:ms-3 rounded-lg sm:w-3/5 h-10 text-xs' id='dateFrom' />
                </span>
                <span>
                    <label>DATE END</label><br />
                    <input type='text' placeholder='YYYY-MM-DD' className='sm:ms-3 rounded-lg sm:w-3/5 h-10 text-xs' id='dateEnd' />
                </span>
                <span>
                    <label>HARDWARE</label><br />
                    <input type='text' placeholder='CHOOSE' ref={hardref} className='sm:ms-3 rounded-lg sm:w-3/5 h-10 text-xs' />
                </span>
                <span><span></span><br />
                    <button className='bg-blue-400 hover:bg-blue-600 duration-300 text-white h-10 rounded-lg p-3 flex w-full justify-center sm:w-3/5 items-center' onClick={() => handleload()}>LOAD DATA</button>
                </span>
            </div>
            <div className='w-full text-center mt-5 flex flex-col items-center' ref={ref}>
                {props.transaksi ?
                    <div className='flex flex-col'>
                        <span>Location : {props.hardware.location}</span>
                        <span>Coordinate : {props.hardware.latitude} , {props.hardware.longitude}</span>
                        <span>Last Send : {props.hardware.localtime}</span>
                        <span>Maximal Value : {props.sensor.map((a,i)=>(a.sensor+' = '+getmax(a.sensor)+' '))}</span>
                        <span>Minimal Send : {props.sensor.map((a,i)=>(a.sensor+' = '+getmin(a.sensor)+' '))}</span>
                    </div>
                    :
                    <p>Belum ada Data</p>}
            
            {props.transaksi ?
                <><table className='mt-5 bg-gray-600 text-white' id='tablereport'>
                    <thead><tr>
                        <td className='table-heads'>Nomor</td>
                        <td className='table-heads'>Local Time</td>
                        {props.sensor.map((header, index) => (<td className='table-heads' key={index}>{header.sensor_name}</td>))}
                    </tr></thead>
                    <tbody>
                        {props.transaksi.map((data, index) => (
                            <tr key={index}>
                                <td className='table-cells'>{index}</td>
                                <td className='table-cells'>{data.created_at}</td>
                                {props.sensor.map((isi, index) => (<td className='table-cells' key={index}>{getValue(data.trans_id, isi)}</td>))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                </>
                :
                ''
            }
            </div> 
            {props.transaksi && <>
                <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className='p-1 bg-green-500/80 rounded-md shadow-md text-white mt-3 w-[200px]'
                            table="tablereport"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download as XLS" />
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <button className='p-1 bg-red-500/80 rounded-md shadow-md text-white mt-3 w-[200px]' onClick={toPdf}>Generate pdf</button>
                        )}
                    </ReactToPdf>
            </>}
            
        </div>
    )
}
