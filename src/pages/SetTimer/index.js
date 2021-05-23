import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'

const SetTimer = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />

        <View style={styles.viewTextTitle}>
                <Text style={styles.title}>Defina o Intervalo</Text>
            

            <View style={styles.viewInput}>
                <Text style={styles.display}>00m 00s</Text>

                <View style={styles.viewNumbers}>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>7</Text>    
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>9</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    <View style={styles.numberZero}>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>0</Text>
                        </TouchableOpacity>
                    </View>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Loading')}
                    >
                        <Icon
                            name="play-arrow"
                            size={50}
                            color={Colors.greenDark}
                            style={styles.buttonClose}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddTimer')}
                    >
                        <Icon
                            name="close"
                            size={50}
                            color={Colors.redDark}
                            style={styles.buttonClose}
                        />
                    </TouchableOpacity>

                </View>    
                    

                
            </View>

        </View>

        <View style={styles.viewImage}>
            <Image source={Logo} />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackPearl,
    paddingTop: 20,
  }, 
  title: {
    color: Colors.white,
    fontSize: 26,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  display: {
    fontSize: 60,
    color: Colors.white,
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 30,
  },
  viewNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  numbers: {
      fontSize: 40,
      color: Colors.white,
      padding: 20,
  },
  numberZero: {
    alignItems: 'center',
  },
  viewImage: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})

export default SetTimer