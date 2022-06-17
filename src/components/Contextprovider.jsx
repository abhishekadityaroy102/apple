import React, {createContext, useReducer, useState } from 'react'
import reducer from "./Reducer"
const Authcontext=createContext();
const Contextprovider = ({children}) => {
    // const [isAuth,setIsAuth]=useState(false)
    const initial={
        isAuth:false,

    }
    const [state,dispatch]=useReducer(reducer,initial)
  return (
    <Authcontext.Provider value={[state,dispatch]}>{children}</Authcontext.Provider>
  )
}

export {Contextprovider,Authcontext}