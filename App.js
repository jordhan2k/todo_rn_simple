
import React , { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';
// import { SandBox } from './components/SandBox';


export default function App() {
  const [tasks, setTasks] = useState([
  {'key': '1',
    'text' : 'SS2 midterm'
  },
  {'key': '2',
  'text' : 'SS2 midterm'
  },
  {'key': '3',
  'text' : 'SS2 midterm'
  },




  ]);

  const onBtnPress = (id) => {

    console.log(id);

    setTasks((preTasks) => {
      return preTasks.filter((task) => task.key != id);
    })
  }

  const addTodo = (text) => {
    Keyboard.dismiss();
    if (text.length>3){
      setTasks((prevTasks) => {
        return [
          
            ...prevTasks,
            {'key' : Math.random().toString(),
            'text' : text}
        ]
  
      })


    } else {
      Alert.alert('OOPS', 'Input at least 3 characters!', [
        {text: 'Understood', onPress : ()=> console.log('alert closed')}
      ])
    }
    

  }


  return (
    // <SandBox></SandBox>


    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}> 
    <View style={styles.container}>
     {/* HEADER */}

     <Header ></Header>
     <View style={styles.content}>
      {/* TO FORM */}
      <AddTodo addTodoHandler = {addTodo}/>
      <View style={styles.list}>

       

        <FlatList data={tasks} keyExtractor={(item) => item.key} renderItem={({item}) => (
            //  <TouchableOpacity style={styles.listItem} onPress={() => onBtnPress(item.key)}>
        //      <Text >{item.text}</Text>
        //  </TouchableOpacity>
        <TodoItem item={item} pressHandler = {onBtnPress}/>
        )}/>
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content : {
    padding: 40,
    flex: 1

  },
  list:{
    flex: 1,
    marginTop: 40
  },

  listItem : {
    width : '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding:  10,
    borderRadius: 5
  }
});
