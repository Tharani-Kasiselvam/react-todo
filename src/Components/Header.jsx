import { createContext, useContext } from 'react'
import '../../src/App.css'
import { TodoContext } from '../App'

const Header = ({setEditName,setEditDesc,editName,editDesc}) => {
  const {addTodo} = useContext(TodoContext)
  const {editTodo} = useContext(TodoContext)

  const loadTodo = (e) => {
    const name = e.target[0].value
    const desc = e.target[1].value
    const status = "Not Completed"
    setEditName("")
    setEditDesc("")
    e.preventDefault()
    console.log(e)
    addTodo (name, desc, status)
    
  }

    // const modifyTodoData = (todoName, todoDesc) => {
    //   console.log(document.getElementsByClassName("todo-form"))
    // }

  return (
    <div>
        <div className="header">My ToDo <br /><br />
            <form className="todo-form" onSubmit={loadTodo}>
                <input type="text" id="editName" value={editName} onChange={(e)=>setEditName(e.target.value)} placeholder='Todo Name' style = {{width:"300px", margin:"10px"}}/>   
                <input type="text" id="editDesc" value={editDesc} onChange={(e)=>setEditDesc(e.target.value)}placeholder='Todo Description' style = {{width:"300px", margin:"10px"}}/>   
                <button className="btn btn-primary" style = {{width:"100px",height:"45px",marginBottom:"7px"}}>Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default Header