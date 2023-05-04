import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { z } from "zod";
import React, { useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { StatusBar } from "expo-status-bar";
import { CheckIcon, ScrollView, Select } from "native-base";
import { Avatar, Button, Icon } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";

const Form = ({
  setFormVisible,
}: {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  enum Country {
    Singapore = "Singapore",
    China = "China",
    HongKong = "Hong Kong",
  }
  const convertionValidator = z.object({
    company: z
      .string({ errorMap: () => ({ message: "Recipient Bank Required!" }) })
      .nonempty("Recipient's Name Required!"),
    bank: z
      .string({ errorMap: () => ({ message: "Bank Name Required!" }) })
      .nonempty("Recipient's Bank Required!"),
    swiftCode: z
      .string({ errorMap: () => ({ message: "Bank's Swift Code Required!" }) })
      .nonempty("Bank's Swift Code Required!"),
    account: z
      .string({ errorMap: () => ({ message: "Account Required!" }) })
      .nonempty("Account Required!"),
    country: z.nativeEnum(Country, {
      errorMap: () => ({
        message: "Select valid Country where the bank is located!",
      }),
    }),
  });
  type Values = z.infer<typeof convertionValidator>;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(convertionValidator),
  });
  const router = useRouter();
  const onSubmit = (data: Values) => {
    console.log(data);
  };

  return (
    
    <ScrollView className="flex-1">
    
  <SafeAreaView className="w-full flex justify-center items-center ">
  <View className="items-between flex w-full flex-col justify-between gap-y-5 p-5 max-w-md">
        <View
          className="flex  flex-row w-full items-center justify-between"
      
        >
          <Text className="text-xl">Recipient&apos;s Bank Details</Text>
          <TouchableOpacity className="rounded-full bg-red-600"     onPress={() => setFormVisible(false)}>
            <Icon
              name="close"
              type="simple-line-icons"
              size={28}
              color={"white"}
            />
          </TouchableOpacity>
        </View>

        <View className=" flex w-full items-start justify-between ">
          <Text className=" mb-2 text-slate-700">Recipient Company Name</Text>
          {errors.company && (
            <Text className=" mb-2 text-red-500">
              {" "}
              {errors.company.message}
            </Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                className= {`block w-full rounded-md border  px-4 py-3 ${errors.company? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
                value={value}
              />
            )}
            name="company"
          />
        </View>

        <View className=" flex w-full  items-start justify-between ">
          <Text className=" mb-2 text-slate-700">
            Recipient&apos;s Bank Name
          </Text>
          {errors.bank && (
            <Text className=" mb-2 text-red-500">{errors.bank.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                    className= {`block w-full rounded-md border  px-4 py-3 ${errors.bank? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
                value={value}
              />
            )}
            name="bank"
          />

          <View className=" mt-4 flex w-full items-start justify-between">
            <Text className=" mb-2 text-slate-700">
              Country where bank is located
            </Text>
            {errors.country && (
              <Text className=" mb-2 text-red-500">
                {errors.country.message}
              </Text>
            )}
            <Controller
              control={control}
              name="country"
              render={({ field: { onChange, value } }) => (
                <Select
                  selectedValue={value}
                  width="100%"
                  className="block w-full rounded-md border-gray-300  px-4 py-3 text-base"
                  accessibilityLabel="Choose Country"
                  placeholder="Choose Country"
                  _selectedItem={{
                    bg: "green.400",

                    endIcon: <CheckIcon size="25" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => onChange(itemValue)}
                >
                  <Select.Item label="China" value={Country.China} />
                  <Select.Item label="Singapore" value={Country.Singapore} />
                  <Select.Item label="Hong Kong" value={Country.HongKong} />
                </Select>
              )}
            />
          </View>
        </View>
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className=" flex w-full  items-start justify-between " keyboardVerticalOffset={Platform.OS==="ios"? -200: -100} >
          <Text className=" mb-2 text-slate-700">Banks&apos;s Swift Code</Text>
          {errors.swiftCode && (
            <Text className=" mb-2 text-red-500">
              {errors.swiftCode.message}
            </Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                    className= {`block w-full rounded-md border  px-4 py-3 ${errors.swiftCode? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
                value={value}
              />
            )}
            name="swiftCode"
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className=" flex w-full  items-start justify-between " keyboardVerticalOffset={Platform.OS==="ios"? -64: -32}>
          <Text className=" mb-2 text-slate-700">Account of Recipient</Text>
          {errors.account && (
            <Text className=" mb-2 text-red-500">{errors.account.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                    className= {`block w-full rounded-md border  px-4 py-3 ${errors.account? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
                value={value}
              />
            )}
            name="account"
          />
        </KeyboardAvoidingView>

        <View className="w-full">
          <TouchableOpacity
            className="my-2 flex w-full   items-center justify-center rounded-lg bg-green-400 px-4 py-3 shadow-xl"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-xl font-bold text-white">Add Recipient</Text>
          </TouchableOpacity>
        </View>
      </View>
  </SafeAreaView>

    </ScrollView>
  );
};

const Confirmation = () => {
  return (
    <ScrollView className="flex-1">
      <SafeAreaView className="flex w-full flex-col items-center justify-between  p-5">
        <View className=" my-5 w-full rounded-3xl bg-white py-3 shadow-lg shadow-green-400/100">
          <Text className="text-center text-xl">
            Hoo Lee Sheet Inc&apos;s Details
          </Text>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">Bank</Text>
            <Text className="text-end">China Bank</Text>
          </View>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">Country</Text>
            <Text className="text-end">China</Text>
          </View>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">Swift Code</Text>
            <Text className="text-end">123PS</Text>
          </View>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">Bank Account</Text>
            <Text className="text-end">1234567891011123</Text>
          </View>
        </View>
        <View className=" my-5 w-full rounded-3xl bg-white py-3 shadow-lg shadow-green-400/100">
          <Text className="text-center text-xl">Transfer Details Details</Text>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">The Recipient Gets:</Text>
            <Text className="text-end"> USD 10,000</Text>
          </View>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">You Send:</Text>
            <Text className="text-end">USD 1,357,000</Text>
          </View>
          <View className="flex w-full flex-row justify-between px-5 py-3">
            <Text className="text-start">Exchange Rate:</Text>
            <Text className="text-end"> 1 USD = 135.7 KES</Text>
          </View>
        </View>
        <View className="my-5 w-full">
          <TouchableOpacity className="my-2 flex w-full   items-center justify-center rounded-lg bg-green-400 px-4 py-3 shadow-xl">
            <Text className="text-xl font-bold text-white">Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};


const Index = () => {
  const data = [
    {
      id: "2",
      name: "Acorn Ltd",
      account: "1234 5678 9012 3456",
      bank: "China CITIC Bank",
      currency: "USD",
    },

    {
      id: "4",
      name: "Ho Lee Sheet Inc",
      account: "6225 8801 2345 6789",
      bank: "China Minsheng Bank",
      currency: "USD",
    },
  ];
  const router = useRouter();
  const params = useSearchParams();
  console.log(params);
  const [formVisible, setFormVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar />

      <View className="w-full  p-5 flex justify-center items-center ">
        <View className=" max-w-md w-full" >
        <View className="flex w-full flex-row items-center justify-between">
          <Text className="my-10 flex items-center  justify-center text-xl font-bold">
            Recipients
          </Text>
          <Button
            radius={"lg"}
            type="solid"
            className="flex flex-row gap-2"
            color={"#4ade80"}
            onPress={() => setFormVisible(true)}
          >
            
            <Icon name="plus" type="font-awesome" color={"white"} />
            {" "}
            Add
          </Button>
        </View>
        <View className="w-full">
          <FlatList
            className="flex w-full"
            data={data}
            renderItem={({ item }) => (
              <View className="my-3 flex w-full flex-row  items-center justify-between">
                <View className="flex w-8/12 flex-row  items-center gap-1">
                  <View className="w-1/4">
                    <Avatar
                      size={48}
                      rounded
                      icon={{ name: "user", type: "font-awesome" }}
                      containerStyle={{
                        backgroundColor: "#9700b9",
                      }}
                    />
                  </View>

                  <View className="flex">
                    <Text className="font-medium">
                      {item.name} {item.currency}
                    </Text>
                    <Text className="text-sm text-slate-600">
                      {" "}
                      {item.account}
                    </Text>
                  </View>
                </View>
                <View className="flex w-1/5">
                  <TouchableOpacity className="flex items-baseline justify-center   rounded-lg bg-green-400 py-1 shadow-xl shadow-green-400/100">
                    <Text className="mx-auto text-center text-sm text-white">
                      Send
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        <Modal
          visible={formVisible}
          animationType="slide"
          onRequestClose={() => setFormVisible(false)}
        >
          <Form setFormVisible={setFormVisible} />
        </Modal>
        <Modal
          visible={confirmationVisible}
          animationType="slide"
          onRequestClose={() => setConfirmationVisible(false)}
        >
          <Confirmation />
        </Modal>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
