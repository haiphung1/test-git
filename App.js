import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [name, setname] = useState('Hai Phung');
  const [person, setPerson] = useState({ name: 'Minh', age: '22'});
  const [people, setPeople] = useState([
    {title: 'title 1', key: '1'},
    {title: 'title 2', key: '2'},
    {title: 'title 3', key: '3'},
    {title: 'title 5', key: '4'},
    {title: 'title 6', key: '5'},
    {title: 'title 7', key: '6'},
    {title: 'title 8', key: '7'},
    {title: 'title 9', key: '8'},
    {title: 'title 10', key: '9'},
  ]);

  const clickHandler = () => {
    setname('Hoang');
    setPerson({ name: 'haha', age: '19'});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text>My name is {name}</Text>
        <Text>My name is {person.name} age: {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />  
        </View>
        <View style={styles.form}>
          <Text>Name: {name}</Text>
          <TextInput style={styles.input} placeholder='Name' 
            onChangeText={(val) => setname(val)} />
        </View>
        <FlatList
          keyExtractor={(item) => item.key}
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        />
        {/*
          {people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.title}</Text>
              </View>
            )
          })}
        */}
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#ff0000',
  },

  buttonContainer: {
    margin: 20
  },

  form: {
    margin: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    margin: 5,
    width: 200
  },

  item: {
    margin: 10,
    padding: 10,
    width: 100,
    backgroundColor: 'red',
    color: 'white'
  }
});
