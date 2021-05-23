import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import Colors from '../../styles/Colors'

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Loading')}
      >
        <Text style={styles.title}>Main</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackPearl,
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