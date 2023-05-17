import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform, TextInput, SafeAreaView } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {  Button, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { z } from "zod";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CheckBox } from "@rneui/themed";

const schema = z.object({
  phoneNumber:z.string()
 
});

type FormData = z.infer<typeof schema>;

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: "",
    
    },
  });
const router=useRouter()
  const onSubmit = (data: FormData) => {
router.push(`/otp?number=${data.phoneNumber}`)
  };
const [isAgreed, setIsAgreed]=useState(false)
  return (
    <ScrollView className="flex-1  bg-white ">
       <Stack.Screen options={{headerShown: false}}/>
   <StatusBar />
<SafeAreaView className="justify-center items-center flex w-full mt-16">
<View className="flex justify-center items-center p-5 w-full h-full ">
<View className="flex w-full items-center justify-center max-w-md  rounded-lg">
  
      <Text className="my-4 text-4xl font-bold">Hi 👋, Welcome</Text>
      <Text>Verify your phone number to login or sigh up</Text>
      <Controller
        control={control}
        name="phoneNumber"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
         
            autoCapitalize="none"
            keyboardType="phone-pad"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            className= {`block  my-4 w-full rounded-md border  px-4 py-3 ${errors.phoneNumber? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
          />
        )}
      />
      {errors.phoneNumber && (
        <Text className="mb-4 text-red-500">{errors.phoneNumber.message}</Text>
      )}
     <View className="flex flex-row w-full mb-10  mt-5 gap-x-3 justify-center items-center">
          <CheckBox
                  className="bg-inherit"
                  checked={isAgreed}     
                  onPress={() => setIsAgreed(prev=> !prev) }
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                  checkedColor="#4ade80"
                />
            <Text className=" text-slate-700">By checking this box, I agree to the terms ans conditions of the application</Text>

          </View>
      <Button
      disabled={!isAgreed}
        onPress={handleSubmit(onSubmit)}
        className={`my-4 w-full py-3 ${isAgreed ? " bg-green-400 " : " bg-slate-200"} `}
       
      >
        <Text className="text-lg font-bold text-gray-500">Log in</Text>
      </Button>
      <TouchableOpacity className=" px-4 py-3 w-full flex justify-center items-center">
        {/* <View className="flex-row items-center justify-between w-full ">
        
          <Text className=" font-medium text-sky-500 underline">
           Forgot Password?
          </Text>
          <Text className=" font-medium text-sky-500 underline">
          Not registered? Sign up
          </Text>
        </View> */}
      </TouchableOpacity>
     <View className="w-full ">
        <Text className="text-center text-xl w-full mb-3">OR</Text>
        <TouchableOpacity   disabled={!isAgreed} className={` rounded-lg  px-4 py-3 w-full flex justify-center items-center mb-4 ${isAgreed? " border border-green-400 ": "bg-slate-200" }`}>
        <View className="flex-row items-center w-full ">
          <Icon
            name="google"
            size={24}
            color="#DB4437"
            style={{ marginRight: 16 }}
          />
          <Text className="text-lg font-medium text-gray-500">
            Login with Google
          </Text>
        </View>
      </TouchableOpacity>
      {(Platform.OS==="ios" && 
        <TouchableOpacity   disabled={!isAgreed} className={` rounded-lg  px-4 py-3 w-full flex justify-center items-center mb-4 ${isAgreed? " border border-green-400 ": "bg-slate-200" }`}>
          <View className="flex-row items-center w-full">
            <Icon
              name="apple"
              size={24}
              color="#000000"
              style={{ marginRight: 16 }}
            />
            <Text className="text-lg font-medium text-gray-500">
              Login with Apple
            </Text>
          </View>
        </TouchableOpacity>
      )}
         

     </View>
    </View>
</View>
    </SafeAreaView>
    </ScrollView>
  );
};
export default LoginScreen;