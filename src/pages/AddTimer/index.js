import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Switch, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'

const AddTimer = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [minTimer, setMinTimer] = useState(0)

    const { min, segOne, segTwo } = navigation.state.params

    const timerMin = () => {
      // setInterval(() => {
      //   setMinTimer(minTimer + 1)
      // }, 1000);
    }

  return (

    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />
        <View style={styles.viewTextTitle}>
            <Text style={styles.title}>Intervalo de Recuperação</Text>
            <TouchableOpacity onPress={()=> timerMin()}>
              <Text style={styles.title}>Timer: {minTimer}</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.viewInput}>
            <Text style={styles.titleDescanso}>Descanso:</Text>

            <View style={styles.displayNums}>
                  <TouchableOpacity style={styles.displayMin}>
                  <Text style={styles.displayText}>
                      {min}
                  </Text>
                  <Text style={[styles.displayText, styles.displayTextMin]}>
                      m
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={[styles.displayText, styles.displayTextSeg]}>
                          {segOne}
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.displayMin}>
                      <Text style={styles.displayText}>
                          {segTwo}
                      </Text>
                      <Text style={[styles.displayText, styles.displaySeg]}>
                          s
                      </Text>
                  </TouchableOpacity>
              </View>

        <View style={styles.buttonAdd} >
            <TouchableOpacity
                onPress={() => Alert.alert('Alerta')}
            >
                <Icon
                    name="play-arrow"
                    //name="pause"
                    size={40}
                    color={Colors.blueDark}
                    style={styles.buttonClose}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SetTimer')}
            >
                <Icon
                    name="add"
                    size={40}
                    color={Colors.greenDark}
                    style={styles.buttonAddSize}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Alert.alert('Alerta')}
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


        <View style={styles.viewButtons}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Loading')}
            >
                <Text style={styles.title}>.....Add Timer.....</Text>
            </TouchableOpacity>

        <View style={styles.viewButtonSwitch} >

        <View>
            <Text style={styles.textButtonAlerta}>Alerta sobre a Tela</Text>
            <Text style={styles.textButtonAlerta}>Alarme</Text>
        </View>
        <View>
            <Switch
                style={styles.switchButton}
                trackColor={{ false: Colors.asphalt, true: Colors.asphalt }}
                thumbColor={isEnabled ? Colors.green : Colors.white}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Switch
                style={styles.switchButton}
                trackColor={{ false: Colors.asphalt, true: Colors.asphalt }}
                thumbColor={isEnabled ? Colors.green : Colors.white}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
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
  }, 
  viewTextTitle: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    margin: 10,
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  buttonAddTitle: {
    margin: 10,
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  buttonAdd: {
    flexDirection: 'row',
  },
  titleDescanso: {
    margin: 1,
    color: Colors.white,
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontFamily: 'sans-serif-thin',
  },
  viewInput: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
  },
  viewButtons: {
    flex: 2,
    alignItems: 'center',
    marginTop: -35,
  },
  viewImage: {
    flex: 1,
    alignItems: 'flex-start'
  },
  textButtonAlerta: {
    color: Colors.white,
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  viewButtonSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchButton: {
      marginHorizontal: 20,
      marginBottom: 15,
  },
  buttonClose: {
    marginHorizontal: 10,
  },
  buttonAddSize: {
    marginHorizontal: 25,
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
  displayText: {    
    color: Colors.white,
    fontSize: 60,
    fontFamily: 'sans-serif-thin', 
  },
  displayTextMin: {
    color: Colors.redDark,
    marginHorizontal: 3,
    marginRight: 8,
  },
  displayTextSeg: {
    marginHorizontal: 2,
  },
})

export default AddTimer