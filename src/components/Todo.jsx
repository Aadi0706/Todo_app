import React from 'react';
import { useState } from 'react';
import styles from "./todo.module.css"
import Todoitem from './Todoitem';

export default function Todo() {

    const [todo,setNewtodo]=useState("")
    const [todos,setTodos]=useState([]);

    const handleChange=(e)=>{
        setNewtodo(e.target.value);
    }

    const handleDelete=(id)=>{
        const newtodos=todos.filter((todo)=>(todo.id !== id));
        setTodos(newtodos);
    }
   


  return (
    <div>

<input type="text" value={todo} onChange={handleChange}/>

<button onClick={()=>{
    setTodos([...todos,{
        id:Date.now(),
        value:todo,
        iscompleted:false
    }])

   setNewtodo("");

}} >Add Todo</button>

{/* below is the data mapping part or the DOM elements to be shown part  */}

<div className={styles.todos}> 
{
    
         todos.map((todo) => ( < Todoitem key={todo.id} todo={todo} handleDelete={handleDelete}/>))
           
           
}     
</div>
    </div>
  )
}
