import React from 'react'
import Home from '../Pages/Home/Home'
import SearchResultsPage from '../Pages/Home/SearchResultPage'
import { Routes,Route } from 'react-router-dom'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" component={SearchResultsPage} />

    </Routes>
  )
}

export default Allroutes