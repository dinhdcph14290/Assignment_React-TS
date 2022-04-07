import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/product'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'
import UserLayout from './pages/layouts/UserLayout'
import AdminLayout from './pages/layouts/AdminLayout'

import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/admin/ProductAdd'
import ProductManager from './pages/admin/ProductManager'
import axios from 'axios'
import "antd/dist/antd.css";
import { add, list, remove, update } from './api/product'
import ProductEdit from './pages/admin/ProductEdit'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

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
const onHandleRemove = async (id: number) => {
  await remove(id);
  setProducts(products.filter(item => item._id !== id));
}
const onHandleAdd = async (product: ProductType) => {
  // Call API
  add(product);
  const {data} = await add(product)
  console.log(data)
  setProducts([...products, product])
}
const onHandleUpdate = async (product: ProductType) => {
  const {data} = await update(product);
  setProducts(products.map(item => item._id == data._id ? data : item))
}
  return (
        <Routes>
          <Route path='/' element={<UserLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='products' element={<Product/>}/>
              <Route path='signup' element={<Signup/>}/>
              <Route path='signin' element={<Signin/>}/>
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
                <Route index element={<Navigate to="dashboard"/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='products'>
                  <Route index element={<ProductManager data={products} onRemove={onHandleRemove}/>}/>
                  <Route path='add' element={<ProductAdd onAdd={onHandleAdd}/>}/>
                  <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
              </Route>
          </Route>
        </Routes>
  )
}

export default App
