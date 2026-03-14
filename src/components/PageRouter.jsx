import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ShowDetails from '../pages/ShowDetails'
function PageRouter() {
    return (
        <div style={{ height: '100%', margin: '0', padding: '0' }}>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/showdetails/:id' element={<ShowDetails />}></Route>
            </Routes>
        </div>
    )
}

export default PageRouter