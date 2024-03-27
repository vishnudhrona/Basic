import React from 'react'
import { Route, Routes } from "react-router-dom";
import Userlogin from '../User/components/Userlogin';

const Userrouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Userlogin />} />
    </Routes>
    </>
  )
}

export default Userrouter
