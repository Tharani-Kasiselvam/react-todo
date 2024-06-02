import { useContext } from "react"
import { TodoContext } from "../App"
import '../App.css'

const TodoList = (props) => {
    const {todosList,modifyformId,removeTodo} = useContext(TodoContext)
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

    const deleteTodo = (e) => {
        console.log(e)
        console.log(e.target.id)
        removeTodo(e.target.id)
    }

  return (
    <div>
        <div className="todo-list">
        <div className="list-head">
            <div className="mytodo">My Todos</div>
            <div className="status_filter">Status Filter:
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                        All
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" to="#">All</a>
                            <a className="dropdown-item" to="#">Completed</a>
                            <a className="dropdown-item" to="#">Not Completed</a>
                        </div>
                    </div>
            </div>
        </div>


        <div className="todoCards">
        {todosList.map(todos => 
            
            <form onSubmit={modifyTodo}>
             <div className="card" style={
                {
                    height:"250px",
                    width:"350px",
                    margin:"10px"                    
                    }}>
                <div className = "card-body">
                    <label htmlFor="name"><b>Name :</b></label> <input type="text" id="todo-val-name" value={todos.name}></input> <br />
                    {console.log("Checking Desc in CARDS:", todos.description)}
                    <label htmlFor="desc"><b>Description:</b></label> <input type="text" id="todo-val-desc" value={todos.description}></input> <br />
                    <b>Status:</b> 
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                            {todos.status}
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" to="#">Completed</a>
                                <a className="dropdown-item" to="#">Not Completed</a>
                            </div>
                        </div> <br /><br />
                        <div>
                            <span className="todo-btn-modify">
                            <button type="button" id={todos.id} className="btn btn-danger" style = {{width:"100px"}} onClick={deleteTodo}>Delete</button>
                            <button type="submit" id={todos.id} className="btn btn-success" style = {{width:"100px"}}>Edit</button>
                            </span>
                        </div>
                </div>
             </div>
             </form>
        )
        }
       </div>
       </div>
    </div>
  )
}

export default TodoList