import React, { useState } from 'react'
import { TodoDate,TodoText, colors, ListView, ListViewHidden, HiddenButton } from './appStyles'
import { View ,StyleSheet} from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { AntDesign } from '@expo/vector-icons'; 
import  AsyncStorage  from '@react-native-async-storage/async-storage';


const List = ({todo,setTodo,handleEdit}) => {
   const handleDeleteTodo = async(rowMap,rowKey)=>{
    const newTodo =[...todo];
    const todoIndex = todo.findIndex((todo)=>todo.key === rowKey);
    newTodo.splice(todoIndex, 1);
      try{
        await  AsyncStorage.setItem("storedTodo",JSON.stringify(newTodo)).then(()=>{
          setTodo(newTodo)
        })
      }   catch{(error)=>console.log(error)}
    }
  return (
      
    <SwipeListView
    data={todo}
    renderItem={(data,rowMap)=>{
        return(
            <ListView 
            onLongPress={()=>{console.log("pressed")}}
            >
                <>
                <TodoText>{data.item.title}</TodoText>
                <TodoText>₹ {data.item.date}</TodoText>
                <AntDesign name="edit" size={28} color="white" style={styles.edit_btn} onPress={()=>{handleEdit(data.item)}}/>
                <AntDesign name="delete" size={28} color="white" style={styles.delete_btn} onPress={()=>{handleDeleteTodo(rowMap,data.item.key)}}/>
                </>
            </ListView>
        )
    }}
    />
  )
}

export default List
const styles = StyleSheet.create({
  edit_btn: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  delete_btn: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
})