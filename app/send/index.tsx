import { View, SafeAreaView, Text,  TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { CheckBox } from '@rneui/themed';
import { useForm, Controller } from 'react-hook-form';
import {z} from "zod"
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from '@rneui/base';


const Form = ({currency}: {currency:number})=> {
  
    const convertionValidator=z.object({local:z.number(), foreign: z.number()})
    type Values= z.infer<typeof convertionValidator>
    const { register, setValue, handleSubmit, control, reset } = useForm<Values>({
        resolver: zodResolver(convertionValidator),
        defaultValues: {
            foreign: 0,
            local:0
        }
        
    });
    const onSubmit = (data:Values )=> {
      console.log(data);
    };
  
    // const onChange = arg => {
    //   return {
    //     value: arg.nativeEvent.text,
    //   };
    // };
    return (
        <View className='w-full  my-5  flex flex-col  '>
      <Text className='text-sm text-slate-700' >Recipient will receive:</Text>
      <View className=' w-full flex flex-row justify-between items-start '>
    <Controller
        control={control}
        render={({
            field: { onChange, onBlur, value },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <TextInput
        
              onBlur={onBlur} 
              keyboardType='numeric'
              onChange={onChange}
              className='py-3 px-4 block w-2/3 border border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 mb-10'
              value={value.toLocaleString()}
           
            />
            
        
          )}
    name='foreign'
    
      />
      <View className='flex flex-row  justify-center  items-center py-4 px-4  bg-white shadow-xl shadow-green-400/100 rounded-lg'>
   <Text className='text-slate-700' >{currency===0? "USD  🇺🇸": "CNY  🇨🇳 " } </Text>
  
   </View>
    </View>
      <Text className='text-sm text-slate-700' >You will send:</Text>
    <View className=' w-full flex flex-row justify-between items-start '>
    <Controller
        control={control}
        render={({
            field: { onChange, onBlur, value },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <TextInput
            keyboardType='numeric'
              onBlur={onBlur} 
              onChange={onChange}
              className='py-3 px-4 block w-2/3 border border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 mb-10'
              value={value.toLocaleString()}
           
            />
            
        
          )}
    name='local'
    
      />
      <View className='flex flex-row  justify-center  items-center py-4 px-4  bg-white shadow-xl shadow-green-400/100 rounded-lg'>
   <Text className='text-slate-700' >KES  🇰🇪  </Text>
  
   </View>
    </View>

  

      <TouchableOpacity  className='w-full py-3 px-4 shadow  bg-green-400 rounded-lg my-20 flex justify-center items-center'    onPress={handleSubmit(onSubmit)}>
       <Text className='text-xl text-white font-bold'>Continue</Text>
      </TouchableOpacity>
    </View>
    )
}

const Index = () => {

    const [currency, setCurrency] = React.useState(0);

  return (
 
    <SafeAreaView className='flex-1 bg-white'>
          <StatusBar />
      <Stack.Screen options={{headerShown:false}}/> 
    
      <View className='w-full gap-10 p-7'>
        <View className=' flex  h-30 w-full'>
            <Text className='text-slate-700 text-center'>Select the currency you want to send</Text>
     <View className='flex flex-row  justify-between w-full  mt-5 items-center'>
<TouchableOpacity  onPress={() => setCurrency(0)}>
<View className='flex flex-row gap-2 justify-center  items-baseline bg-white shadow-xl shadow-green-400/100 rounded-lg'   >
       <Text >USD  🇺🇸</Text>
        <CheckBox
    className='bg-inherit'
           checked={currency === 0}
           onPress={() => setCurrency(0)}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
           checkedColor=  "#4ade80"
         />
    
       </View>
</TouchableOpacity>
<TouchableOpacity  onPress={() => setCurrency(1)}>
<View className='flex flex-row gap-2 justify-center  items-baseline bg-white shadow-xl shadow-green-400/100 rounded-lg'>
   <Text >CNY  🇨🇳 </Text>
    <CheckBox
    className='text-slate-50'
           checked={currency === 1}
           onPress={() => setCurrency(1)}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
           checkedColor=  "#4ade80"
           
         />
   </View>
</TouchableOpacity>

     
     </View>
    </View>
   <View className='w-full'>
   <Form currency={currency}/>

   </View>
        </View>

    
      
 
</SafeAreaView>


  )
}

export default Index