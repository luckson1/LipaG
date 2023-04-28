import { View, Text, SafeAreaView, TouchableOpacity, FlatList, } from "react-native";
import React from "react";
import { Tabs, useRouter } from "expo-router";
import { Avatar, Icon } from '@rneui/themed';
import { TouchableHighlight } from "react-native";
import { StatusBar } from "expo-status-bar";

const Index = () => {
    const router=useRouter()
    const data= [
        {
            id:"1",
            name: "Jack Gathondu",
            type: "remit",
            currency: "KES",
            amount: 949900,
            date: "Sun Apr 23, 2023 17:18"
        },
        {
            id:"2",
            name: "Acorn Ltd",
            type: "send",
            currency: "USD",
            amount: 7000,
            date: "Sun Apr 23, 2023 17:18"
        },
        {
            id:"3",
            name: "Jack Gathondu",
            type: "remit",
            amount: 1357000,
            currency: "KES",
            date: "Sun Apr 23, 2023 17:18"
        },
        {
            id:"4",
            name: "Ho Lee Sheet Inc",
            type: "send",
            currency: "USD",
            amount: 1000000,
            date: "Sun Apr 23, 2023 17:18"
        }
    ]
  return (
    <SafeAreaView className="flex-1 ">
            <Tabs.Screen options={{headerShown:false}} /> 
        <StatusBar backgroundColor= "#4ade80"/>
   
      <View className="px-5 h-1/2 bg-green-400 pt-16 pb-7">
        <View className="flex flex-row justify-between items-start flex-1">
        <View className="h-fit w-3/4 flex flex-row flex-1 gap-1">
 <View className="w-1/4 ">
 <Avatar
    size={64}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
 </View>
  <View className="flex  h-fit w-3/4">
     
     <Text className=" text-white">
          Welcome Back
       </Text>
       <Text className="font-semibold text-xl  text-white">
           Jack
       </Text>
       <Text className="font-semibold text-xl  text-white">
           Gathondu
       </Text>
       
      
       
     </View>
  </View>

  <View className="flex flex-row gap-2 h-fit w-1/4">
  <TouchableHighlight className="flex-1 rounded-full" onPress={()=>router.push("/help")}>
  <Icon
         style={{padding:8, backgroundColor:"inherit", borderRadius:40}}
         
         name="question"
           color="white"
           type="simple-line-icon"
           />
  </TouchableHighlight>
  <TouchableHighlight className="flex-1 rounded-full" onPress={()=>router.push("/profile")}>  
           <Icon
         style={{padding:8, backgroundColor: "inherit", borderRadius:30}}
         
           name="gear"
           color="white"
           type="font-awesome"
           />
             </TouchableHighlight>
    </View>
   

        </View>
  
 
        <View className="w-fit justify-center flex gap-2 bg-inherit">
        <Text className="text-white text-center">Todays Exchange Rates</Text>
        <View className=" w-full h-32  shadow bg-slate-700 shadow-yellow-500/100 rounded-2xl p-5 justify-center items-center gap-3">
            <Text className="text-white tracking-widest font-bold text-lg"> 1 🇺🇸 USD {" "} {" "} = {" "} {" "} 135.7 🇰🇪 KES</Text>
            <Text className="text-white tracking-widest font-bold text-lg"> 1 🇨🇳 CNY {" "}{" "} = {" "} {" "} 20.5 🇰🇪 KES</Text>

        </View>
         
    </View>
      </View>
  
      <View className=" h-1/2 bg-white flex justify-center px-5 w-full">
        <View className="flex flex-row justify-between w-full">
            <Text className="text-xl font-semibold"> History</Text>
            <TouchableOpacity className="flex flex-row" onPress={()=>router.push("/transaction")}>
                <Text className="text text-sky-400">View All Transactions</Text>
                <Icon
         style={{padding:8, backgroundColor: "inherit", borderRadius:30, fontWeight:"bold"}}
         size={12}
         
           name="arrow-right"
           color= "#38bdf8"
           type="simple-line-icon"
           />
            </TouchableOpacity>

        </View>
       <View className="w-full">
       <FlatList className=" flex gap-3 mt-3 " data={data} renderItem={({item})=> (
            <View className="flex flex-row justify-between  my-3 ">
                <View className="w-8/12 flex flex-row gap-3">
                    <View className="w-1/4">
  {item.type==="send"?                   <Avatar
    size={48}
    rounded
    icon={{ name: "user", type: "font-awesome" }}
    containerStyle={{ backgroundColor: "#9700b9" , marginLeft:12}}
  />:                   <Avatar
  size={48}
  rounded
  icon={{ name: "user", type: "font-awesome" }}
  containerStyle={{ backgroundColor: "#4ade80" , marginLeft:12 }}
/>}

                    </View>
                 
<View className="flex">
    <Text className="font-medium">{item.name}</Text>
    <Text className="text-xs font-thin">{item.date}</Text>

</View>
                </View>
                <View className="w-1/5 flex"> 
                    <Text >{item.currency}</Text> 
                    <Text className={`${item.type==="send"? "text-red-400 font-bold": "text-green-600 font-bold"}`}>{item.amount.toLocaleString()}</Text>  
                </View>

            </View>
        ) }/>
       </View>
  
      
      </View>
    </SafeAreaView>
  );
};

export default Index;
