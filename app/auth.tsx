import React from "react";
import { View, Text, TouchableOpacity, Image, Platform, TextInput, Pressable, SafeAreaView } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { z } from "zod";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const schema = z.object({
  email: z.string().email("Invalid email format").min(1).max(255),
  password: z.string().min(8).max(255),
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
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <ScrollView className="flex-1 p-5 bg-white ">
<SafeAreaView className="justify-center items-center flex w-full mt-16">
<View className="flex w-full items-center justify-center max-w-md">
   <Stack.Screen options={{headerShown: false}}/>
   <StatusBar />
      <Text className="mb-4 text-4xl font-bold">Hi 👋, Welcome</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            className= {`block  mt-4 w-full rounded-md border  px-4 py-3 ${errors.password? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
          />
        )}
      />
      {errors.email && (
        <Text className="mb-4 text-red-500">{errors.email.message}</Text>
      )}
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            className= {`block  mt-4 w-full rounded-md border  px-4 py-3 ${errors.password? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
          />
        )}
      />
      {errors.password && (
        <Text className="mb-4 text-red-500">{errors.password.message}</Text>
      )}
      <Button
        onPress={handleSubmit(onSubmit)}
        className="my-4 w-full bg-green-400 py-3"
       
      >
        <Text className="text-lg font-bold text-white">Log in</Text>
      </Button>
      <TouchableOpacity className=" px-4 py-3 w-full flex justify-center items-center mb-4">
        <View className="flex-row items-center w-full ">
        
          <Text className="text-lg font-medium text-sky-500 underline">
           Forgot Password?
          </Text>
        </View>
      </TouchableOpacity>
     <View className="w-full mt-12">
        <Text className="text-center text-xl w-full my-4">Or</Text>
     <TouchableOpacity className="rounded-lg border border-green-400 px-4 py-3 w-full flex justify-center items-center mb-4">
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
        <TouchableOpacity className="rounded-lg border border-green-400 px-4 py-3 w-full flex justify-center items-center mb-4">
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
    </SafeAreaView>
    </ScrollView>
  );
};
export default LoginScreen;