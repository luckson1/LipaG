import { View, Text, SafeAreaView, TouchableOpacity,  Pressable,StyleSheet, TextInput, type NativeSyntheticEvent, type TextInputKeyPressEventData } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { InputRightAddon, KeyboardAvoidingView } from "native-base";

const Otp = () => {

  
    const params = useSearchParams();
    let phoneNumber= ""

   
  const clockCall = useRef<number>();
  const defaultCountdown = 60;
  const [countdown, setCountdown] = useState(defaultCountdown);
const navigation=useRouter()
  const textInput = useRef<TextInput>(null);
const [isResendDisabled, setIsResendDisabled]=useState(true)
const decrementClock =useCallback(()=> {
  if (countdown === 0) {
    setIsResendDisabled(false);
    setCountdown(0);
    clearInterval(clockCall.current);
  } else {
    setCountdown(countdown - 1);
  }
}, [countdown])
  useEffect(() => {
    clockCall.current= window.setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall.current);
    };
  }, [decrementClock]);
    if (params && typeof params?.number==="string" )  phoneNumber=params?.number
    const [otpCode, setOtpCode] = useState(['']);
    const handleOtpInputChange = (index:number, text:string) => {
        const updatedOtpCode = [...otpCode];
        updatedOtpCode[index] = text;
        setOtpCode(updatedOtpCode);
      };

        const handleResendOTP = () => {
    if (!isResendDisabled) {
      setCountdown(defaultCountdown);
      setIsResendDisabled(true);
      clearInterval(clockCall.current);

      clockCall.current = window.setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };
  const rightOptLength=6
      const handlePasteFromClipboard =  (text:string) => {
   
      if(text.length<=1) {
        const updatedOtpCode = [...otpCode];
        updatedOtpCode[0] = text;
        setOtpCode(updatedOtpCode);
      }else {
        const formattedOTP= text.slice(0, rightOptLength); 
        setOtpCode([...formattedOTP]);
      }
    
    
      };
        useEffect(() => {
    textInput.current?.focus();
  
  }, []);
  const handleDeleteKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index:number) => {
    if (event.nativeEvent.key === 'Backspace' && index===5) {
      // delete the entire code
    setOtpCode([''])
    } 
    if(event.nativeEvent.key !== 'Backspace' && index===5) {
      const updatedOtpCode=[...otpCode]
      updatedOtpCode[index] = ""
      setOtpCode(updatedOtpCode);
    }
  };
  
  useEffect(()=> {
if(otpCode.length===rightOptLength)
navigation.push("/profile")
  }, [navigation, otpCode])
  return (
    <SafeAreaView className="flex-1  bg-white ">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar />
    
        <View className="flex h-full w-full p-7 mt-16 flex-[70%]">
            <Text className="text-2xl font-semibold text-slate-700 my-5 ">Confirm your phone number</Text>
            <Text className="mb-5">Please enter the code we have sent to {phoneNumber}</Text>
        
           <View className="w-full flex flex-row gap-x-3 my-5">
            {Array(rightOptLength).fill(0).map((_, i)=> (
                    <TextInput
                    ref={i===0? textInput : null}
           key={i}
                    className=" border-b-2  border-teal-500 w-12 h-fit  py-3 px-2 text-2xl"
                    
                    keyboardType="numeric"
                      maxLength={i===0? 6: 1}
                  onKeyPress={(e)=>handleDeleteKeyPress(e, i)}
                      onChangeText={text => i===0? handlePasteFromClipboard(text): handleOtpInputChange(i, text)}
                      value={otpCode[i] || ''}
                    />
            ))}
           </View>
          
      
            </View>
            <View className="w-full  flex flex-row justify-between items-baseline   p-7 absolute bottom-10 flex-[30%]">
        <Pressable onPress={()=>navigation.back()}>
          <Text className="text-sky-500 text-lg">Change number</Text>
        </Pressable>
       { !isResendDisabled &&  <TouchableOpacity onPress={handleResendOTP} className={` bg-green-500 px-5 py-3 flex items-center rounded-md`}>
                <Text>Resend code</Text>
            </TouchableOpacity>}


            {isResendDisabled && <Text className="text-lg">Resend Code in {countdown}s</Text>}
       </View>
 
 
    </SafeAreaView>
  );
};

export default Otp;



