import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors';

export default function SignIn() {

    const router = useRouter();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <View style={{padding: 25,paddingTop: 80, backgroundColor: Colors.WHITE, height: '100%'}}>
        <Text style= {{
            fontFamily: 'outfit-bold',
            fontSize: 30,
        }}>Let's sign you In</Text>
        <Text style= {{
            fontFamily: 'outfit',
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 20,
        }}>Welcome back</Text>
        <Text style= {{
            fontFamily: 'outfit',
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 10,
        }}>You've been missed</Text>
        {/* Email */}
        <View style={{marginTop: 50}}>
            <Text style={{fontFamily: 'outfit', fontSize: 17}}>Email</Text>
            <TextInput placeholder='Enter your email' style={styles.input} />
        </View>
        {/* Password */}
        <View style={{marginTop: 20}}>
            <Text style={{fontFamily: 'outfit', fontSize: 17}}>Password</Text>
            <TextInput placeholder='Enter your password' secureTextEntry={true} style={styles.input} />
        </View>

        {/* Sign In Button */}
        <View style= {{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 50,
        }}>
            <Text style= {{
                color: Colors.WHITE,
                textAlign: 'center',
            }}>Sign In</Text>
        </View>

        {/* Create account button */}
        <TouchableOpacity 
        onPress={() => router.replace('/auth/sign-up')}
        style= {{
            padding: 20,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1,
        }}>
            <Text style= {{
                color: Colors.PRIMARY,
                textAlign: 'center',
                
            }}>Create Account</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        fontFamily: 'outfit',
    }
})