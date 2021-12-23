import React from 'react';
import { Text, TouchableOpacity , StyleSheet} from 'react-native';

export const TodoItem = ({item, pressHandler}) => {
    return (
        
            <TouchableOpacity style={styles.listItem} onPress={() => pressHandler(item.key)}>
            <Text >{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  
    content : {
      padding: 40
  
    },
    list:{
      marginTop: 40
    },
  
    listItem : {
      width : '100%', 
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      padding:  10,
      borderRadius: 5,
      borderStyle: 'dashed'
    }
  });
  