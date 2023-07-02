import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.container}>
    <Text style={{color:'white',fontSize:20}}>Welcome my app</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'black'
        ,  alignItems: 'center',  justifyContent: 'center'
      },
})