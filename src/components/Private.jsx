import React from 'react'
import { UserContext } from './userContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'



export default function Private(props)
 {
   const logUser = useContext(UserContext)

   return(
    logUser.logUser!==null?

    <props.component/>
    :
    <Navigate to='/sign'/>
   )
     
}