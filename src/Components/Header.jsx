import { createContext, useContext, useState } from 'react'
import '../../src/App.css'
import { TodoContext } from '../App'
import TodoList from './TodoList'

const Header = ({setEditName,setEditDesc,editName,editDesc}) => {
  const {addTodo} = useContext(TodoContext)


  const loadTodo = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const desc = e.target[1].value
    const status = "Not Completed"
    console.log(e)
    addTodo (name, desc, status)
    setEditName("")
    setEditDesc("")
    
  }

  const editTodo = (name,desc) =>{
      console.log("testing")
  }

  return (
    <div>
        <div className="header">My ToDo <br /><br />
            <form className="todo-form" onSubmit={loadTodo}>
                <input type="text" id="editName" value={editName} onChange={(e)=>setEditName(e.target.value)} placeholder='Todo Name' style = {{width:"300px", margin:"10px"}}/>   
                <input type="text" id="editDesc" value={editDesc} onChange={(e)=>setEditDesc(e.target.value)}placeholder='Todo Description' style = {{width:"300px", margin:"10px"}}/>   
                <button className="btn btn-primary" style = {{width:"100px",height:"45px",marginBottom:"7px"}}>Add Todo</button>
            </form>
        </div>
        <TodoList setEditName={setEditName} setEditDesc={setEditDesc}/>
    </div>
  )
}

export default Header