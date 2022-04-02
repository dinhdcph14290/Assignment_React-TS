import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { ProductType } from './types/product'
import { NavLink, Route, Routes } from 'react-router-dom'

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
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />
          <Route path='/product' element={<h1>Product page</h1>} />
          <Route path='/about' element={<h1>About page</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
