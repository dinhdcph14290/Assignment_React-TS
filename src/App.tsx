import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { ProductType } from './types/product'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import UserLayout from './pages/layouts/UserLayout'
import AdminLayout from './pages/layouts/AdminLayout'

import "bootstrap/dist/css/bootstrap.min.css"
type TProduct = {
  id: number,
  name: string
}

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<UserLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='product' element={<Product/>}/>
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='product' element={<Product/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
