import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'


const SetTimer = ({ navigation }) => {
    const [min, setMin] = useState(0)
    const [segOne, setSegOne] = useState(0)
    const [segTwo, setSegTwo] = useState(0)

    const [checkMin, setCheckMin] = useState(false)
    const [checkSegOne, setCheckSegOne] = useState(false)
    const [checkSegTwo, setCheckSegTwo] = useState(false)


useEffect(() => {
    setMin(0)
    setSegOne(0)
    setSegTwo(0)

    setCheckMin(true)
    setCheckSegOne(true)
    setCheckSegTwo(true)

}, [])

    const setterNumber = (e) => {

        if(checkMin){
            if(e > 5){
                Alert.alert('Atenção', 'Isso é um treino mesmo!')
            }
            setMin(e)
            setCheckMin(false)

        } else if (checkSegOne) {
            if (e <= 5){
                setSegOne(e)
                console.log(JSON.stringify(e))
                setCheckSegOne(false)
            } 
            
        } else if (checkSegTwo) {
            setSegTwo(e)
            console.log(JSON.stringify(e))
            setCheckSegTwo(false)

        }

    
    }

    const zeroAll = () => {
        setMin(0)
        setSegOne(0)
        setSegTwo(0)
    
        setCheckMin(true)
        setCheckSegOne(true)
        setCheckSegTwo(true)
    }
    const resetMin = () => {
        setMin(0)
        setCheckMin(true)
    }
    const resetSegOne = () => {
        setSegOne(0)
        setCheckSegOne(true)
    }
    const resetSegTwo = () => {
        setSegTwo(0)
        setCheckSegTwo(true)
    }
    

  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />

        <View style={styles.viewTextTitle}>
                <Text style={styles.title}>Defina o Intervalo</Text>
                <Text style={styles.title}>{JSON.stringify(checkMin)}</Text>
            

            <View style={styles.viewInput}>
                <View style={styles.displayNums}>
                    <TouchableOpacity style={styles.displayMin} onPress={resetMin}>
                    <Text style={styles.displayText}>
                        {min}
                    </Text>
                    <Text style={[styles.displayText, styles.displayTextMin]}>
                        m
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={resetSegOne}>
                        <Text style={[styles.displayText, styles.displayTextSeg]}>
                            {segOne}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.displayMin} onPress={resetSegTwo}>
                        <Text style={styles.displayText}>
                            {segTwo}
                        </Text>
                        <Text style={[styles.displayText, styles.displaySeg]}>
                            s
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewNumbers}>
                    <View>
                        <TouchableOpacity
                            onPress={() => setterNumber(1)}
                        >
                            <Text style={styles.numbers}>1</Text> 
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setterNumber(4)}
                        >
                            <Text style={styles.numbers}>4</Text> 
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setterNumber(7)}
                        >
                            <Text style={styles.numbers}>7</Text> 
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => setterNumber(2)}
                        >
                            <Text style={styles.numbers}>2</Text> 
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setterNumber(5)}
                        >
                            <Text style={styles.numbers}>5</Text>                        
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setterNumber(8)}
                        >
                            <Text style={styles.numbers}>8</Text>
                          
                        </TouchableOpacity> 
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => setterNumber(3)}
                        >
                            <Text style={styles.numbers}>3</Text> 

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setterNumber(6)}
                        >

                            <Text style={styles.numbers}>6</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setterNumber(9)}
                        >
                            <Text style={styles.numbers}>9</Text>                            
                        </TouchableOpacity>
                    </View>
                </View>

                    <View style={styles.numberZero}>
                         <TouchableOpacity
                            onPress={() => setterNumber(0)}
                        >
                            <Text style={styles.numbers}>0</Text>
                        </TouchableOpacity>
                    </View>

                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddTimer', { minOne: min })}
                    >
                        <Icon
                            name="play-arrow"
                            size={40}
                            color={Colors.greenDark}
                            style={styles.buttonClose}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={zeroAll}
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
        <TouchableOpacity onPress={() => navigation.navigate('AddTimer', {minOne: 0})}>
            <Image source={Logo} />
        </TouchableOpacity>
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
  displayText: {    
    color: Colors.white,
    fontSize: 60,
    fontFamily: 'sans-serif-thin', 
  },
  displayTextMin: {
    color: Colors.redDark,
  },
  displaySeg: {
    color: Colors.greenDark,
  },
  displayTextSeg: {
    marginLeft: 13,
    marginHorizontal: 2,
  },
  displayNums: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
    height: 100,
    borderRadius: 15,   
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.asphalt,
  },
  displayMin: {
      flexDirection: 'row',
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