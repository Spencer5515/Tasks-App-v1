import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

Header.defaultProps = {
  title: "Spencer's Tasks List",
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: '#4b6fdc',
  },

  header: {
    height: 6,
    paddingTop: 55,
    backgroundColor: '#4b6fdc'
  },
  
  text: {
    paddingTop: 10,
    color: 'white', 
    fontSize: 23,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  }
});

export default Header;
