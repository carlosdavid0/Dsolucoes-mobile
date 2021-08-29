import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Avatar,Badge } from 'react-native-elements'

export const Home = () => {
    return (
        <SafeAreaView style={global.container}>
            <StatusBar style="light" />

            <View style={global.content}>
                <View style={global.header}>
                    <View>
                        <Avatar
                            rounded
                            source={{
                                uri: 'https://avatars.githubusercontent.com/u/58746461?v=4',
                            }}
                            size="medium"
                        />

                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        />
                    </View>

                    <View style={global.headerText}>
                        <Text style={global.title}>Olá Carlos David</Text>
                        <Text style={global.subtitle}>Aproveite nossas serviços abaixo</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6900ea"
    },
    content: {
        marginLeft: 15,
        marginTop: getStatusBarHeight() * 2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    headerText: {
        marginLeft: 10,
    },
    title: {
        color: '#ddd',
        fontSize: 22
    },
    subtitle: {
        color: '#ffae00',
        fontSize: 15
    }

})