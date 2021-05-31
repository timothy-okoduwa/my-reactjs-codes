import React from 'react'
import TextArea from "antd/lib/input/TextArea";
import Button from 'antd/lib/button';
const Demo = () => {
    const[viewtext, setViewtext]=usestate([
        {id:'1',name:'timothy',class:'jsss5',time:Date.now}
    ])
    return (
        <div>
            <div>
                <div>
                    <div>name</div>
                    <TextArea 
                    placeholder='enter your name'style={{resize:'none'}}
                    />
                    <div> stack</div>
                   <div style={{display:'flex',flexDirection:'column'}}>
                   <input 
                    placeholder='enter your stack'
                    />
                    <br/>
                    <Button type='primary'danger>submit</Button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Demo
