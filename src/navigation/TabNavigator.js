import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStackNavigation,FindStackNavigation } from './StackNavigation'


const Tab = createBottomTabNavigator()
const screenOptions = {
    // headerStyle: {
    //     backgroundColor: "#9AC4F8",
    // },
    // headerTintColor: "white",
    // headerBackTitle: "Back",
    headerShown:false
  }
  
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Hoome' component={MainStackNavigation} />
            <Tab.Screen name='Hepsi' component={FindStackNavigation} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator