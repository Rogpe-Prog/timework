import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Switch, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'

const AddTimer = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />
        <View style={styles.viewTextTitle}>
            <Text style={styles.title}>Intervalo de Recuperação</Text>
        </View>

        <View style={styles.viewInput}>
            <Text style={styles.titleDescanso}>Descanso:</Text>
            <Text style={styles.display}>00:45s</Text>

        <View style={styles.buttonAdd} >
            <TouchableOpacity
                onPress={() => Alert.alert('Alerta')}
            >
                <Icon
                    name="play-arrow"
                    size={50}
                    color={Colors.blueDark}
                    style={styles.buttonClose}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SetTimer')}
            >
                <Icon
                    name="add"
                    size={50}
                    color={Colors.greenDark}
                    style={styles.buttonClose}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Alert.alert('Alerta')}
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
  },
  buttonAddTitle: {
    margin: 10,
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
  buttonAdd: {
    flexDirection: 'row',
  },
  titleDescanso: {
    margin: 1,
    color: Colors.white,
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 70,
  },
  viewInput: {
    flex: 3,
    alignItems: 'center',
    marginTop: 20,
  },
  display: {
    fontSize: 60,
    borderColor: Colors.green,
    color: Colors.white,
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
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
})

export default AddTimer