import { createContext, useContext, useRef } from "react"
import Header from "./Components/Header"
import TodoList, { TodoListContext } from "./Components/TodoList"
import { useState } from "react";
// import { TodoListContext } from "./Components/TodoList";

export const TodoContext = createContext();


const App = () => {
  const {reLoadTodoList} = useContext(TodoListContext)
  const [editName,setEditName] = useState("")
  const [editDesc,setEditDesc] = useState("")
  const [formId,setformId] = useState(0)
  // const [statFormId,setStatFormId] = useState(0)
  const [todoStat,setTodoStat] = useState("")
  // const {todoStat,statFormId} = useContext(TodoListContext)
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
            editTodo(id_val,editName,editDesc,status)
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
  const editTodo = (id,name,desc,status) => {
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

  const updateTodoStatus = (id,status) => {
    // setStatFormId(id)
    // setTodoStat(status)

    // const todoStatChng = todosList.map(obj => {
    //   console.log("Verifying Todo ID: ", obj.id, "&statFormId:", statFormId)
    // })
    //   if(obj.id == statFormId){
    //       console.log("Verifying STATUS change in TODO: ",
    //       statFormId,"----",todoStat)
    //     return {...obj, status:todoStat}
    //   }
    //   return obj
    // })
    // console.log("on TODO STATUS Change: ", todoStatChng)
    // // updateTodoStatus(todoStatChng)

    // setTodos(statTodo)
  }

  const removeTodo = (rmvId) => {
    // console.log("Inside DEL/REMOVE : ",rmvId)
    const todos_afterDel = todosList.filter(obj => obj.id != rmvId)
    console.log(todos_afterDel)
    setTodos(todos_afterDel)
  }

  return (
    <div>
      <TodoContext.Provider value = {{addTodo,todosList,editTodo,modifyformId,removeTodo,updateTodoStatus,
        setEditName,setEditDesc,editName,editDesc}} > {/*,statFormId,todoStat */}
      {/* <Header setEditName={setEditName} setEditDesc={setEditDesc} editName={editName} editDesc={editDesc}/> */}
      <Header />
      </TodoContext.Provider>
    </div>
  )
}

export default App