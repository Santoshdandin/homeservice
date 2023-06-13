import React from 'react'
import Home from '../Pages/Home/Home'
import SearchResultsPage from '../Pages/Home/SearchResultPage'
import { Routes,Route } from 'react-router-dom'
import ServiceSelected from '../Pages/Services/ServiceSelected'


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services/search" element={<SearchResultsPage/>} />
       <Route path='/services/:name' element={<ServiceSelected/>}/>
       <Route path='/services' element={<SearchResultsPage/>}/>

    </Routes>
  )
}

export default Allroutes