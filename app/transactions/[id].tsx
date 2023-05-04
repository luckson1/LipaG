
import React, { useState } from 'react'
import { Modal, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Platform  } from 'react-native'
import { CheckBox, Icon } from '@rneui/themed'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { KeyboardAvoidingView } from 'native-base'
import { TextInput } from 'react-native'
import { z } from 'zod'




const BankPolicy=({setBankPolicyVisible, setOwnershipVisible}: {setBankPolicyVisible: React.Dispatch<React.SetStateAction<boolean>>, setOwnershipVisible: React.Dispatch<React.SetStateAction<boolean>>})=> {
    return (
        <SafeAreaView className="flex flex-1 flex-col items-center justify-center  p-5">
   
     
    
          <View className="flex flex-row w-full my-5 gap-x-3 justify-center items-center">
          <Icon
              name="description"
              type="material"
              size={40}
              color={"grey"}
            />
            <Text className="w-[80%] text-lg text-slate-700">We will give you our bank details</Text>

          </View>
          <View className="flex flex-row w-full my-5 gap-x-3 justify-center items-center">
          <Icon
                  name="account-balance"
                  type="material"
                  size={40}
                  color={"#9700b9"}
                />
                <Text className="w-[80%] text-lg text-slate-700">Make a Wire Transfer from your account to our bank account</Text>
          </View>
          <View className="flex flex-row w-full my-5 gap-x-3 justify-center items-center">
          <Icon
                      name="arrow-upward"
                      type="material"
                      size={40}
                      color={"#4ade80"}
                 
                />
                <Text className="w-[80%] text-lg text-slate-700">Once we receive the money, we will send it to the recipient</Text>
          </View>
          
  
                  
          <TouchableOpacity
            className="rounded-lg w-full py-3 bg-green-400 flex justify-center items-center "
            onPress={() =>{ setBankPolicyVisible(false), setOwnershipVisible(true)}}
          >
           <Text className="text-white text-lg"> Understood</Text>
          </TouchableOpacity>
       
        </SafeAreaView>
    )
}
const TransferInfo=({setTransferInfoVisible, setOwnershipVisible}: {setTransferInfoVisible: React.Dispatch<React.SetStateAction<boolean>>, setOwnershipVisible: React.Dispatch<React.SetStateAction<boolean>>})=> {
    return (
        < ScrollView className="flex-1">
            <SafeAreaView className="flex flex-1 flex-col items-start justify-center  p-8">
   
     
    
         <View className="flex w-full items-center justify-center py-3 border-b-2 border-slate-400">
         <Text className="text-2xl">Pay by bank transfer</Text>
          <View className="w-full bg-slate-100 rounded-lg h-48 p-5 justify-between items-start my-4">
           <View className="w-full flex justify-center items-start">
           <Icon name="info" size={48} type="material" color={"gray"}/>
           </View>
            
<Text>1. Make a wire transfer to the accounts below:</Text>
<Text>2. Get the Bank Reference Number</Text>
          </View> 
          <Text>
            Bank Transfer Instructions
          </Text>
         </View>
<View className="flex my-4">
    <Text className="text-thin">Payee Name</Text>
    <Text className="text-xl">Lipa Global Ltd</Text>

</View>
<View className="flex my-4">
     <Text className="text-thin">Bank Name</Text>
    <Text className="text-xl">Equity Bank Kenya</Text>

</View>
<View className="flex my-4">
     <Text className="text-thin">Account Number</Text>
    <Text className="text-xl">0160196743780</Text>

</View>
<View className="flex my-4">
     <Text className="text-thin">Bank Branch</Text>
    <Text className="text-xl">Canva Corporate Branch</Text>

</View>
<View className="flex my-4">
     <Text className="text-thin">Bank Branch</Text>
    <Text className="text-xl">Canva Corporate Branch</Text>

</View>
   
                  
          <View className="flex gap-y-4 w-full my-4">
          <TouchableOpacity
            className="rounded-lg w-full py-3 bg-green-400 flex justify-center items-center "
            onPress={() =>{ setTransferInfoVisible(false)}}
          >
           <Text className="text-white text-lg"> I have made the transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-lg w-full py-3 bg-inherit flex justify-center items-center border border-green-400"
            onPress={() =>{ setTransferInfoVisible(false)}}
          >
           <Text className=" text-lg"> I will make the transfer later</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="rounded-lg w-full py-3 bg-inherit flex justify-center items-center border border-green-400"
            onPress={() =>{ setTransferInfoVisible(false)}}
          >
           <Text className=" text-lg"> I need help</Text>
          </TouchableOpacity>
          </View>
          </SafeAreaView>
        </ScrollView>
    )
}
const AccountOwnership=({setOwnershipVisible, setTransferInfoVisible}: {setTransferInfoVisible:React.Dispatch<React.SetStateAction<boolean>>, setOwnershipVisible: React.Dispatch<React.SetStateAction<boolean>>})=> {

    const nameValidator=z.object({name: z.string(), owner: z.number()})
    type Values= z.infer<typeof nameValidator>
    const { handleSubmit, control, formState: {errors}, setValue, watch} = useForm<Values>({
        resolver: zodResolver(nameValidator),
      });
      const owner=watch('owner')
    return (
        <SafeAreaView className="flex flex-1 flex-col items-center justify-center  p-5">
   
     <Text className="text-2xl">Are You sending from your own Account?</Text>
    
          <Controller
            control={control}
            render={({ field: {  onBlur } }) => (
                <>

          <View className="flex flex-row w-full my-5 gap-x-3 justify-center items-center">
          <CheckBox
                  className="bg-inherit"
                  checked={owner===1}
                  onBlur={onBlur}
                  onPress={() => setValue('owner', 1) }
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                  checkedColor="#4ade80"
                />
            <Text className="w-[80%] text-lg text-slate-700">Yes, I am the account holder</Text>

          </View>
          <View className="flex flex-row w-full my-5 gap-x-3 justify-center items-center">
          <CheckBox
                    className="bg-inherit"
                    checked={owner===2}
                    onPress={() => setValue('owner', 2) }
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={"checkbox-blank-outline"}
                    checkedColor="#4ade80"
                />
                <Text className="w-[80%] text-lg text-slate-700">Yes, But it is a joint Account</Text>
          </View>
                </>
          
            )}
            name="owner"
          />

          {owner===2 &&       <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className=" flex w-full  items-start justify-between my-5" keyboardVerticalOffset={Platform.OS==="ios"? -64: -32}>
          <Text className=" mb-2 text-slate-700">Name of the other account holder</Text>
          {errors.name && (
            <Text className=" mb-2 text-red-500">{errors.name.message}</Text>
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                    className= {`block w-full rounded-md border  px-4 py-3 ${errors.name? "border-red-500  focus:border-green-500 focus:ring-green-500": " border-gray-300  focus:border-green-500 focus:ring-green-500"}`}
                value={value}
              />
            )}
            name="name"
          />
        </KeyboardAvoidingView>}
          <View className="flex flex-row w-full my-5 gap-x-3 justify-center items-center">
          <CheckBox
                  className="bg-inherit"
                  checked={false}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                  checkedColor="#4ade80"
                />
                <Text className="w-[80%] text-lg text-slate-700">No, I am not the account holder. You cannot send money with an account that does not belong to you</Text>
          </View>
       
  
                  
          <TouchableOpacity
            className="rounded-lg w-full py-3 bg-green-400 flex justify-center items-center "
            onPress={() => {setOwnershipVisible(false), setTransferInfoVisible(true)}}
          >
           <Text className="text-white text-lg"> Continue</Text>
          </TouchableOpacity>
       
        </SafeAreaView>
    )
}

const PaymentMethod = ({
  setPaymentMethodVisible,
  setBankPolicyVisible
}: {
  setPaymentMethodVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setBankPolicyVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
        <TouchableOpacity className=" mt-5 flex w-full items-center justify-center rounded-xl bg-slate-200  py-5 shadow-lg shadow-green-400/100" onPress={()=> {  setBankPolicyVisible(true),  setPaymentMethodVisible(false)}}>
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

const TransactionId = () => {
    const [paymentMethodVisible, setPaymentMethodVisible] = useState(true);
    const [bankPolicyVisible, setBankPolicyVisible] = useState(false);
    const [ownershipVisible, setOwnershipVisible] = useState(false);
    const [transferInfoVisible, setTransferInfoVisible] = useState(false);
  return (
<SafeAreaView className='flex-1 bg-white'>
<Modal
        visible={paymentMethodVisible}
        animationType="slide"
        onRequestClose={() => setPaymentMethodVisible(false)}
      >
        <PaymentMethod setPaymentMethodVisible={setPaymentMethodVisible} setBankPolicyVisible={setBankPolicyVisible}/>
      </Modal>
      <Modal
        visible={bankPolicyVisible}
        animationType="slide"
        onRequestClose={() => setBankPolicyVisible(false)}
      >
        <BankPolicy setBankPolicyVisible={setBankPolicyVisible} setOwnershipVisible={setOwnershipVisible} />
      </Modal>
      <Modal
        visible={ownershipVisible}
        animationType="slide"
        onRequestClose={() => setOwnershipVisible(false)}
      >
        <AccountOwnership setOwnershipVisible={setOwnershipVisible} setTransferInfoVisible={setTransferInfoVisible}/>
      </Modal>
      <Modal
        visible={transferInfoVisible}
        animationType="slide"
        onRequestClose={() => setTransferInfoVisible(false)}
      >
        <TransferInfo setOwnershipVisible={setOwnershipVisible} setTransferInfoVisible={setTransferInfoVisible}/>
      </Modal>

</SafeAreaView>
  )
}

export default TransactionId