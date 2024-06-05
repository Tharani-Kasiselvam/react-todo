import { createContext, useRef } from "react"
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"
import { useState } from "react";

export const TodoContext = createContext();


const App = () => {
  const [editName,setEditName] = useState("")
  const [editDesc,setEditDesc] = useState("")
  const [formId,setformId] = useState(0)
  const [todosList,setTodos] = useState([
    {
      id : 1,
      name : "Grocery",
      description : "vegetable and fruits",
      status : "Not Completed"
    },
    {
      id: 2,
      name : "School",
      description : "Pay Fees",
      status : "Completed"
    }
  ])

  //Method to ADD a new Todo or to reload the Existing Todo with EDITED data
  const addTodo = (name, description, status) => {
    let counter = 0
      for(let key in todosList){
        let id_val = todosList[key].id
        console.log("EDIT - ID VALUE: formid- ",formId, "todolistid-", id_val)
          //To identify whether the Todo is a NEW or EXISTING
          if(formId == id_val){
            console.log("EDIT - ID MATCHES")
            counter++
            editTodo(id_val,editName,editDesc)
            break;
          }
      }
      //Alerts if EMPTY values submitted
      if(name=="" || description==""){
        alert("Kindly enter Todo Name and Todo Description")
      }
      else{
        //This block is to ADD NEW TODO
        if(counter==0){
          console.log("EDIT - ID NOT MATCHED")
          const newTodo = {
            id : todosList.length+1,
            name,
            description,
            status
          }
          setTodos([...todosList,newTodo])
        }
      }
  }

  const modifyformId = (editId) => {
    console.log("Verification of ID: ",editId)
    setformId(editId)
  }

  //Method to modify the value in specific Todo form
  const editTodo = (id,name,desc) => {
    const editedTodo = todosList.map(obj => {
      if(obj.id == id){
        return {...obj, name: name, description:desc}
      }
      return obj
    })
    console.log(editedTodo)
    setTodos(editedTodo)
    setformId(0)
  }

  const removeTodo = (rmvId) => {
    // console.log("Inside DEL/REMOVE : ",rmvId)
    const todos_afterDel = todosList.filter(obj => obj.id != rmvId)
    console.log(todos_afterDel)
    setTodos(todos_afterDel)
  }

  return (
    <div>
      <TodoContext.Provider value = {{addTodo,todosList,editTodo,modifyformId,removeTodo}} >
      <Header setEditName={setEditName} setEditDesc={setEditDesc} editName={editName} editDesc={editDesc}/>
      </TodoContext.Provider>
    </div>
  )
}

export default App