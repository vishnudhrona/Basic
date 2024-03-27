import React from 'react'
import { Route, Routes } from "react-router-dom";
import Adminlogin from '../Admin/Components/Adminlogin';

const Adminrouter = () => {
  return (
    <>
    <Routes>
        <Route path='/adminlogin' element = {<Adminlogin />} />
    </Routes>
    </>
  )
}

export default Adminrouter
