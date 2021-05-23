import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet, StatusBar, SafeAreaView, Image } from "react-native"

import Colors from '../../styles/Colors'
import Logo from '../../assets/logo.png'

const Main = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout(() => {
            fadeIn()
        }, 100)
        // setTimeout(() => {
        //   navier()
        // }, 3000)
    }, [])

  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  }

  const navier = () => {
    navigation.navigate('Main')
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.blackPearl} />
        <Text style={styles.title}>Time Work</Text>
            <Animated.View
                style={[
                styles.fadingContainer,
                {
                    opacity: fadeAnim
                }
                ]}
            >
                <Image style={styles.image} source={Logo} />
            </Animated.View>
        <Text style={styles.title} onPress={()=> navigation.navigate('AddTimer')}>Cada segundo conta</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blackPearl,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: Colors.blackPearl,
  },
  image: {
    height: 350, 
    width: 350, 
    margin: -25, 
  },
  title: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: -25,
    marginTop: -10,
    zIndex: 1,
  },
});

export default Main;