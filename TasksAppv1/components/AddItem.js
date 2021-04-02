import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = async (textVal) => {
        try {
            setText(textVal);
            await AsyncStorage.setItem(text, textVal);
        } // try
        catch (err) {
            console.log(err);
        } // catch
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Add Item..." 
                style={styles.input} 
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
               <Text style={styles.btnText}><Icon style={styles.iconStyle} name="plus" size={30}/></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 60,
        backgroundColor: 'white',
        width: 250,
    },

    btn: {
        width: 60,
        height: 60,
        backgroundColor: '#4b6fdc',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        paddingHorizontal: 20,
    },

    iconStyle: {
        color: 'white',
    },
});

export default AddItem;
