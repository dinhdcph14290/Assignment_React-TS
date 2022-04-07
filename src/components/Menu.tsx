import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/index.css'
import  logo from '../assets/image/logo_shop_cidii.png'
type Props = {}

const Menu = (props: Props) => {
  return (
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //     <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //             <NavLink className="nav-link active fs-5" aria-current="page" to="/">Home</NavLink>
    //         </li>
    //         <li className="nav-item">
    //             <NavLink className="nav-link active fs-5" to="/products">Product</NavLink>
    //         </li>
    //         <li className="nav-item">
    //             <NavLink className="nav-link active fs-5" to="/admin/products">ManagerProduct</NavLink>
    //         </li>
    //         </ul>
    //         <form className="d-flex">
    //         <NavLink className="nav-link active" to="/admin">Admin</NavLink>
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-light" type="submit">Search</button>
    //         </form>
    //     </div>
    //     </div>
    // </nav>
<div>
  <header className="header">
    <div className="top-bar">
      <div className="top-bar__left">
        <ul>
          <li><a href="#">
              <span><i className="fa fa-phone" /></span>
              <span><b className='number-phone'>0982.022.969</b></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="top-bar__right">
        <ul>
          <li><a href="../Signin/index.html">
              <span><i className="fas fa-user" /></span>
              <span className='Account'>Account</span>
            </a></li>
          <li><NavLink to="/admin">
              <span><i className="fas fa-key" /></span>
              <span className='Cart'>Admin</span>
            </NavLink></li>
            <li><a href="#">
            <span><i className="fas fa-shopping-bag"></i></span>
              <span className='Cart'>Cart</span>
            </a></li>
        </ul>
      </div>
    </div>
    <div className="site-header" id="main-header">
      <div className="logo">
        <a href="/"><img className="logo-4men" src={logo} alt="Logo Tony4men" height="64px" /></a>
      </div>
      <nav className="nav">
        <ul className="menu" id="menu">
          <li>
            <a href="/" className="hover">HOME PAGE</a>
          </li>
          <li>
            <a href="#" className="hover">MENS SHIRT</a>
            <ul className="sub_menu">
              <li><a href="#">Shirt</a></li>
              <li><a href="#">Polo Shirt</a></li>
              <li><a href="#">Sweater</a></li>
              <li><a href="#">Coat</a></li>
              <li><a href="#">Sweatshirts</a></li>
              <li><a href="#">Hoodie</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="hover">MALE PANTS</a>
            <ul className="sub_menu">
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Short</a></li>
              <li><a href="#">Trousers</a></li>
              <li><a href="#">Jogger Pants</a></li>
              <li><a href="#">Kaki Pant</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="hover">ACCESSORY</a>
            <ul className="sub_menu">
              <li><a href="#">Balo</a></li>
              <li><a href="#">Footwear</a></li>
              <li><a href="#">Men's hats</a></li>
            </ul>
          </li>
          <li><a href="#" className="hover">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="form-inline search">
        <input type="text" id="inputForm" className="form-control" placeholder="Search.." />
        <button type="submit" className="btn">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </header>
</div>

  )
}

export default Menu