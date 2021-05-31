import React,{useState} from 'react'
const myStatement = [
    'i am  ver good',
    'good is my strength',
    'all together for my good',
    'in all my good is superior',
    'every thing is doing well',
    'its ok to nbe sad',
    'i love to code ',
    'i code to leaarn',
    'all we wamt is jesus',
]

const Centercard=()=>{

const [counter, setCounter] = useState(0)

const addCount =()=>{
    setCounter(counter +1)
}
const removeCounter =()=>{
    setCounter(counter -1)
}

    return(
<div
style={{
    width:'700px',
    height:'400px',
    backgroundColor:'lightgray',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}}
>
    <div 
    style={{
        width:'700px',
        height:'400px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 30px',
    }}
    ><button onClick={removeCounter}>Decrease</button>
     
<div>{counter}</div>
<div>{myStatement}</div>


     <div>
         <button onClick={addCount}>Increase</button>
     </div>
    
    
    
    
    
    
    
    
    </div>
    
</div>
    )
}
export default Centercard