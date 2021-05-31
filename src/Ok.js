import React,{useState,useRef,useEffect} from 'react'

const Ok = () => {
    const me = useRef(" ")
    const[before, setBefore]=useState(0)
    const click=()=>{
        setBefore(Math.floor(Math.random()*100))
    }
    useEffect(()=>{
        me.current= before
    })

    return (
        <div>
            <div>random value</div>
            <br/>
            <div>{before}</div>
            <div ref={me}>old:{me.current}</div>
            <br/>
            <button onClick={click} >click me</button>
        </div>
    )
}

export default Ok


