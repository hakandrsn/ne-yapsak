import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ProfilScreen = () => {
    return (
        <View style={styles.center}>
          <Text>This is the about screen</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
    });

export default ProfilScreen