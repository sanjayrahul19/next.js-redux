'use client'
import React, { useEffect } from 'react'
import Navbar from '../NavBar/Navbar';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/app/redux/slices/userSlice';
   

const HomePage = ({users}) => {

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(setUsers(users))
    },[users])
   
    
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
        </div>
    )
}

export default HomePage