import { Navigate } from "react-router-dom"
import React from "react"

const reducer = (state,action) => {
  switch(action.type){
    case "Loginsuccess":return{
        ...state,isAuth:true
    }
    case "logoutsuccess":return {
        ...state,isAuth:false
       
    }
    default:return {
        state
    }
  }

}

export default reducer