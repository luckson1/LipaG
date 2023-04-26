
import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from "@expo/vector-icons/FontAwesome";

const _layout = () => {
  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }
  return (
<Tabs >
<Tabs.Screen name='index'    options={{
          title: "Overview",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 } ,
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
        }} />
        <Tabs.Screen name='send'     options={{
          title: "Send",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
          tabBarIcon: ({ color}) => <TabBarIcon name="paper-plane" color={color}/>,
        }} />
          <Tabs.Screen name='recipients'     options={{
          title: "Recepients",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color}/>,
        }} />
       
         <Tabs.Screen name='account'     options={{
          title: "Account",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color}/>,
        }} />
          <Tabs.Screen name='help'     options={{
          title: "Help",
          headerTitleAlign: "center",
          headerTitleStyle:{ fontSize: 16 },
      tabBarActiveTintColor: "#86efac",
      tabBarInactiveTintColor: "#94a3b8",
          tabBarIcon: ({ color }) => <TabBarIcon name="question" color={color}/>,
        }} />

<StatusBar/>
</Tabs>
  )
}

export default _layout