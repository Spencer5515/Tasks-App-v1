import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Temp Task'},
  ]);

  const loadItems = async () => {
    try {
      const getTasks = await AsyncStorage.getItem('tasks');
      JSON.parse(getTasks);
    } // try 
    catch (error) {
      Alert.alert('application Error',
        'Cannot load saved data.',
        [{text: "OK", onPress: () => console.log("OK Pressed")}],
        {cancelable: true});
    } // catch
  };

  const addItem = async (text) => {
    if (!text) { // if nothing is entered
      Alert.alert('Error',
        'Please enter a task or todo item.',
        [{text: "OK", onPress: () => console.log("OK Pressed")}],
        {cancelable: true});
    } // if
    else {
      let tempID = Math.random();
      setItems(prevItems => {
        return [{id: tempID, text},...prevItems];
      });
      
      AsyncStorage.setItem('tasks', JSON.stringify(text));

      // --- Debug ---
      // Alert.alert('Good', 
      //   'Item added.',
      //   [{text: "OK", onPress: () => console.log("OK Pressed")}],
      //   {cancelable: true});
    } // else
  };

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container} loadItems={loadItems}>
      <Header title={"Spencer's Tasks List"}/>
      <View style={styles.itemContainter}>
        <AddItem addItem={addItem} />
      </View>
      <View style={styles.innerContainer}>
        <FlatList 
          data={items}
          renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 0,
    backgroundColor: '#e8eaed',
  },

  itemContainter: {
    paddingTop: 80,
  },

  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default App;
