import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Authcontext } from './Contextprovider'

const PrivateRoute = ({children}) => {
    const [state,dispatch]=useContext(Authcontext)
    if(!state.isAuth){
        return <Navigate to="/login"/>
    }
  return children
}

export default PrivateRoute