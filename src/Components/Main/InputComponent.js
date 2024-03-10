import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {getAllDemoAction, createDemoAction} from '../../Redux/Actions/DemoActions'

export const InputComponent = () => {

    let dispatch = useDispatch()

    const [data, setData] = useState({
        name : "",
        age : -1
    })

    let create = () => {
        dispatch(createDemoAction(data))
    }

    let refresh = () => {
        dispatch(getAllDemoAction())
    }

  return (
    <div style={{margin : "10px"}}>
        <button className='btn btn-primary' style={{margin : "5px"}} onClick={refresh}>Refresh</button>
        <div style={{margin : "5px"}}>
            <span className='text-danger' style={{margin : "5px"}}><b>Post new demo : </b></span>
            Name : <input style={{margin : "5px"}} type='text' placeholder='name' value={data.name} onChange={(e)=>setData({...data, name: e.target.value})} />
            Age : <input style={{margin : "5px"}} type='number' placeholder='age' value={data.age} onChange={(e) => setData({...data, age : e.target.value})}/>
            <button className='btn btn-primary' style={{margin : "5px"}} onClick={create}>Create</button>
        </div>
    </div>
  )
}
