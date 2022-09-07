import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    flex:1,
  },
    title:{
      fontSize: 20,  
      borderWidth: 10,   
      paddingVertical: 20,
      marginLeft:50, 
      //backgroundColor: 'red',
    }
});