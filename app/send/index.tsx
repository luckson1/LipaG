import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CheckBox } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = ({ currency }: { currency: number }) => {
  const regexPattern = /^[1-9][0-9]*$/;
  const convertionValidator = z.object({
    local: z.string().regex(regexPattern, { message: "Enter a Valid amount" }),
    foreign: z
      .string()
      .regex(regexPattern, { message: "Enter a Valid amount" }),
  });
  type Values = z.infer<typeof convertionValidator>;
  const { handleSubmit, control, formState } = useForm<Values>({
    resolver: zodResolver(convertionValidator),
  });
  const router = useRouter();
  const onSubmit = (data: Values) => {
    router.push(`recipients?local=${data.local}&foreign=${data.foreign}`);
  };

  const { errors } = formState;
  console.log(errors);
  return (
    <View className="my-5  flex  w-full flex-col  ">
      <Text className=" mb-2 text-slate-700">Recipient will receive:</Text>
      <View className=" flex w-full flex-row items-start justify-between ">
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            
          }) => (
            <TextInput
              onBlur={onBlur}
              keyboardType="numeric"
              onChange={onChange}
              className="mb-10 block w-2/3 rounded-md border-2 border-gray-300 px-4  py-3 focus:border-green-500 focus:ring-green-500"
              value={value}
            />
          )}
          name="foreign"
        />
        <View className="flex flex-row  items-center  justify-center rounded-lg bg-white  px-4 py-4 shadow-xl shadow-green-400/100">
          <Text className="text-slate-700">
            {currency === 0 ? "USD  🇺🇸" : "CNY  🇨🇳 "}{" "}
          </Text>
        </View>
      </View>
      <Text className=" mb-2 text-slate-700">You will send:</Text>
      <View className=" flex w-full flex-row items-start justify-between ">
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
           
          }) => (
            <TextInput
              keyboardType="numeric"
              onBlur={onBlur}
              onChange={onChange}
              className="mb-10 block w-2/3 rounded-md  border-2 border-gray-300 px-4  py-3 focus:border-green-500 focus:ring-green-500"
              value={value}
            />
          )}
          name="local"
        />
        <View className="flex flex-row  items-center  justify-center rounded-lg bg-white  px-4 py-4 shadow-xl shadow-green-400/100">
          <Text className="text-slate-700">KES 🇰🇪 </Text>
        </View>
      </View>

      <TouchableOpacity
        className="my-20 flex w-full   items-center justify-center rounded-lg bg-green-400 px-4 py-3 shadow-xl"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-xl font-bold text-white">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const Index = () => {
  const [currency, setCurrency] = React.useState(0);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />
      <Stack.Screen options={{ headerShown: false }} />

      <View className="w-full gap-10 p-7">
        <View className=" h-30  flex w-full">
          <Text className="text-center text-slate-700">
            Select the currency you want to send
          </Text>
          <View className="mt-5 flex  w-full flex-row  items-center justify-between">
            <TouchableOpacity onPress={() => setCurrency(0)}>
              <View className="flex flex-row items-baseline justify-center  gap-2 rounded-lg bg-white shadow-xl shadow-green-400/100">
                <Text>USD 🇺🇸</Text>
                <CheckBox
                  className="bg-inherit"
                  checked={currency === 0}
                  onPress={() => setCurrency(0)}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                  checkedColor="#4ade80"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrency(1)}>
              <View className="flex flex-row items-baseline justify-center  gap-2 rounded-lg bg-white shadow-xl shadow-green-400/100">
                <Text>CNY 🇨🇳 </Text>
                <CheckBox
                  className="text-slate-50"
                  checked={currency === 1}
                  onPress={() => setCurrency(1)}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                  checkedColor="#4ade80"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full">
          <Form currency={currency} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
