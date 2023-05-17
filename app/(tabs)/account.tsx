import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, ScrollView } from "native-base";
import { Avatar, Icon } from "@rneui/themed";

const account = () => {
  return (
   <ScrollView className="flex-1">
     <SafeAreaProvider className="flex w-full items-center justify-center bg-white h-full ">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex w-full max-w-md p-5 my-10">
      <View className="my-10  py-2 border-b border-slate-300">
              <Text className=" text-lg">You are using the service as</Text>
            </View>
        <View className="flex w-full flex-row items-center justify-center">
          <View className="flex h-fit w-3/4 flex-row gap-1 justify-center items-center">
           
            <View className="w-1/4 ">
              <Avatar
                size={64}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
            </View>
            <View className="flex   w-3/4">
              <Text className=" text-lg font-semibold">Jack Gathondu</Text>
            </View>
          </View>

          <View className="flex h-fit w-1/4 flex-row gap-2">
            <Button className="rounded-lg bg-green-600">Edit</Button>
          </View>
        </View>
        <View className="my-10  py-2 border-b border-slate-300">
              <Text className=" text-lg">General</Text>
            </View>
            <TouchableOpacity className=" mt-7 flex w-full items-center justify-center   p-2 ">
          <View className=" w-full">
       
            <View className="flex w-full flex-row items-center justify-between">
              <View className=" rounded-full bg-slate-300">
                <Icon
                  name="help"
                  type="material"
                  size={32}
                  color={'white'}
                />
              </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600  text-lg ">
                 Help
                </Text>
              </View>

              <View className=" w-1/6 rounded-full">
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  size={24}
                  color={"#4ade80"}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className=" mt-7 flex w-full items-center justify-center   p-2 ">
          <View className="w-full">
           
            <View className="flex w-full flex-row items-center justify-between">
            <View className="  h-10 w-10 rounded-full bg-slate-300 flex justify-center items-center">
                <Icon
                  name="user"
                  type="font-awesome"
                  size={24}
                  color={'white'}
                />
                </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600  text-lg ">
                  {" "}
            Personal Details
                </Text>
              </View>
              <View className="w-1/6">
                 <View className="rounded-full">
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  size={24}
                  color={"#4ade80"}
                />
              </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className=" mt-7 flex w-full items-center justify-center   p-2 ">
          <View className="w-full">
           
            <View className="flex w-full flex-row items-center justify-between">
            <View className="  h-10 w-10 rounded-full bg-slate-300 flex justify-center items-center">
                <Icon
                  name="shield"
                  type="font-awesome"
                  size={24}
                  color={'white'}
                />
                </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600  text-lg ">
                  Privacy and Security
                </Text>
              </View>
              <View className="w-1/6">
                 <View className="rounded-full">
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  size={24}
                  color={"#4ade80"}
                />
              </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className=" mt-7 flex w-full items-center justify-center   p-2 ">
          <View className="w-full">
           
            <View className="flex w-full flex-row items-center justify-between">
            <View className="  h-10 w-10 rounded-full bg-slate-300 flex justify-center items-center">
                <Icon
                  name="logout"
                  type="material"
                  size={24}
                  color={'white'}
                />
                </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600  text-lg ">
          Logout
                </Text>
              </View>
              <View className="w-1/6">
                 <View className="rounded-full">
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  size={24}
                  color={"#4ade80"}
                />
              </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className=" mt-7 flex w-full items-center justify-center   p-2 " >
          <View className="w-full">
          
            <View className="flex flex-row items-center justify-between">
            <View className="  h-10 w-10 rounded-full bg-slate-300 flex justify-center items-center">
                <Icon
                  name="settings"
                  type="material"
                  size={24}
                  color={'white'}
                />
                </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600  text-lg ">
                Settings
                </Text>
              </View>
              <View className="w-1/6">
                 <View className="rounded-full">
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  size={24}
                  color={"#4ade80"}
                />
              </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
   </ScrollView>
  );
};

export default account;
