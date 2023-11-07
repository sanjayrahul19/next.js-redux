import React from 'react'
import Styles from "./User.module.css"

const User = ({ id, name, age, email, contact, jobRole, deleteUser }) => {
   
    return (
        <div className={Styles.user}>
            <h2>Id:<span>{id}</span></h2>
            <h3>Name:<span>{name}</span></h3>
            <h3>Age:<span>{age}</span></h3>
            <h3>Email:<span>{email}</span></h3>
            <h3>Contact:<span>{contact}</span></h3>
            <h3>Job Role:<span>{jobRole}</span></h3>
            <div className={Styles.user__button}>
                <button className={Styles.user__delete} onClick={deleteUser}>Delete</button>
            </div>
        </div>
    )
}

export default User