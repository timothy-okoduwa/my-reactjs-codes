import React,{useState,useEffect} from 'react'
import{Button} from 'antd'
const Newhome = () => {
    const[stack, setStack]= useState(" ")
    const[text, setText]=useState(" ")
    const [viewText, setViewText]=useState([
        {id:1 , name: 'samuel', stack:'frontend', time:Date.now()},
        {id:2 , name: 'gideon', stack:'frontend', time:Date.now()},
        {id:3 , name: 'josh', stack:'frontend', time:Date.now()},
        {id:4 , name: 'malush', stack:'frontend', time:Date.now()},
        {id:5 , name: 'ola', stack:'frontend', time:Date.now()},
    ])
    const addnewname =()=>{
        const id = viewText.length+1
        const add ={id , name:text,stack, time:Date.now()}
        setViewText([...viewText, add])
        setText(" ")
        setStack(" ")

    }

    return (
        <div style={{width:'300px',display:'flex',
        flexDirection:'column',}}>
            <div>my new class</div>

            <div>
                <textarea 
                placeholder='enter your name' style={{
                    resize:'none',
                }}
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
            
                
                />
                <input placeholder='enter your stack' style={{
                    resize:'none'
                }}
                  value={stack}
                  onChange={(e)=>{
                   setStack(e.target.value)
                  }}
                />
                <Button style={{display:'flex',
        flexDirection:'column',width:'30%',}} type="primary" danger
        onClick={addnewname} 
         >hi</Button>
          <div>{viewText.map(({id, name , stack, time})=>(
              <div key={id} style={{display:'flex',
              justifyContent:'space-between'}}>
                 <div>{id}  </div> 
                  <div>{name}</div>
                  <div>{stack}</div>
                  <div>{time}</div>
                  <Button>remove</Button> 
                  
              </div>
           
             
          )
          )}</div>

               
            </div>
        </div>
    )
}

export default Newhome
