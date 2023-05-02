import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Avatar, Icon } from "@rneui/themed";
import { FlatList, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Modal } from "react-native";

const data = [
  {
    id: "1",
    name: "Foo Fashion",
    status: "completed",
    currency: "CYN",
    amount: 9499,
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "2",
    name: "Acorn Ltd",
    status: "canceled",
    currency: "USD",
    amount: 7000,
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "3",
    name: "Yee Kung Fu Ltd",
    status: "pending",
    amount: 13570,
    currency: "USD",
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "4",
    name: "Ho Lee Sheet Inc",
    status: "sending",
    currency: "USD",
    amount: 10000,
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "5",
    name: "Foo Fashion",
    status: "completed",
    currency: "CYN",
    amount: 9500,
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "6",
    name: "Acorn Ltd",
    status: "completed",
    currency: "USD",
    amount: 7900,
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "7",
    name: "Yee Kung Fu Ltd",
    status: "sent",
    amount: 15000,
    currency: "USD",
    date: "Sun Apr 23, 2023 17:18",
  },
  {
    id: "8",
    name: "Ho Lee Sheet Inc",
    status: "sent",
    currency: "USD",
    amount: 10000,
    date: "Sun Apr 23, 2023 17:18",
  },
];

const PaymentMethod = ({
  setPaymentMethodVisible,
}: {
  setPaymentMethodVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ScrollView className="flex-1">
      <SafeAreaView className="flex w-full flex-col items-center justify-between  p-5">
        <View className="my-5 flex w-full  flex-row items-center justify-between">
          <Text className="text-xl">How do you want to pay?</Text>
          <TouchableOpacity
            className="rounded-full bg-slate-300"
            onPress={() => setPaymentMethodVisible(false)}
          >
            <Icon
              name="close"
              type="simple-line-icons"
              size={30}
              color={"red"}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className=" mt-5 flex w-full items-center justify-center rounded-xl bg-slate-200  py-5 shadow-lg shadow-green-400/100">
          <View className=" w-full">
            <Text className=" text-center text-xl">Mpesa</Text>
            <View className="flex w-full flex-row items-center justify-between">
              <View className="w-1/6">
                <Icon
                  name="mobile"
                  type="font-awesome"
                  size={64}
                  color={"#22c55e"}
                />
              </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600 ">
                  Send the money to our Pay Bill number. Suitable for amounts
                  less than Ksh. 140,000
                </Text>
              </View>

              <View className="w-1/6">
                <Icon
                  name="arrow-right"
                  type="material"
                  size={64}
                  color={"#4ade80"}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className=" mt-5 flex w-full items-center justify-center rounded-xl bg-slate-200  py-5 shadow-lg shadow-green-400/100">
          <View className="w-full">
            <Text className=" text-center text-xl">PesaLink</Text>
            <View className="flex w-full flex-row items-center justify-between">
              <View className="w-1/6">
                <Icon
                  name="mobile"
                  type="font-awesome"
                  size={64}
                  color={"#0ea5e9"}
                />
              </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600 ">
                  {" "}
                  Send the money to us using PesaLink. Suitable for amounts less
                  than Ksh. 1,000,000
                </Text>
              </View>
              <View className="w-1/6">
                <Icon
                  name="arrow-right"
                  type="simple-line-icons"
                  size={64}
                  color={"#4ade80"}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className=" mt-5 flex w-full items-center justify-center rounded-xl bg-slate-200  py-5 shadow-lg shadow-green-400/100">
          <View className="w-full">
            <Text className=" text-center text-xl">Manual Bank Transfer</Text>
            <View className="flex flex-row items-center justify-between">
              <View className="w-1/6">
                <Icon
                  name="account-balance"
                  type="material"
                  size={40}
                  color={"#9700b9"}
                />
              </View>
              <View className="w-2/3">
                <Text className="w-full leading-loose tracking-wide text-slate-600 ">
                  Manually send the money to ust using your Bank. Suitable for
                  amounts more than Ksh. 1,000,000
                </Text>
              </View>
              <View className="w-1/6">
                <Icon
                  name="arrow-right"
                  type="simple-line-icons"
                  size={64}
                  color={"#4ade80"}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const Transactions = () => {
  const [paymentMethodVisible, setPaymentMethodVisible] = useState(true);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar />
      <View className="w-full  p-5">
        <Text className="my-5 text-center text-xl font-bold">History</Text>
        <FlatList
          className=" mt-3 flex gap-3 "
          data={data}
          renderItem={({ item }) => (
            <View className="my-3 flex flex-row  justify-between ">
              <View className="flex w-8/12 flex-row gap-3">
                <View className="w-1/4">
                  <Avatar
                    size={48}
                    rounded
                    icon={{ name: "user", type: "font-awesome" }}
                    containerStyle={{
                      backgroundColor: "#4ade80",
                      marginLeft: 12,
                    }}
                  />
                </View>

                <View className="flex">
                  <Text className="font-medium">{item.name}</Text>
                  <Text
                    className={` ${
                      item.status === "canceled"
                        ? "text-red-400 "
                        : item.status === "completed"
                        ? "text-green-400"
                        : item.status === "sending"
                        ? "text-amber-600"
                        : "text-yellow-500"
                    }`}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
              <View className="flex w-1/5">
                <Text>{item.currency}</Text>
                <Text className="font-bold">
                  {item.amount.toLocaleString()}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <Modal
        visible={paymentMethodVisible}
        animationType="slide"
        onRequestClose={() => setPaymentMethodVisible(false)}
      >
        <PaymentMethod setPaymentMethodVisible={setPaymentMethodVisible} />
      </Modal>
      <View className="w-full p-5"></View>
    </SafeAreaView>
  );
};

export default Transactions;
