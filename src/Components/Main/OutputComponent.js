import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {getAllDemoAction} from '../../Redux/Actions/DemoActions'
import {useDispatch} from 'react-redux'

export const OutputComponent = () => {

    let dispatch = useDispatch()

    const data = useSelector(state => state.demoReducer)

    const [target,setTarget] = useState({
        id : "",
        name : "",
        age : ""
    })

    useEffect(() => {
        dispatch(getAllDemoAction())
    },[data])

    let targetDemo = (e) => {
        setTarget(e)
    }

  return (
    <div style={{margin : "10px", border : "2px solid black"}} > 
        <div className='text-danger text-center' style={{fontSize : "25px"}}><b>All Demos</b></div>
        <div style={{margin : "5px", border : "2px solid blue"}}>
            <div className='text-center' style={{color : "rgb(255, 0, 255)"}}><b>Target Demo id : {target.id}</b></div>
            <div style={{color : "rgb(255, 0, 255)"}}>Name : {target.name}</div>
            <div style={{color : "rgb(255, 0, 255)"}}>Age : {target.age}</div>
        </div>
        <div style={{margin : "5px"}}>
            {
                data.map((e) => {
                    return <div style={{margin : "5px", border : "2px solid rgb(120, 110, 97)"}} onClick={() => targetDemo(e)}>
                        <div className='text-center'><b>Demo id : {e.id}</b></div>
                        <div>Name : {e.name}</div>
                        <div>Age : {e.age}</div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
