import React from 'react'
import Home from '../Pages/Home/Home'
import SearchResultsPage from '../Pages/Home/SearchResultPage'
import { Routes,Route } from 'react-router-dom'
import ServiceSelected from '../Pages/Services/ServiceSelected'
import AdminLogin from '../Pages/Admin/AdminLogin'
import Admin from '../Pages/Admin/Admin'
import Orders from '../Pages/Admin/Orders'
import EditServices from '../Pages/Admin/EditServices'


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services/search" element={<SearchResultsPage/>} />
       <Route path='/services/:name' element={<ServiceSelected/>}/>
       <Route path='/services' element={<SearchResultsPage/>}/>
       <Route path='/admin/login' element={<AdminLogin/>}/>
       <Route path='/admin' element={<Admin/>}/>
       <Route path='/admin/orders' element={<Orders/>}/>
       <Route path='/admin/editservices' element={<EditServices/>}/>
       

    </Routes>
  )
}

export default Allroutes