import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
    const firstName = useSelector(state => state.fn)
    const email = useSelector(state => state.email)
    const pass = useSelector(state => state.pass)

    return (
        <div>
            <h2>User's First Name : {firstName} </h2>
            <h2>User's Email id  is : {email}</h2>
            <h2>User's  Password is : {pass}</h2>
        </div>
    )
}

export default Profile
