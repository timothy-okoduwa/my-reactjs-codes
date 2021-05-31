import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React,{useState} from 'react'

const Friday = () => {
    const[value, setValue]=useState([
    'good is good',
    'we are who wee are',
    'god of today tomorrow and for ever ',
    'heaven is my goal',
    'i love to code ',
    'good is good',
    'we are who wee are',
    'god of today tomorrow and for ever ',
    'heaven is my goal',
    'i love to code ',
    ])
    const [counter, setCounter]=useState(0)
    
   const changeplus=()=>{
       setCounter(counter+1)
   } 
   const changeminus=()=>{
       setCounter(counter-1)
   }
   

    return (
        <div style ={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
           <div style={{height:'300px',width:'500px', backgroundColor:'gray', borderRadius:'9px',display:'flex',justifyContent:'center',marginTop:'20px'}}>
                 <div style={{marginTop:'80px'}}>
                     {/* <input placeholder='enter your quote' style={{width:'100%',}}/> */}
                     <div>{value[counter]}</div>
                     <div style={{display:'flex',justifyContent:'space-between',marginTop:'70px'}}>
                        
                         
                     <Button type='primary' danger onClick={changeminus} >previous</Button>
                         <Button type='primary' onClick={changeplus}>next</Button>
                     
                     </div>
                 </div>
                 
           </div>
          
        </div>
    )
}

export default Friday
