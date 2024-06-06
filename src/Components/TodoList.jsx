import { createContext, useContext, useState } from "react"
import { TodoContext } from "../App"
import '../App.css'

import { TodoContentsContext } from "./Header"
const TodoList = () => {
    const { todosList, modifyformId, removeTodo, updateTodoStatus, setEditName, setEditDesc,
        statFormId, todoStat, reloadStatChng } = useContext(TodoContext)
    const { hdrStatus } = useContext(TodoContentsContext)

    //onEdit button, reloading the TodoName & TodoDesc to the Todo Form entry   
    const modifyTodo = (e) => {
        e.preventDefault()
        const editId = e.target[4].id

        //receiving the State from Header component and passing modified values values
        setEditName(e.target[0].value)
        setEditDesc(e.target[1].value)

        //updating FormID, to edit the modified Todo details 
        modifyformId(editId)
    }

    //onDelete button, capturing the FormID for the selected Todo which has to Deleted
    const deleteTodo = (e) => {
        //Context API method to remove the specific Todo from the entire list
        removeTodo(e.target.id)
    }

    //On change of individual Todo Status option
    const onStatusChange = (event) => {
        event.preventDefault()

        //Context API method to update the State in Parent component to maintain the Status and Form ID
        updateTodoStatus(event.target.id, event.target.value)

        //passing the value of selected status to set color
        setTodoStatusColor(event.target.value)
    }

    //Method to set Color for the selected Filter within individual Todos
    const setTodoStatusColor = (todoStatus) => {
        if (todoStatus == "Completed")
            return "#19d20f"

        else
            return "yellow"
    }

    //Maintaining the Status dropdown for individual Todos
    const dropdownOption = (todoStatus, todoid) => {

        //Verifies whether we need to load a new Todo with default values with specific to Status
        //or to reload the existing Todo with modified Status
        if (statFormId == 0) {
            if (todoStatus == "Completed") {
                return (
                    <select id={todoid} onChange={onStatusChange} style={{ backgroundColor: setTodoStatusColor(todoStatus) }}>
                        <option>{todoStatus}</option>
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

        //Here the existing Todo with modified Status functionality is implemented
        //Status is modified based on selected Form Id to avoid conflict with other status selection
        else {
            const todoStatChng = todosList.map(obj => {
                if (obj.id == statFormId) {
                    return { ...obj, status: todoStat }
                }
                return obj
            })
            reloadStatChng(todoStatChng)
        }
    }

    return (
        <div>
            <div className="loadtodo">
                {/* Renders the entire Todo List*/}
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
        </div>
    )
}

export default TodoList