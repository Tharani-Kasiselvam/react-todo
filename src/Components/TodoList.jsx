import { createContext, useContext, useState } from "react"
import { TodoContext } from "../App"
import '../App.css'
export const TodoListContext = createContext("")

import { TodoContentsContext } from "./Header"
const TodoList = () => {
    const { todosList, modifyformId, removeTodo, updateTodoStatus, setEditName, setEditDesc } = useContext(TodoContext)
    const { hdrStatus } = useContext(TodoContentsContext)

    const [todoid, setTodoid] = useState(0)
    const [backupTodoList, setBackupTodoList] = useState(todosList)

    // const [todoSelStatus,todoSelStatus] = useState("All")


    //onEdit button, reloading the TodoName & TodoDesc to the MyTodo Form     
    const modifyTodo = (e) => {
        e.preventDefault()
        // console.log(e)
        const editId = e.target[4].id
        // console.log(editId)
        //receiving the state from Header component and passing values
        setEditName(e.target[0].value)
        setEditDesc(e.target[1].value)
        modifyformId(editId)
    }

    //onDelete button, capturing the FormID for the selected Todo which has to Deleted
    const deleteTodo = (e) => {
        // console.log(e)
        // console.log(e.target.id)
        removeTodo(e.target.id)
    }

    const setTodoStatusColor = (todoStatus) => {
        if (todoStatus == "Completed")
            return "#19d20f"

        else
            return "yellow"
    }

    //On changing the Todo Status
    const onStatusChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.value, "/////", event.target.id)
        // setStatFormId(event.target.id)
        // setTodoStat(event.target.value)
        updateTodoStatus(event.target.id, event.target.value)

        // const todoStatChng = todosList.map(obj => {
        //     console.log("Verifying Todo ID: ", obj.id, "&statFormId:", statFormId)

        //     if(obj.id == statFormId){
        //         console.log("Verifying STATUS change in TODO: ",
        //         statFormId,"----",todoStat)
        //       return {...obj, status:todoStat}
        //     }
        //     return obj
        //   })
        //   console.log("on TODO STATUS Change: ", todoStatChng)
    }

    const dropdownOption = (todoStatus, todoid) => {
        // console.log("TODOID-->",todoid)
        // setStatFormId(todoid)
        if (todoStatus == "Completed") {
            return (
                <select id={todoid} onChange={onStatusChange} style={{ backgroundColor: setTodoStatusColor(todoStatus) }}>
                    <option selected>{todoStatus}</option>
                    <option>Not Completed</option>
                </select>
            )
        }
        else {
            return (
                <select id={todoid} onChange={onStatusChange} style={{ backgroundColor: setTodoStatusColor(todoStatus) }}>
                    <option>{todoStatus}</option>
                    <option>Completed</option>
                </select>
            )
        }
    }

    const reLoadTodoList = () => {
        console.log("INside reLoadList")
        const filteredlist = todosList.filter(todos => {
            if (hdrStatus == "Completed") {
                return todos
            }
        })
        setBackupTodoList(filteredlist)
    }



    // const reloadTodo = todosList.filter(obj => obj.status==todoSelStatus || todoSelStatus=="All")

    return (
        <div>
            {/* todoStat,statFormId */}
            <TodoListContext.Provider value={{ reLoadTodoList, setBackupTodoList }}>
                {/* {console.log("current Data to load/re-load the TodosList", props.todos)} */}
                {console.log("&todoStat:", hdrStatus)}
                {/* {reLoadTodoList()} */}
                <div className="loadtodo">
                    {todosList.map(todos => {
                        if (hdrStatus == "All" || hdrStatus == todos.status) {
                           return (<form onSubmit={modifyTodo} key={todos.id}>
                                <div className="card" style={
                                    {
                                        height: "250px",
                                        width: "350px",
                                        margin: "10px"
                                    }}>
                                    <div className="card-body">
                                        <label htmlFor="name"><b>Name :</b></label>
                                        <input type="text" id="todo-val-name" value={todos.name} disabled></input> <br />
                                        {/* {console.log("Checking Desc in CARDS:", props.todos.description)} */}
                                        <label htmlFor="desc"><b>Description:</b></label>
                                        <input type="text" id="todo-val-desc" value={todos.description} disabled></input> <br /><br />
                                        <b>Status:</b>
                                        {dropdownOption(todos.status, todos.id)}
                                        <br /><br />
                                        <span className="todo-btn-modify">
                                            <button type="button" id={todos.id} className="btn btn-danger" style={{ width: "100px" }} onClick={deleteTodo}>Delete</button>
                                            <button type="submit" id={todos.id} className="btn btn-success" style={{ width: "100px" }}>Edit</button>
                                        </span>
                                    </div>
                                </div>
                            </form>)
                        }
                    }
                    )}
                </div>
            </TodoListContext.Provider>
        </div>
    )
}

export default TodoList