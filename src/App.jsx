import { createContext } from "react"
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"
import { useState } from "react";

export const TodoContext = createContext();

const App = () => {
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
  const addTodo = (name, desc, status) => {
    console.log("inside addTodo")
    const newTodo = {
      name,
      desc,
      status
    }

    setTodos([...todosList,newTodo])
  }

  const editTodo = () => {
    
  }

  const removeTodo = (name, desc) => {
    
  }

  return (
    <div>
      <TodoContext.Provider value = {{addTodo,todosList}} >
      <Header />
      <TodoList />
      </TodoContext.Provider>
    </div>
  )
}

export default App