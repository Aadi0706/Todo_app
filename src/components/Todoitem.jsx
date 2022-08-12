import React from 'react'
import { useState } from 'react';
import styles from "./todo.module.css"

export default function ({todo,handleDelete}) {

    const [iscompleted, setIscompleted]=useState(todo.iscompleted);


   

  return (
    <div className={styles.todoitem}>
                 <input 
                 type="checkbox" 
                 checked={iscompleted}
                 onChange={(e)=>{
                // console.log(e.target.checked)
                setIscompleted(e.target.checked)
                }}
                />
                 

                <h2 className={iscompleted ? styles.striked:""}>{todo.value}</h2>
                <button className={styles.delete_button} onClick={()=>{handleDelete(todo.id)}}>Delete</button>      
    </div>
  )
}
