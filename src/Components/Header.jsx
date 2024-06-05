import { createContext, useContext, useState } from 'react'
import '../../src/App.css'
import { TodoContext } from '../App'
import TodoList from './TodoList'

const Header = ({setEditName,setEditDesc,editName,editDesc}) => {
  const {addTodo,todosList,updatereloadTodo,reloadTodo} = useContext(TodoContext)
  const [todoSelStatus,settodoSelStatus] = useState("All")
  const [hdrStatus,sethdrStatus] = useState("All")

  let todoArr = [];
  //Re-Loading Todos List
    
   const todoListLoad = (todosList,hdrStatus) =>{ 
    todoArr = [];
    console.log("List of data to load the TodosList") 
    let statusTodos;
    // let j=-1;
    //Loading Todos List based on the Overall Status Filter
    for(let i=0;i<todosList.length;i++){
      console.log(todosList[i])
      console.log("Inside elseIf of hdrstatus : ",hdrStatus,"---todoStatus:", todosList[i].status)

      if(hdrStatus=='All'){
        todoArr.push(<TodoList key={todosList[i].id} todos = {todosList[i]} setEditName={setEditName} setEditDesc={setEditDesc} todoSelStatus = {todoSelStatus} />)
      }
      else if(todosList[i].status == hdrStatus){
        // j++
        // statusTodos = todosList.filter(todoObj => todoObj.status==hdrStatus)
        // console.log("Compelted StatusTodos:",statusTodos[0])
        todoArr.push(<TodoList key={todosList[i]} todos = {todosList[i]} setEditName={setEditName} setEditDesc={setEditDesc} todoSelStatus = {todoSelStatus} />)
      }
    }
   }
  
  //loding the new Todos before adding into the coponent
  const loadTodo = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const desc = e.target[1].value
    const status = "Not Completed"
    console.log(e)
    // console.log("Checking Desc value: ", e.target[1].value)
    addTodo (name, desc, status)
    setEditName("")
    setEditDesc("")
  }

  //On changing the header Status Filter -- Need assistance
   const onSelectChange = (event) => {
    console.log("dropdown sel:",event.target.value)
    sethdrStatus(event.target.value)
    console.log("State change dropdown sel:",hdrStatus)
    // const selectedStatus = event.target.value
    // const statusTodos = todosList.filter(todoObj => todoObj.status==selectedStatus)
    // todoListLoad(statusTodos)
    }

    const setStatusColor = () => {
      if(hdrStatus=="All")
        return "orange"

      else if(hdrStatus=="Completed")
        return "#19d20f"

      else
        return "yellow"
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

        {/* Adding newly */}
        <div className="todo-list">
        <div className="list-head">
            <div className="mytodo">My Todos</div>
            <div className="status_filter">Status Filter:
              <select id="hdrSelect" className="All" onChange={onSelectChange} style={{backgroundColor: setStatusColor()}}>
                <option className="all" value="All" selected >All</option> 
                <option className="comp" value="Completed">Completed</option> 
                <option className="ncomp" value="Not Completed">Not Completed</option> 
              </select> 
            </div>
        </div>
        {/* {console.log("In Header Comp curr RELOAD TODO values: ",reloadTodo)}
        {console.log("In Header Comp curr ACTUAL TODO values: ",todosList)} */}
        <div className="loadtodo">
          {todoListLoad(todosList,hdrStatus)}
          {todoArr}
        </div>
        </div>
        </div>
  )
}

export default Header