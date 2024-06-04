import { useContext, useState } from "react"
import { TodoContext } from "../App"
import '../App.css'

const TodoList = (props) => {
    const {todosList,modifyformId,removeTodo,reloadTodo} = useContext(TodoContext)
    // const [todoSelStatus,todoSelStatus] = useState("All")


    //onEdit button, reloading the TodoName & TodoDesc to the MyTodo Form     
    const modifyTodo = (e) => {
        e.preventDefault()
        console.log(e)
        const editId = e.target[4].id
        console.log(editId)
        //receiving the state from Header component and passing values
        props.setEditName(e.target[0].value)
        props.setEditDesc(e.target[1].value)
        modifyformId(editId)
    }

    //onDelete button, capturing the FormID for the selected Todo which has to Deleted
    const deleteTodo = (e) => {
        console.log(e)
        console.log(e.target.id)
        removeTodo(e.target.id)
    }

    const dropdownOption = (status) => {
        if(status=="Completed"){
            return (
                <select id="statusCompSel" onChange={onStatusChange}>
                {/* <option value="green">{status}</option>
                <option value="yellow">Not Completed</option> */}
                <option style={{backgroundColor:"green"}} selected>{status}</option>
                <option value="yellow">Not Completed</option>
                </select>
            )
        }
        else{
            return (
                <select id="statusnCompSel" onChange={onStatusChange}>
                <option>{status}</option>
                <option>Completed</option>
                </select>
            )
        }
    }

    

    const onStatusChange = (event) => {
        const statVal = event.target.value
        console.log(statVal)
        if(statVal == "Completed"){
            document.getElementById("statusnCompSel").className="comp"
        }
        if(statVal == "Not Completed"){
            document.getElementById("statusnCompSel").className="ncomp"
        }
}

// const reloadTodo = todosList.filter(obj => obj.status==todoSelStatus || todoSelStatus=="All")
 
return (
    <div>
        {console.log("In TODOLIST Comp RELOAD data: ", reloadTodo)}
        {/* <div className="todo-list">
        <div className="list-head">
            <div className="mytodo">My Todos</div>
            <div className="status_filter">Status Filter:
              <select id="hdrSelect" className="All" onChange={onSelectChange}>
                <option className="all" value="All" selected>All</option> 
                <option className="comp" value="Completed">Completed</option> 
                <option className="ncomp" value="Not Completed">Not Completed</option> 
              </select> 
            </div>
        </div>
        {console.log("---todoSelStatus: ",todoSelStatus)} */}

        {/* {loadTodos()} */}
        {/* <div className="todoCards"> */}
        {/* {todosList.map((todos) =>  */}
        
        {/* Loading the Todos List based on the Status, by default it will load all the Todos list */}
        {/* {todosList.map((todos) => */}
            <form onSubmit={modifyTodo}>
                <div className="card" style={
                    {
                        height:"250px",
                        width:"350px",
                        margin:"10px"                    
                    }}>
                    <div className = "card-body">
                        <label htmlFor="name"><b>Name :</b></label> 
                        <input type="text" id="todo-val-name" value={props.todos.name} disabled></input> <br />
                        {console.log("Checking Desc in CARDS:", props.todos.description)}
                        <label htmlFor="desc"><b>Description:</b></label> 
                        <input type="text" id="todo-val-desc" value={props.todos.description} disabled></input> <br /><br />
                        <b>Status:</b> 
                            {dropdownOption(props.todos.status,props.todos.id)}
                            <br /><br />
                            <span className="todo-btn-modify">
                            <button type="button" id={props.todos.id} className="btn btn-danger" style = {{width:"100px"}} onClick={deleteTodo}>Delete</button>
                            <button type="submit" id={props.todos.id} className="btn btn-success" style = {{width:"100px"}}>Edit</button>
                            </span>
                    </div>
                </div>
            </form>
    {/* )} */}
        
       {/* </div> */}
       {/* </div> */}
    </div>
  )
}

export default TodoList