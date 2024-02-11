import { Avatar, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
    return (
        <div className='container'>
            <h3>Account Settings</h3>
            <div className='profile__page'>
                <Avatar
                    alt="Remy Sharp"
                    src="https://tse1.mm.bing.net/th?id=OIP.0Eq0sjsuS1d_KLs4pc2vTgHaLH&pid=Api&rs=1&c=1&qlt=95&w=73&h=110"
                    sx={{ width: 56, height: 56 }}
                />
                <div className='profile__details'>
                    <h3>Marry Doe   <p>marry@gmail.com</p></h3>
                </div>
            </div>
        </div>
    )
}

export default Profile