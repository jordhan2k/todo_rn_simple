import React, { useState } from 'react';
import { TextInput, View , StyleSheet, Button} from 'react-native';


export const AddTodo = ({addTodoHandler}) => {
    const [text, setText] = useState('');


    const textChangeHandler = (value) => {
        setText(value);

    }

    const onAddBtnPress = () => {

    }


    return (
        <View>
            <TextInput style={style.input} placeholder="Enter a todo" onChangeText={textChangeHandler}></TextInput>
            <Button title={'Add todo'} color={'coral'} onPress={() => addTodoHandler(text)}/>
        </View>
    )
}


const style = StyleSheet.create({
    input : {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10
    },


});