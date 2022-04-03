import { useEffect, useState } from 'react'
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
import ProductAdd from './pages/ProductAdd'
import ProductManager from './pages/ProductManager'
import axios from 'axios'
import { list } from './api/product'

type TProduct = {
  id: number,
  name: string
}

function App() {
  const [products,setProducts] = useState<ProductType[]>([]);
//Call API with React Hook
useEffect(() => {
  const getProducts = async () => {
    const {data} = await list();
    setProducts(data);
  }
  getProducts();
},[])
const onHandleAdd = (product: ProductType) => {
  console.log('app.js', product)
}
  return (
        <Routes>
          <Route path='/' element={<UserLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='product' element={<Product/>}/>
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
                <Route index element={<Navigate to="dashboard"/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='products'>
                  <Route index element={<ProductManager/>}/>
                  <Route path='add' element={<ProductAdd onAdd={onHandleAdd}/>}/>
              </Route>
          </Route>
        </Routes>
  )
}

export default App
