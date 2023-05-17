import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Modal, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Clipboard from '@react-native-community/clipboard';
import OtpInputs from 'react-native-otp-inputs';

const Otp = () => {
    const [isResendDisabled, setIsResendDisabled]=useState(true)
    const [isShow, setIsShow]=useState(false)
    const params = useSearchParams();
    let phoneNumber= ""

   
    useEffect(()=> {
       
        
if(isResendDisabled) {
   setTimeout(() => {setIsResendDisabled(false);  console.log('hi')},  60000);

}

    }, [isResendDisabled])
    if (params && typeof params?.number==="string" )  phoneNumber=params?.number
    const [otpCode, setOtpCode] = useState(['']);
    const handleOtpInputChange = (index:number, text:string) => {
        const updatedOtpCode = [...otpCode];
        updatedOtpCode[index] = text;
        setOtpCode(updatedOtpCode);
      };
      // const handlePasteFromClipboard = async () => {
      //   const clipboardContent =  await Clipboard.getString()
      //   // const formattedOTP = clipboardContent.slice(0, 6); // Adjust the slice length based on your OTP length
      //   // setOtpCode([...formattedOTP]);
      //   setIsShow(false)
      // };
  return (
    <ScrollView className="flex-1  bg-white ">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar />
      <SafeAreaView className="flex w-full items-center justify-center">
        <View className="flex h-full w-full items-center justify-center p-5 mt-16">
            <Text className="text-2xl font-semibold text-slate-700 my-5">Confirm your phone Number</Text>
            <Text className="mb-5">Please enter the code we have sent to {phoneNumber}</Text>
            <View  className="w-full h-20">
            <OtpInputs
            
            autofillFromClipboard={false}
           inputStyles={{width: 40, height:" 50%" , borderColor: "gray" , borderWidth: 1, borderRadius: 10}}
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        />
            </View>
           
           {/* <View className="w-full flex flex-row gap-x-3 my-5">
           <TextInput
           
  className=" border  border-slate-300 w-12 h-12 rounded-md py-3 px-4"
  
  keyboardType="numeric"
    maxLength={1}
  onPressIn={handlePasteFromClipboard}
    onChangeText={text => handleOtpInputChange(0, text)}
    value={otpCode[0] || ''}
  />
  <TextInput
  className=" border  border-slate-300 w-12 h-12 rounded-md py-3 px-4"
  
  keyboardType="numeric"
    maxLength={1}
    onChangeText={text => handleOtpInputChange(1, text)}
    value={otpCode[1] || ''}
  />
  <TextInput
  className=" border  border-slate-300 w-12 h-12 rounded-md py-3 px-4"
  
  keyboardType="numeric"
    maxLength={1}
    onChangeText={text => handleOtpInputChange(2, text)}
    value={otpCode[2] || ''}
  />
  <TextInput
  className=" border  border-slate-300 w-12 h-12 rounded-md py-3 px-4"
  
  keyboardType="numeric"
    maxLength={1}

    onChangeText={text => handleOtpInputChange(3, text)}
    value={otpCode[3] || ''}
  />
    <TextInput
  className=" border  border-slate-300 w-12 h-12 rounded-md py-3 px-4"
  
  keyboardType="numeric"
    maxLength={1}
    onChangeText={text => handleOtpInputChange(4, text)}
    value={otpCode[4] || ''}
  />
    <TextInput
  className=" border  border-slate-300 w-12 h-12 rounded-md py-3 px-4"
  
  keyboardType="numeric"
    maxLength={1}
    onChangeText={text => handleOtpInputChange(5, text)}
    value={otpCode[5] || ''}
  />

           </View> */}
          { !isResendDisabled &&  <TouchableOpacity disabled={isResendDisabled} className={` bg-green-500 w-full py-3 flex items-center rounded-md`}>
                <Text>Resend</Text>
            </TouchableOpacity>}


            
            </View>
            <Modal
        visible={isShow}
        animationType="slide"
        onRequestClose={() => setIsShow(false)}
      >
        <SafeAreaView className="flex-1 bg-transparent">
            <View className="p-5 flex justify-center items-center w-full h-full">
                <View className="w-2/3 h-1/4 bg-white p-5 flex justify-between items-center shadow-xl shadow-slate-500/100 rounded-lg">
                    <Text className="text-xl">Copy from clip?</Text>
                    <View className="w-full flex flex-row justify-between my-5">
                        <Pressable className="px-5 py-3 bg-green-400 rounded" >
                            <Text>Yes</Text>
                        </Pressable>
                        <Pressable className="px-5 py-3 bg-orange-400 rounded" onPress={()=>setIsShow(false)}>
                            <Text>No</Text>
                        </Pressable>
                    </View>

                </View>

            </View>

        </SafeAreaView>
      </Modal>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Otp;
