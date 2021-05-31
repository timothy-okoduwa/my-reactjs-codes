import { Button,Input } from 'antd'
import React,{useState} from 'react'

const Romanus = () => {
    const[team1 , setTeam1]=useState(' ')
    const[team2, setTeam2]=useState(' ')
    const[myteam1, setMyteam1]=useState([

    ])
    const[myteam2, setMyteam2]= useState([
    ])
    const add1=()=>{
        setMyteam1([...myteam1,team1])
    }
const add2=()=>{
    setMyteam2([...myteam2,team2])
}
    
    return (
        <div>
           
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{display:'flex',justifyContent:'space-between',}}>
                <Input
                value={team1}
                onChange={(e)=>{
                    setTeam1(e.target.value)
                }}
                
                
                placeholder='teamMate 1' style ={{marginRight:'10px'}}/>
            
            and
            
            <Input 
            value={team2}
            onChange={(e)=>{
                setTeam2(e.target.value)
            }}
            
            
            
            placeholder='TeamMate2' style ={{marginLeft:'10px'}}/></div>
            </div>
             <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}> 
             <Button type='primary'  onClick={()=>{
                 add1()
                 add2()

             }}>submit</Button></div>
             <br/>
             <div stryle={{marginRight:'10px'}}>This is a pocket project </div>
            <div style={{display:'flex'}}>
           
            
                done by<div style={{marginLeft:'39px',fontWeight:'bold'}}>{myteam1[myteam1.length-1]}</div>
                <div style={{marginLeft:'15px'}}>and</div> <br/>
                <div  style={{marginLeft:'39px',fontWeight:'bold'}}>{myteam2[myteam2.length-1]}</div>
            </div>
        </div>
    )
}

export default Romanus
