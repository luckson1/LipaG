import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, SafeAreaView, Pressable } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import { z } from "zod";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CheckBox } from "@rneui/themed";

const schema = z.object({
  phoneNumber:z.string()
 
});

type FormData = z.infer<typeof schema>;

const LoginScreen = () => {
  const textInput = useRef<TextInput>(null);
  useEffect(() => {
    textInput.current?.focus();
  
  }, []);
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
router.push(`/verification?number=${data.phoneNumber}`)
  };
const [isAgreed, setIsAgreed]=useState(true)
  return (


<SafeAreaView className="w-screen h-screen bg-white flex-1">
<Stack.Screen options={{headerShown: false}}/>
   <StatusBar />
<View className="flex justify-center items-center p-5 w-full h-full flex-[80%]">
<View className="flex w-full  max-w-md  rounded-lg">
  
      <Text className="my-10 text-4xl font-bold text-slate-700">Hi 👋, Welcome</Text>
     
      <Text className="text-lg text-slate-700">Login or sign up with your phone</Text>
      <View className= {`my-5 flex h-fit w-full flex-row  items-center justify-start px-5 k border-b  focus:border-green-500 focus:ring-green-500 ${errors.phoneNumber? "border border-red-500" : ""}`}>
      <Text className=" text-slate-400 text-xl">+254</Text>
      <Controller
        control={control}
        name="phoneNumber"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
         ref={textInput}
            autoCapitalize="none"
            keyboardType="phone-pad"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            className=" block w-full rounded-md    px-1  py-3 text-xl"
          />
        )}
      />
      </View>
    
      {errors.phoneNumber && (
        <Text className="mb-4 text-red-500">{errors.phoneNumber.message}</Text>
      )}
  
  <View className="flex flex-row w-full my-10 gap-x-3 justify-center items-center">
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
    </View>

</View>
<View className="flex-[20%] w-full p-5 flex justify-center items-center">
<Pressable
android_ripple={{color:"#4ade80", radius:40}}
      disabled={!isAgreed}
        onPress={handleSubmit(onSubmit)}
        className={` rounded-lg flex-row px-4 py-3 w-full flex justify-around items-center mb-4 absolute bottom-10 ${isAgreed? " bg-green-400 ": "bg-slate-200" }`}>
     
        <Text className= {`${isAgreed? "text-lg font-bold text-gray-50": "text-lg font-bold text-gray-500"}`}>Let me in</Text>
      </Pressable>

</View>
    </SafeAreaView>

  );
};
export default LoginScreen;