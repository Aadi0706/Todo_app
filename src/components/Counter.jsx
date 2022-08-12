import React from 'react';

import { useState } from 'react';

// useState is a hook in react used for tracking state in a function component. 




export default function Counter() {

  const [count,setCount]= useState(0);

  function increamentCounter(e){

    setCount(prev=>prev+e);

  }




  return (
    <div>
        <h1>Counter</h1>
        <h2>Count: {count}</h2>

        <button onClick={()=>{increamentCounter(+1)}}>Increase</button>
        <button onClick={()=>{
            if(count>0){
                increamentCounter(-1)
            }
            }}>Decrease</button>
        
        </div>

  )
}
