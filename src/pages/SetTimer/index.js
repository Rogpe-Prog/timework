import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'


const SetTimer = ({navigation}) => {
    const [oneZero, setOneZero] = useState(true)
    const [minOne, setMinOne] = useState(0)
    const [minTwo, setMinTwo] = useState(0)
    const [segOne, setSegOne] = useState(0)
    const [segTwo, setSegTwo] = useState(0)
    const [disable, setDisable] = useState(false)

useEffect(() => {
    setMinOne(0)
    setMinTwo(0)
    setSegOne(0)
    setSegTwo(0)
    setDisable(true)
    setOneZero(false)
}, [])

    const disabledOneMin = () => {
        setDisable(flase)
    }

    const adjustMinOne = (e) => {
       minOne > 1 ? setMinOne(0) : setMinOne(0)
       setMinOne(e)
       Alert.alert(JSON.stringify(e))
    }

    const zeroAll = () => {
        setMinOne(0)
        setMinTwo(0)
        setSegOne(0)
        setSegTwo(0)
        disabledOneMin()
    }

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />

        <View style={styles.viewTextTitle}>
                <Text style={styles.title}>Defina o Intervalo</Text>
            

            <View style={styles.viewInput}>
                <Text style={styles.display}>{minOne}{minTwo}m {segOne}{segTwo}s</Text>

                <View style={styles.viewNumbers}>
                    <View>
                        <TouchableOpacity
                            //disabled={disable}
                            onPress={() => adjustMinOne(1)}
                        >
                            {
                                disable && oneZero 
                                    ? <Text style={styles.numbersDark}>0</Text> 
                                    : <Text style={styles.numbers}>1</Text>
                            }
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            
                        >
                            <Text style={styles.numbers}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbers}>7</Text>    
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            disabled={disable}
                        >
                            {
                                disable ? <Text style={styles.numbersDark}>0</Text> : <Text style={styles.numbers}>2</Text>
                            }
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={disable}
                        >
                            {
                                disable ? <Text style={styles.numbersDark}>0</Text> :  <Text style={styles.numbers}>5</Text>
                            }
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={disable}
                        >
                            {
                                disable ? <Text style={styles.numbersDark}>0</Text> :  <Text style={styles.numbers}>8</Text>
                            }
                            
                        </TouchableOpacity>
                       
                    </View>
                    <View>
                        <TouchableOpacity
                            disabled={disable}
                        >
                            {
                                disable ? <Text style={styles.numbersDark}>0</Text> : <Text style={styles.numbers}>3</Text>
                            }
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={disable}
                        >
                            {
                                disable ? <Text style={styles.numbersDark}>0</Text> : <Text style={styles.numbers}>6</Text>
                            }
                            
                        </TouchableOpacity>

                        <TouchableOpacity
                            disabled={disable}
                        >
                            {
                                disable ? <Text style={styles.numbersDark}>0</Text> : <Text style={styles.numbers}>9</Text>
                            }
                            
                        </TouchableOpacity>

                    </View>
                </View>
                    <View style={styles.numberZero}>
                        <TouchableOpacity
                            onPress={() => adjustMinOne(0)}
                        >
                            <Text style={styles.numbers}>0</Text>
                        </TouchableOpacity>
                    </View>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddTimer', { minOne: minOne })}
                    >
                        <Icon
                            name="play-arrow"
                            size={40}
                            color={Colors.greenDark}
                            style={styles.buttonClose}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Loading')}
                    >
                        <Icon
                            name="close"
                            size={40}
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
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'sans-serif-thin',
  },
  display: {
    fontSize: 60,
    color: Colors.white,
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginHorizontal: 30,
    fontFamily: 'sans-serif-thin',
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
      fontFamily: 'sans-serif-thin',
  },
  numbersDark: {
    fontSize: 40,
    color: Colors.blackPearl,
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