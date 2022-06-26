import React, { useEffect, useState } from 'react'
import List from './List'
import Navbar from './Navbar'
import Add from './Add'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
const Home=({todo,setTodo}) =>{
    const [modelVisible, setModelVisible] = useState(false)
    const [todoInputValue,setTodoInputValue] = useState("")
    const [price,setPrice]=useState("")
    const [todoEdit,setTodoEdit] =useState(null)
    const [editPrice,setEditPrice]=useState(null)
    //handle addTodo
    const handleAddTodo =async(todos)=>{
        const newTodo = [...todo,todos];
          try{
            await AsyncStorage.setItem("storedTodo",JSON.stringify(newTodo)).then(()=>{
              setTodo(newTodo);
              setModelVisible(false);
            })
          }catch{(error)=>console.log(error)}
    }
    //edit ModelButton
    const handleEdit = (item)=>{
        setTodoEdit(item)
        setModelVisible(true)
       setTodoInputValue(item.title)
       setPrice(item.date)
     
    }
    const handleEditTodo=async (edited)=>{
        const newTodo = [...todo];
        const todoIndex = todo.findIndex((todos)=>todos.key===edited.key);
        newTodo.splice(todoIndex,1,edited);
          try{
            await AsyncStorage.setItem("storedTodo",JSON.stringify(newTodo)).then(()=>{
              setTodo(newTodo)
              setTodoEdit(null)
              setEditPrice(null)
              setModelVisible(false)
          })
          }catch{(error)=>console.log(error)}
        }
  return (
      <>
    <Navbar />
    <List 
    todo={todo}
    setTodo={setTodo}
    handleEdit={handleEdit}
    />
    <Add
    modelVisible={modelVisible}
    setModelVisible={setModelVisible}
    todoInputValue={todoInputValue}
    setTodoInputValue={setTodoInputValue}
    price={price}
    setTodoEdit={setTodoEdit}
    todoEdit={todoEdit}
    editPrice={editPrice}
    setEditPrice={setEditPrice}
    setPrice={setPrice}
    handleAddTodo={handleAddTodo}
    todo={todo}
    handleEditTodo={handleEditTodo}
    />
      </>
  )
}
export default Home
