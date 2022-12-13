import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import ProfilScreen from '../screens/ProfilScreen'
import LoginScreen from '../screens/LoginScreen'
import MainList from '../screens/MainList'
import ResultRandom from '../screens/ResultRandom'
import Settings from '../screens/Settings'


const Stack = createNativeStackNavigator()

const screenOptions = {
    // headerStyle: {
    //     backgroundColor: "#9AC4F8",
    // },
    // headerTintColor: "white",
    // headerBackTitle: "Back",
    headerShown: false
}

const FindStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='homescreen' component={MainList} />
            <Stack.Screen name='profilscreen' component={ProfilScreen} />
        </Stack.Navigator>
    )
}


const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="homescreen">
            <Stack.Screen name='homescreen' component={HomeScreen} />
            <Stack.Screen name='result' component={ResultRandom} />
        </Stack.Navigator>
    )
}

const ProfilStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen name='login' component={LoginScreen} />
        </Stack.Navigator>
    )
}
const SettingsStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen name='settings' component={Settings} />
        </Stack.Navigator>
    )
}

export { MainStackNavigation, FindStackNavigation, SettingsStackNavigation }