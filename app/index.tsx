import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Tabs, useRouter } from "expo-router";
import { Avatar, Icon } from "@rneui/themed";
import { TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

const Index = () => {
  const router = useRouter();
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
  ];
  return (
    <SafeAreaView className="flex-1 ">
      <Tabs.Screen options={{ headerShown: false }} />
      <StatusBar backgroundColor="#4ade80" />

      <ScrollView className=" h-fit min-h-[250px] w-full bg-green-400 px-5 pb-7  pt-10">
        <View className="flex w-full items-center justify-center">
          <View className="flex w-full max-w-md flex-row items-start justify-between">
            <View className="flex w-3/4 flex-row gap-1 py-5">
              <View className="w-1/4 ">
                <Avatar
                  size={64}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
              </View>
              <View className="flex  h-fit w-3/4">
                <Text className=" text-white">Welcome Back</Text>
                <Text className="text-xl font-semibold  text-white">Jack</Text>
                <Text className="text-xl font-semibold  text-white">
                  Gathondu
                </Text>
              </View>
            </View>

            <View className="flex h-fit w-1/4 flex-row gap-2">
              <TouchableHighlight
                className="w-full flex-1 rounded-full "
                onPress={() => router.push("/help")}
              >
                <Icon
                  style={{
                    padding: 8,
                    backgroundColor: "inherit",
                  }}
                  name="help"
                  color="white"
                  type="material"
                  size={26}
                />
              </TouchableHighlight>
              <TouchableHighlight
                className="flex-1 rounded-full"
                onPress={() => router.push("/profile")}
              >
                <Icon
                  style={{
                    padding: 8,
                    backgroundColor: "inherit",
                    borderRadius: 30,
                  }}
                  name="gear"
                  color="white"
                  type="font-awesome"
                />
              </TouchableHighlight>
            </View>
          </View>

          <View className="flex w-fit max-w-md justify-center gap-2 bg-inherit">
            <Text className="text-center text-white">
              Todays Exchange Rates
            </Text>
            <View className=" h-32 w-full  items-center justify-center gap-3 rounded-2xl bg-slate-700 p-5 shadow shadow-yellow-500/100">
              <Text className="text-lg font-bold tracking-widest text-white">
                {" "}
                1 🇺🇸 USD = 135.7 🇰🇪 KES
              </Text>
              <Text className="text-lg font-bold tracking-widest text-white">
                {" "}
                1 🇨🇳 CNY = 20.5 🇰🇪 KES
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className=" flex w-full items-center justify-center bg-white px-5 py-5">
        <View className="flex w-full max-w-md flex-row justify-between">
          <Text className="text-xl font-semibold"> History</Text>
          <TouchableOpacity
            className="flex flex-row"
            onPress={() => router.push("/transactions")}
          >
            <Text className="text text-sky-400">View All Transactions</Text>
            <Icon
              style={{
                padding: 8,
                backgroundColor: "inherit",
                borderRadius: 30,
                fontWeight: "bold",
              }}
              size={12}
              name="arrow-right"
              color="#38bdf8"
              type="simple-line-icon"
            />
          </TouchableOpacity>
        </View>
        <View className="w-full max-w-md">
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
      </View>
    </SafeAreaView>
  );
};

export default Index;
