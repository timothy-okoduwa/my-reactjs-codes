import React from 'react'
import 'antd/dist/antd.css'
import Centercard from './Centercard'
import './Mycss.css'
import Newhome from './Newhome'
import Ok from './Ok'
import Friday from './Friday'
import Demo from './Demo'
import Romanus from './R#omanus'
const App=() =>{
  return(
  <div style={{
    hight:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  }}>
    <div style={{
      marginBottom:'20px',
      fontWeight:'bold',
      fontSize:'20px',
    }}>this is home</div>
    {/* <Centercard/> */}
  
     <Newhome/>
     <Friday/> 
     <br/>
     <br/>
     {/* <Demo/> */}
     <Romanus/>
     <br/>
     <br/>
     <Ok/>
  </div>
  )
}
export default App;
