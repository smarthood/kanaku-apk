import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from './appStyles'
import Home from './Home';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';
import AppLoading from 'expo-app-loading'

export default function App() {
  const [ready,setReady] = useState(false);
  const initialstate = [];
const [todo,setTodo]= useState(initialstate);

  const LoadTodo = async () => {
    try {
    await  AsyncStorage.getItem("storedTodo").then(data=>{
    if(data !== null){
      setTodo(JSON.parse(data))
    }
  })
  }catch{(error)=>console.log(error)}
}

if(ready){
  return(
    <AppLoading 
    startAsync={LoadTodo}
    onFinish={()=>setReady(true)}
    onError={console.log(error)}
    />
  )
}
useEffect(() => {
  LoadTodo();
}, []);
  return (
            <Container>
              <Home todo={todo} setTodo={setTodo}/>
              <StatusBar style="dark" />
            </Container>
  );
}
