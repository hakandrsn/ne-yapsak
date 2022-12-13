import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import {FindStackNavigation,SettingsStackNavigation} from "./StackNavigation"
import TabNavigator from "./TabNavigator"

const Drawer = createDrawerNavigator()

const screenOptions = {
  headerStyle: {
      backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
}


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
        <Drawer.Screen name='Ne Yesek' component={TabNavigator} />
        <Drawer.Screen name='Listeler' component={FindStackNavigation} />
        <Drawer.Screen name='Ayarlar' component={SettingsStackNavigation} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation