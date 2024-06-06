import { createContext, useContext, useRef } from "react"
import Header from "./Components/Header"
import { useState } from "react";

export const TodoContext = createContext();


const App = () => {
  const [editName, setEditName] = useState("")
  const [editDesc, setEditDesc] = useState("")
  const [formId, setformId] = useState(0)
  const [statFormId, setStatFormId] = useState(0)
  const [todoStat, setTodoStat] = useState("")
  const [todosList, setTodos] = useState([
    {
      id: 1,
      name: "Grocery",
      description: "vegetable and fruits",
      status: "Not Completed"
    },
    {
      id: 2,
      name: "School",
      description: "Pay Fees",
      status: "Completed"
    }
  ])

  //Method to ADD a new Todo or to reload the Existing Todo with EDITED data
  const addTodo = (name, description, status) => {
    let counter = 0
    for (let key in todosList) {
      let id_val = todosList[key].id

      //To identify whether the Todo is a NEW or EXISTING
      if (formId == id_val) {
        counter++
        editTodo(id_val, editName, editDesc, status)
        break;
      }
    }
    //Alerts if EMPTY values submitted
    if (name == "" || description == "") {
      alert("Kindly enter Todo Name and Todo Description")
    }
    else {
      //This block is to ADD NEW TODO
      if (counter == 0) {
        const newTodo = {
          id: todosList.length + 1,
          name,
          description,
          status
        }
        setTodos([...todosList, newTodo])
      }
    }
  }

  //Modifies the Form ID to perform Edit for a specific form values
  const modifyformId = (editId) => {
    setformId(editId)
  }

  //Method to modify the Edited contents in specific Todo form
  const editTodo = (id, name, desc, status) => {
    const editedTodo = todosList.map(obj => {
      if (obj.id == id) {
        return { ...obj, name: name, description: desc }
      }
      return obj
    })
    setTodos(editedTodo)
    //Resets Form ID State to maintain the Edit for selected scenario
    setformId(0)
  }

  //Method to maintain the STATE for FormId and Status selected for respective Todo
  const updateTodoStatus = (id, todoStatus) => {
    setTodoStat(todoStatus)
    setStatFormId(id)
  }

  //Re-Loads Todo based on the Status selection
  const reloadStatChng = (latestTodo) => {
    setTodos(latestTodo)
    //Resets Form ID State to maintain the Status for selected Todos
    setStatFormId(0)
  }

  //Removes/Deletes the selected Todo
  const removeTodo = (rmvId) => {
    const todos_afterDel = todosList.filter(obj => obj.id != rmvId)
    setTodos(todos_afterDel)
  }

  return (
    <div>
      <TodoContext.Provider value={{ todosList, addTodo, modifyformId, removeTodo, updateTodoStatus,editName,editDesc,
                                    setEditName, setEditDesc,statFormId, todoStat, reloadStatChng}} >
        <Header />
      </TodoContext.Provider>
    </div>
  )
}

export default App