import { View, Text, SafeAreaView, } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../components/svgs/Header";

const index = () => {
  return (
    <SafeAreaView className="flex-1">
       <Stack.Screen options={{headerShown:false}} /> 
      <View className="p-5 h-1/3 bg-green-400 ">
        <Text className="mt-10">Hello</Text>
      
      </View>
  
      <View className=" h-2/3 bg-slate-50 flex">
      <View className="h-1/4 rotate-180 ">
<Header />
</View>
      <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
