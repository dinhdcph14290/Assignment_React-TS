import React from 'react'
import '../assets/css/index.css'
import  logo from '../assets/image/logo_shop_cidii.png'
type Props = {}

const Menu = (props: Props) => {
  return (
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
          <li><a href="../cart/index.html">
              <span><i className="fas fa-shopping-bag" /></span>
              <span className='Cart'>Cart</span>
            </a></li>
        </ul>
      </div>
    </div>
    <div className="site-header" id="main-header">
      <div className="logo">
        <a href="../home-page/index.html"><img className="logo-4men" src={logo} alt="Logo Tony4men" height="64px" /></a>
      </div>
      <nav className="nav">
        <ul className="menu" id="menu">
          <li>
            <a href="./index.html" className="hover">HOME PAGE</a>
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