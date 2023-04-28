
import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from "native-base";

const _layout = () => {
  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }
  return (
    <NativeBaseProvider>
<Tabs >
<Tabs.Screen name='index'    options={{
          title: "Overview",
          tabBarButton: (props) => <TouchableOpacity {...props}/>,
          headerTitleAlign: "center",
          tabBarStyle: {backgroundColor: "#f8fafc"},
          headerTitleStyle:{ fontSize: 16 } ,
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
      tabBarLabelStyle: {fontSize: 12},
      
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
        }} />
        <Tabs.Screen name='send'     options={{
          title: "Send",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
          tabBarStyle: {backgroundColor: "#f8fafc"},
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
      tabBarLabelStyle: {fontSize: 12},
      tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ color}) => <TabBarIcon name="paper-plane" color={color}/>,
        }} />
          <Tabs.Screen name='recipients'     options={{
          title: "Recepients",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
          tabBarStyle: {backgroundColor: "#f8fafc"},
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
      tabBarLabelStyle: {fontSize: 12},
      tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color}/>,
        }} />
       
         <Tabs.Screen name='account'     options={{
          title: "Account",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
          tabBarStyle: {backgroundColor: "#f8fafc"},
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
      tabBarLabelStyle: {fontSize: 12},
      tabBarButton: (props) => <TouchableOpacity {...props} />,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color}/>,
        }} />
        


</Tabs>
</NativeBaseProvider>
  )
}

export default _layout