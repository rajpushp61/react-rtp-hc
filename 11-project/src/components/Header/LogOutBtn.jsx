import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logOut } from '../../store/authSlice'

function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authservice.logout().then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200
    hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogOutBtn
