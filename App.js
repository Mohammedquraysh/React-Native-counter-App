
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[number, setNumber] = useState(0)
  const[count, setCount] = useState(0)
  const[name, setName] = useState('')
  const addClick = ()=>{
    setNumber(number + 1)
  }
  return (
    <View style={styles.container}>
      <Text>The number is {number}</Text>
      <Button title='add' onPress={addClick}></Button>
      <Text>You clicked me {count} times</Text>
      <Button title='click me' onPress={()=>{setCount(count + 5)}}></Button>
      <Text>You clicked me {number} times</Text>
      <TextInput style={styles.textInput} placeholder="Enter your name" onChangeText={text=> setName(text)}/>
      <Text>my name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    margin: 20
  }
});
