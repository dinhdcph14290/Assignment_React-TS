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

type TProduct = {
  id: number,
  name: string
}

function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Dinh",
    age: 20
  })
  return (
    <div className="App">
      <ShowInfo info={info} />
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/admin/dashboard">Admin Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/admin/dashboard' element={<Dashboard/>} /> */}
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
      </main>
    </div>
  )
}

export default App
