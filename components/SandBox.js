import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

export const SandBox = () => {
    return (
     <View style={styles.constainer}>
    <Text style={styles.box1}>Box 1</Text>
     <Text style={styles.box2}>Box 2</Text>
     <Text style={styles.box3}>Box 3</Text>
     <Text style={styles.box4}>Box 4</Text>
     </View>
    )
}


const styles = StyleSheet.create({

    constainer: {
        paddingTop: 40,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center'
        // flex: 1
    },

    box1 : {
        backgroundColor: 'skyblue',
        padding: 10
    }
    ,
    box2 : {
        backgroundColor: 'pink',
        padding: 10
    },
    box3 : {
        backgroundColor: 'violet',
        padding: 10
    }, 
    box4 : {
        backgroundColor: 'coral',
        padding: 10
    }, 


});

