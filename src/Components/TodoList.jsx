import { useContext } from "react"
import { TodoContext } from "../App"
import '../App.css'

const TodoList = () => {
    const {todosList} = useContext(TodoContext)
    // const {modifyTodoData} = useContext(ContentContext)

    const modifyTodo = (todoName,todoDesc) => {
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
            
             <div key={todos.id} className="card" style={
                {
                    height:"250px",
                    width:"350px",
                    margin:"10px"                    
                    }}>
                <div className = "card-body">
                    <b>Name :</b> {todos.name} <br />
                    <b>Description:</b> {todos.description} <br />
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
                            <button type="button" className="btn btn-danger" style = {{width:"100px"}}>Delete</button>
                            <button type="button" className="btn btn-success" style = {{width:"100px"}} onClick={(modifyTodo(todos.name,todos.desc))}>Edit</button>
                            </span>
                        </div>
                </div>
             </div>
            
        )
        }
       </div>
       </div>
    </div>
  )
}

export default TodoList