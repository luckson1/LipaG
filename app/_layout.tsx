import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { NativeBaseProvider } from 'native-base'

const _layout = () => {
  return (
    <NativeBaseProvider>
    <Stack>
      
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
   
    </Stack>
    </NativeBaseProvider>
  )
}

export default _layout