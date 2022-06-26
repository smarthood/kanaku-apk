import { View, Text,StyleSheet, Modal } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import {ModelButton,colors, ModalContainer, ModalView, ModalIcon, StyledInput, ModalActionGroup, ModalAction} from './appStyles'

const Add =({modelVisible,setModelVisible,todoInputValue,setTodoInputValue,handleAddTodo,todo,price,setPrice,todoEdit,setTodoEdit,editPrice,setEditPrice,handleEditTodo})=> {
    const handleSubmit=()=>{
        if(!todoEdit){
        handleAddTodo({
            title: todoInputValue,
            date: price,
            key: `${(todo[todo.length-1]&& parseInt(todo[todo.length -1].key)+1) || 1}`
        })}
        else{
            handleEditTodo({
                title: todoInputValue,
                date: price,
                key: todoEdit.key
            })
        }
        setTodoInputValue("")
        setPrice("")
    }
    const handleCloseModal =()=>{
        setModelVisible(false);
        setTodoInputValue('')
        setPrice("")
        setEditPrice(null)
        setTodoEdit(null)
    }
  return (
      <>
      <View style={styles.Add_btn} >
        <AntDesign name='plus' size={30} color={colors.primary} onPress={()=>{setModelVisible(true)}}/>
    </View>
    <Modal 
     animationType='slide'
     transparent={true}
     visible={modelVisible}
     onRequestClose={handleCloseModal}
    >
        <ModalContainer>
            <ModalView>
                <ModalIcon>
                    <AntDesign name="smileo" size={30} color={colors.tertiary} />
                </ModalIcon>
                <StyledInput
                style={styles.margin}
                placeholder='Add name'
                placeholderTextColor={colors.secondary}
                selectionColor={colors.secondary}
                onChangeText={(text)=>setTodoInputValue(text)}
                value={todoInputValue}
                onSubmitEditing={handleSubmit}
                />
                <StyledInput
                placeholder='Add amount'
                placeholderTextColor={colors.secondary}
                selectionColor={colors.secondary}
                onChangeText={(text)=>setPrice(text)}
                value={price}
                onSubmitEditing={handleSubmit}
                />
                <ModalActionGroup>
                    <ModalAction color={colors.primary} onPress={handleCloseModal}>
                        <AntDesign name='close' size={28} color='red' />
                    </ModalAction>
                    <ModalAction color={colors.primary} onPress={handleSubmit}>
                        <MaterialIcons name="done" size={28} color='green'/>
                    </ModalAction>
                </ModalActionGroup>
            </ModalView>
        </ModalContainer>
    </Modal>
    </>
  )
}
const styles = StyleSheet.create({
    Add_btn:{
        justifyContent:'center',
        alignItems: 'center',
        width: 50,
        height: 50,
       backgroundColor: 'tomato',
       borderRadius: 100,
       position: 'absolute',
       right: 15,
       bottom: 30
    },
    margin:{
        marginBottom: 15
    }
})
export default Add