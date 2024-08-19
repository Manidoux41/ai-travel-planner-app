import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image 
        source={require('../assets/images/login.jpg')} 
        style={{ width: '100%', height: 520 }}
       />
       <View style={styles.container}>
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center',
                }}
            >AI Travel Planner</Text>
            <Text
                style={{
                    fontSize: 17,
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    marginTop: 20,
                    color: Colors.GRAY,
                }}
            >Discover your next adventure effortlessly.Personalized itinaries at your fingertips. Travel smarter with AI driven insights.</Text>
            <View style={styles.button}>
                <Text
                    style={{ color: Colors.WHITE, textAlign: 'center', fontSize: 17, fontFamily: 'outfit', marginTop: -10 }}>Sign In with Google</Text>
            </View>
       </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25,
        height: '100%',
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '25%',
    }
})