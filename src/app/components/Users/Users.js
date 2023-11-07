'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Styles from "./Users.module.css"
import Link from 'next/link'
import User from '../User/User'
import { removeUser } from '@/app/redux/slices/userSlice'

const Users = () => {
    const user = useSelector((state) => state.userInfo.users)
    const dispatch = useDispatch()
    console.log(user)

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <div className={Styles.users}>
            <h1 className={Styles.users__title}>{Styles.users__title}</h1>
            <div className={Styles.users__container}>
                {user.length === 0 ? <div>
                    <h1>No Users Found. Please Add more data</h1>
                    <h3>
                        <Link href="/add">Add Users</Link>
                    </h3>
                </div> : (
                    user.map((users)=><User key={users.id} id={users.id} name={users.name} jobRole={users.jobRole} age={users.age} contact={users.contact} email={users.email} deleteUser={()=>deleteUser(users.id)}/>)
                )}
            </div>
        </div>
    )
}

export default Users