
import React from 'react'
import { Redirect, Stack } from 'expo-router'

const index = () => {
    const isAuth =false
  return (

 
 <>
  {isAuth && <Redirect href={"/home"} />}
  {!isAuth && <Redirect href={"/auth"} />}
 </>

  )
}

export default index