import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const account = () => {
  return (
    <View>
        <SafeAreaProvider>
          <Stack.Screen/> 
          
     
    </SafeAreaProvider>
    </View>
  )
}

export default account

