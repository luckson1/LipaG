import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
  <Stack>
    <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addRecipient"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
               // Hide the header for all other routes.
               headerShown: false,
               
        }}
      />
  </Stack>
  )
}

export default _layout