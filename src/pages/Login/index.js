import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native'

const dimensions = Dimensions.get('window')
const logoHeight = Math.round((dimensions.width * 2.5) / 14)
const logowidth = Math.round(dimensions.width)

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';



export const Login = () => {
    const [eyePass, setEyePass] = useState('eye')
    const [showPass, setShowPass] = useState(true)

    function showPassAct() {
        setEyePass('eye-slash')
        setShowPass(false)

        if (showPass === false) {
            setEyePass('eye')
            setShowPass(true)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <SafeAreaView style={global.container}>
                <StatusBar style="light" />


                <KeyboardAvoidingView behavior={Platform.OS==='ios'? 'padding' : 'height'}>


                    <View style={global.logo}>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={{ width: logowidth, height: logoHeight }}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={global.content}>
                        <Input
                            style={main.input}
                            placeholderTextColor="#ddd"
                            placeholder='Nome de usuário'
                            leftIconContainerStyle={main.iconLeft}
                            leftIcon={{ type: 'font-awesome', name: 'user', color: "#ddd", }}
                        />
                        <Input
                            style={main.input}
                            placeholderTextColor="#ddd"
                            placeholder='Senha de acesso'
                            leftIconContainerStyle={main.iconLeft}
                            secureTextEntry={showPass}
                            leftIcon={{
                                type: 'font-awesome',
                                name: 'lock',
                                color: "#ddd",
                            }}

                            rightIcon={{
                                type: 'font-awesome',
                                name: eyePass,
                                color: "#ddd",
                                onPress: showPassAct
                            }}
                        />
                        <Button

                            buttonStyle={main.buttonContent}
                            titleStyle={main.buttonTitle}
                            title="Entrar"
                        />

                        <View>
                        <Text style={{fontSize: 17,textAlign: 'center',marginTop: 15,color: '#d3d3ff'}}>
                            Esqueceu a senha ?
                        </Text>
                        </View>
                    </View>


                </KeyboardAvoidingView>



            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const global = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: "#6900ea"
    },

    content: {
        marginTop: 25,
        marginHorizontal: 15,
    },
    logo:{
        alignItems: 'center'
    }
})

const main = StyleSheet.create({
    input: {
        fontSize: 20,
        color: '#ddd'
    },
    iconLeft: {
        marginRight: 10,
    },
    buttonContent: {
        backgroundColor: '#ffae00',
        padding: 10
    },
    buttonTitle: {
        fontSize: 20,
        color: '#000'
    }
})