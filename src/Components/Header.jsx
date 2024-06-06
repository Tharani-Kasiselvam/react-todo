import { createContext, useContext, useState } from 'react'
import '../../src/App.css'
import { TodoContext } from '../App'
import TodoList from './TodoList'
export const TodoContentsContext = createContext()

const Header = () => {
  const { addTodo, setEditName, setEditDesc, editName, editDesc } = useContext(TodoContext)
  const [hdrStatus, sethdrStatus] = useState("All")

  //loding the new Todos before adding into the component
  const loadTodo = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const desc = e.target[1].value
    const status = "Not Completed"

    //Context API method to load the newly added Todos
    addTodo(name, desc, status)

    //Resetting with blank value in Todo Form entry
    setEditName("")
    setEditDesc("")
  }

  //On changing the header Status Filter - modifies the State with latest status
  const onSelectChange = (event) => {
    sethdrStatus(event.target.value)
  }

  //Changes the Status Filter Drop down with Color based on the value selection
  const setStatusColor = () => {
    if (hdrStatus == "All")
      return "orange"

    else if (hdrStatus == "Completed")
      return "#19d20f"

    else
      return "yellow"
  }

  return (
    <div>
      <TodoContentsContext.Provider value={{ hdrStatus }}>
        {/* Header Section - with Todo Entry Form elements */}
        <div className="header">My ToDo <br /><br />
          <form className="todo-form" onSubmit={loadTodo}>
            <input type="text" id="editName" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder='Todo Name' style={{ width: "300px", margin: "10px" }} />
            <input type="text" id="editDesc" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} placeholder='Todo Description' style={{ width: "300px", margin: "10px" }} />
            <button className="btn btn-primary" style={{ width: "100px", height: "45px", marginBottom: "7px" }}>Add Todo</button>
          </form>
        </div>

        {/* Content Section - with Status Filter and Todos List*/}
        <div className="todo-list">
          <div className="list-head">
            <div className="mytodo">My Todos</div>
            <div className="status_filter">Status Filter:
              <select id="hdrSelect" className="All" onChange={onSelectChange} style={{ backgroundColor: setStatusColor() }}>
                <option className="all" value="All">All</option>
                <option className="comp" value="Completed">Completed</option>
                <option className="ncomp" value="Not Completed">Not Completed</option>
              </select>
            </div>
          </div>
          <div>
            {/* Renders List of Todos to be populated in Content Section */}
            <TodoList />
          </div>
        </div>
      </TodoContentsContext.Provider>
    </div>
  )
}

export default Header