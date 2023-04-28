import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
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
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
    bank: z.string({errorMap: ()=> ({message: 'Bank Name Required!'})}).nonempty("Recipient's Bank Required!"),
    swiftCode: z.string({errorMap: ()=> ({message:"Bank's Swift Code Required!"})}).nonempty("Bank's Swift Code Required!"),
    account: z.string({errorMap: ()=> ({message:"Account Required!"})}).nonempty("Account Required!"),
    country: z.nativeEnum(Country, {
      errorMap: () => ({
        message: "Select valid Country where the bank is located!",
      }),
    }),
  });
  type Values = z.infer<typeof convertionValidator>;
  const { handleSubmit, control, formState: {errors}} = useForm<Values>({
    resolver: zodResolver(convertionValidator),
  });
  const router = useRouter();
  const onSubmit = (data: Values) => {
    console.log(data);
  };


  return (
    <ScrollView className="flex-1">
      <SafeAreaView className="flex w-full flex-col items-center justify-between gap-3 p-5">
        <TouchableOpacity
          className="flex w-full items-end justify-center"
          onPress={() => setModalVisible(false)}
        >
          <View className="rounded-full bg-red-600">
            <Icon
              name="close"
              type="simple-line-icons"
              size={36}
              color={"white"}
            />
          </View>
        </TouchableOpacity>

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
                className="block w-full rounded-md border-2 border-gray-300 px-4 py-3  focus:border-green-500 focus:ring-green-500 "
                value={value}
              />
            )}
            name="company"
          />
        </View>

        <View className=" flex w-full  items-start justify-between ">
          <Text className=" mb-2 text-slate-700">Bank Name</Text>
          {errors.bank && (
            <Text className=" mb-2 text-red-500">{errors.bank.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                className="block w-full rounded-md border-2  border-gray-300 px-4 py-3  focus:border-green-500 focus:ring-green-500 "
                value={value}
              />
            )}
            name="bank"
          />

          <View className=" mt-4 flex w-full items-start justify-between">
            <Text className=" mb-2 text-slate-700">Country</Text>
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
                  className="block w-full rounded-md border-gray-300  px-4 py-3"
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
        <View className=" mt-7 flex  w-full items-start justify-between ">
          <Text className=" mb-2 text-slate-700">Swift Code</Text>
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
                className="block w-full rounded-md border-2  border-gray-300 px-4 py-3  focus:border-green-500 focus:ring-green-500 "
                value={value}
              />
            )}
            name="swiftCode"
          />
        </View>
        <View className=" flex w-full  items-start justify-between ">
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
                className="block w-full rounded-md border-2  border-gray-300 px-4 py-3  focus:border-green-500 focus:ring-green-500 "
                value={value}
              />
            )}
            name="account"
          />
        </View>

        <View className="w-full">
          <TouchableOpacity
            className="my-2 flex w-full   items-center justify-center rounded-lg bg-green-400 px-4 py-3 shadow-xl"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-xl font-bold text-white">Add Recipient</Text>
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar />

      <View className="w-full p-5">
        <View className="flex w-full flex-row items-center justify-between">
          <Text className="my-10 flex items-center  justify-center text-xl font-bold">
            Recipients
          </Text>
          <Button
            radius={"lg"}
            type="solid"
            className="flex flex-row gap-2"
            color={"#4ade80"}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="plus" type="font-awesome" color={"white"} />
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
                  <TouchableOpacity className="flex items-baseline justify-center   rounded-full bg-green-400 py-1 shadow-xl shadow-green-400/100">
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
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <Form setModalVisible={setModalVisible} />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Index;
