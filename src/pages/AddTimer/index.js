import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Switch, Vibration } from 'react-native'

import ReactNativeAN from 'react-native-alarm-notification' 
import BackgroundTimer from 'react-native-background-timer'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'

const AddTimer = ({ navigation }) => {
    const [enableAlarm, setEnableAlarm] = useState(false)
    const [isAlarm, setIsAlarm] = useState(false)
    const [enableModal, setEnableModal] = useState(false)
    const [enableNotify, setEnableNotify] = useState(false)
    const [notif, setNotif] = useState(false)
    const [play, setPlay] = useState(true)
    const [ids, setIds] = useState(0) 
    const [habil, setHabil] = useState(false) 

    const { min, segOne, segTwo } = navigation.state.params
    
    let segs = segOne.toString() + segTwo.toString()
    let segis = parseInt(segs)
    
    const [mins, setMins] = useState(min)
    const [isActiveMin, setActiveMin] = useState(false)
    
    const [seg, setSeg] = useState(segis)
    const [isActiveSeg, setActiveSeg] = useState(false)

    const [backSeg, setBackSeg] = useState(seg)
    const [backMin, setBackMin] = useState(mins)
    const [isActiveBack, setActiveBack] = useState(false)

    let minutes = mins * 60
    let seconds = segis * 1000
    let total = minutes + seconds

    const alarmNotifData = { 
      title: "Bora Bora",
      message: "Time to Work!!!",
      channel: "my_channel_id",
      small_icon: "ic_launcher",
  
        data: { foo: "bar" },
    }
    
    const toggleAlert = () => {
      setEnableAlarm(previousState => !previousState)
      setIsAlarm(!isAlarm)
      total = total + 1000
    }
    const toggleModal = () => {
      setEnableModal(previousState => !previousState)
    }
    const toggleNotify = () => {
      setEnableNotify(previousState => !previousState)
      setNotif(true)
    }

    const toggleSeg = () => {   
         
      if(!(mins === 0 && seg === 0)){
        
        if (notif) alarmOn()
        setHabil(true)

        setActiveSeg(!isActiveSeg)
        setActiveMin(!isActiveMin)
        setPlay(false)//ddddd

      } else {
        console.log('00000')
        setEnableAlarm(false)
        setIsAlarm(false)

      }
    }

    useEffect(() => {
      let interval = null;
      
      if (isActiveSeg) {
        interval = BackgroundTimer.setInterval(() => {
          if(seg > 0){
            setSeg(seg => seg - 1)
          }
          if (seg === 0){
            if(mins === 0){
              setPlay(true)
              isAlarm ? Vibration.vibrate(1000) : Vibration.cancel()
              setActiveBack(true)
              setIsAlarm(false)
              setEnableAlarm(false)
              BackgroundTimer.clearInterval(interval);

            } else {
              setMins(mins => mins - 1)
              setSeg(59)
            }
          }
        }, 1000);
      } else if (!isActiveSeg && seg !== 0) {
        BackgroundTimer.clearInterval(interval);
      } 

      return () => BackgroundTimer.clearInterval(interval);
    }, [isActiveSeg, seg])


    const zeroAll = () => {
      setMins(0)
      setSeg(0)

      setActiveMin(false)
      setActiveSeg(false)
      setPlay(true)
      setIsAlarm(false)
      setEnableAlarm(false)
      setNotif(false)
      setEnableNotify(false)

      if(notif) desliga() 
  
    }
    const alarmOn = async () => {
      const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + total));
      console.log(JSON.stringify(fireDate))
      const alarm = await ReactNativeAN.scheduleAlarm({ ...alarmNotifData, fire_date: fireDate }); 
      console.log('liga ', alarm.id)
      
      setIds(alarm.id)
      
      
    }

    const desliga = () => { 
      if(habil){
        ReactNativeAN.deleteAlarm(ids);
        ReactNativeAN.deleteRepeatingAlarm(ids);
        ReactNativeAN.stopAlarmSound();
        ReactNativeAN.removeAllFiredNotifications();
        console.log('desliga', ids)
      }
      
      setHabil(false)
      
    }

    const backCont = () => {
      setSeg(backSeg)
      setMins(backMin)

      setActiveSeg(false)
      setActiveMin(false)

      if(notif) desliga() 
      //toggleNotify()
      setPlay(true)
      if(ids !== 0) desliga() 
    }
    

  return (

    <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />
        <View style={styles.viewTextTitle}>
            <Text style={styles.title}>Intervalo de Recuperação</Text>
            <TouchableOpacity onPress={(toggleSeg)}>
              {/* <Text style={styles.title}>Timer: {mins}m:{seg === 0 ? '00' : seg <= 9 ? '0'.concat(seg) : seg}s</Text> */}
              <Text style={styles.title}>Back: {JSON.stringify(backMin)}: {JSON.stringify(backSeg)}</Text>
              {/* <Text style={styles.title}>Notif: {JSON.stringify(notif)}</Text> */}
            </TouchableOpacity>
        </View>

        <View style={styles.viewInput}>
            <Text style={styles.titleDescanso}>Descanso:</Text>

             {
               isActiveBack 
                ?
                  <View style={styles.displayBack}>
                    <TouchableOpacity onPress={backCont}>
                      <Icon
                            name="replay"
                            size={25}
                            color={Colors.greenDark}
                            // style={styles.buttonAddSize}
                        />
                    </TouchableOpacity>
                  </View>
                :
                  <View></View>               
             }

            <View style={styles.displayNums}>
                  <View style={styles.displayMin}>
                  <Text style={styles.displayText}>
                      {mins}
                  </Text>
                  <Text style={[styles.displayText, styles.displayTextMin]}>
                      m
                  </Text>
                  </View>
                  <View style={styles.displayMin}>
                      <Text style={styles.displayText}>
                          {seg === 0 ? '00' : seg <= 9 ? '0'.concat(seg) : seg}
                      </Text>
                      <Text style={[styles.displayText, styles.displaySeg]}>
                          s
                      </Text>
                  </View>
            </View>

        <View style={styles.buttonAdd} >
            <TouchableOpacity
                onPress={toggleSeg}
            >
            {
              play
                ? 
                <Icon
                    name="play-arrow" 
                    size={40}
                    color={Colors.blueDark}
                    style={styles.buttonClose}
                />
                :
                <Icon
                    name="pause" 
                    size={40}
                    color={Colors.blueDark}
                    style={styles.buttonClose}
                />
            }
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


        <View style={styles.viewButtons}>
            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Loading')}
            >
                <Text style={styles.title}>.....Add Timer.....</Text>
            </TouchableOpacity> */}

        <View style={styles.viewButtonSwitch} >

        <View>
            <Text style={styles.textButtonAlerta}>Notificação</Text>
            <Text style={styles.textButtonAlerta}>Vibrar alerta</Text>
            <Text style={styles.textButtonAlerta}>Alerta sobre a Tela</Text>
        </View>
        <View>
            <Switch
              style={styles.switchButton}
              trackColor={{ false: Colors.asphalt, true: Colors.asphalt }}
              thumbColor={enableNotify ? Colors.green : Colors.white}
              onValueChange={toggleNotify}
              value={enableNotify}
            />


            <Switch
              style={styles.switchButton}
              trackColor={{ false: Colors.asphalt, true: Colors.asphalt }}
              thumbColor={enableAlarm ? Colors.green : Colors.white}
              onValueChange={toggleAlert}
              value={enableAlarm}
            />

            <Switch
              style={styles.switchButton}
              trackColor={{ false: Colors.asphalt, true: Colors.asphalt }}
              thumbColor={enableModal ? Colors.green : Colors.white}
              onValueChange={toggleModal}
              value={enableModal}
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
    margin: 18,
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
    margin: 4,
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
  displayBack: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    marginLeft: 36,
    marginBottom: -30,
    zIndex: 1,   
  }
})

export default AddTimer