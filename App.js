import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'

import Colors from './src/styles/Colors'
import Logo from './src/assets/logo.png'

const App = () => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.asphalt} />
      <Text style={styles.title}>Time Work</Text>
      <Image style={{height: 350, width: 350}} source={Logo} />
      <Text style={styles.title}>Cada segundo conta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.asphalt,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
  }
})

export default App
