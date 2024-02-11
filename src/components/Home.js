import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import NavBar from './NavBar';

const Home = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default Home