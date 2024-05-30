import { useContext } from "react"
import { TodoContext } from "../App"
import '../App.css'

const TodoList = (props) => {
    const {todosList} = useContext(TodoContext)

    //onEdit button, reloading the TodoName & TodoDesc to the MyTodo Form     
    const modifyTodo = (e) => {
        e.preventDefault()
        console.log(e)
        //receiving the state from Header component and passing values
        props.setEditName(e.target[0].value)
        props.setEditDesc(e.target[1].value)
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
             <div key={todos.id} className="card" style={
                {
                    height:"250px",
                    width:"350px",
                    margin:"10px"                    
                    }}>
                <div className = "card-body">
                    <label htmlFor="name"><b>Name :</b></label> <input type="text" id="todo-val-name" value={todos.name}></input> <br />
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
                            <button type="button" className="btn btn-danger" style = {{width:"100px"}}>Delete</button>
                            <button type="submit" className="btn btn-success" style = {{width:"100px"}}>Edit</button>
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