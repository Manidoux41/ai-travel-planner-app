import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();

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
                    marginTop: 10,
                }}
            >AI Travel Planner</Text>
            <Text
                style={{
                    fontSize: 17,
                    fontFamily: 'outfit',
                    textAlign: 'center',
                    color: Colors.GRAY,
                }}
            >Discover your next adventure effortlessly.Personalized itinaries at your fingertips. Travel smarter with AI driven insights.</Text>
            <TouchableOpacity 
                onPress={() => router.push('/auth/sign-in')} style={styles.button}>
                <Text
                    style={{ color: Colors.WHITE, textAlign: 'center', fontSize: 17, fontFamily: 'outfit' }}>Get started</Text>
            </TouchableOpacity>
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