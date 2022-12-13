import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { useThemeMode } from '@rneui/themed'
const Settings = () => {
    const { mode, setMode } = useThemeMode();
    return (
        <View>
            <Button onPress={() => setMode(mode == "dark" ? "light" : "dark")} title={mode}>Modu değiştir {mode} </Button>
        </View>
    )
}

export default Settings