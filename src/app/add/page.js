'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/app/components/NavBar/Navbar'
import Styles from "./Add.module.css"
import { v4 as uuid } from "uuid"
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slices/userSlice'

const AddUsers = () => {
  const dispatch = useDispatch()

  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    age: "",
    jobRole: ""
  })

  useEffect(() => {
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        id: uuid()
      }
    })
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  const handleClick = () => {
    dispatch(addUser(userInfo))
    setUserInfo({
      id:uuid(),
      name: "",
      email: "",
      contact: "",
      age: "",
      jobRole: ""
    })
  }

  return (
    <div>
      <Navbar />
      <div className={Styles.home}>
        <div className={Styles.home__container}>
          <div className={Styles.home__formContainer}>
            <h1 className={Styles.home__title}>Add User Information</h1>
            <input type='text' name='id' value={userInfo.id} disabled />
            <br />
            <input type='text' name='name' placeholder='Enter users name' value={userInfo.name} onChange={handleChange} />
            <br />
            <input type='email' name='email' placeholder='Enter users email' value={userInfo.email} onChange={handleChange} />
            <br />
            <input type='number' name='contact' placeholder='Enter users contact number' value={userInfo.contact} onChange={handleChange} />
            <br />
            <input type='number' name='age' placeholder='Enter users age' value={userInfo.age} onChange={handleChange} />
            <br />
            <input type='text' name='jobRole' placeholder='Enter users job Role' value={userInfo.jobRole} onChange={handleChange} />
            <br />
            <button onClick={handleClick}>Add User</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers