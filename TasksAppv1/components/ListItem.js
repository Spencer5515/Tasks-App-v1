import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconMI from 'react-native-vector-icons/MaterialIcons';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <IconMI 
          style={styles.tasksIcon}
          name="location-on"
          size={20}
          color="royalblue" 
        />
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
      <IconFA 
        style={styles.trash}
        name="trash" 
        size={20} 
        color="dimgray" 
        onPress={() => deleteItem(item.id)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
      borderBottomWidth: 1,
      borderColor: '#eee',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },

    listItemView: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },

    listItemText: {
      fontSize: 18,
      maxWidth: '80%',
    },

    trash: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    tasksIcon: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginRight: 15,
    },
});

export default ListItem;
