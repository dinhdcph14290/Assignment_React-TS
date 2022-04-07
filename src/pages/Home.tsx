import React from 'react'
import ao1 from '../assets/image/ao1.jpg'
import ao2 from '../assets/image/ao2.jpg'
import ao3 from '../assets/image/ao3.jpg'
import ao4 from '../assets/image/ao4.jpg'
import ao5 from '../assets/image/ao5.jpg'
import ao6 from '../assets/image/ao6.jpg'
import ao7 from '../assets/image/ao7.jpg'
import ao8 from '../assets/image/ao8.jpg'

import q1 from '../assets/image/q1.jpg'
import q2 from '../assets/image/q2.jpg'
import q3 from '../assets/image/q3.jpg'
import q4 from '../assets/image/q4.jpg'
import q5 from '../assets/image/q5.jpg'
import q6 from '../assets/image/q6.jpg'
import q7 from '../assets/image/q7.jpg'
import q8 from '../assets/image/q8.jpg'
import Slide from '../components/Slide'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
        <Slide />
        <main className="content">
    <div className="total-products">
        <h2 className="title-products">
        NEW PRODUCTS
        </h2>
        <div className="products">
        <div className="item-product">
            <a href="#">
            <img src={ao1} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao2} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao3} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao4} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        </div>
    </div>
    {/* New products */}
    <div className="total-products">
        <h2 className="title-products">
        BLACK FRIDAY
        </h2>
        {/* Giao nhau phần products */}
        <div className="products">
        <div className="item-product">
            <a href="#">
            <img src={ao1} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao2} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao3} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        <div className="item-product">
            <a href="#">
            <img src={ao4} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        </div>
    </div>
    <div className="total-products">
        <h2 className="title-products">
        MENS SHIRT
        </h2>
        <div className="products">
        <div className="item-product">
            <a href="#">
            <img src={ao5} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao6} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao7} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao8} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        </div>
        {/* Giao nhau phần products */}
        <div className="products">
        <div className="item-product">
            <a href="#">
            <img src={ao1} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao2} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao3} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={ao4} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        </div>
    </div>
    <div className="total-products">
        <h2 className="title-products">
        MALE PANTS
        </h2>
        <div className="products">
        <div className="item-product">
            <a href="#">
            <img src={q1} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={q2} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={q3} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={q4} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        </div>
        {/* Giao nhau phần products */}
        <div className="products">
        <div className="item-product">
            <a href="#">
            <img src={q5} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={q6} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={q7} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        <div className="item-product">
            <a href="#">
            <img src={q8} alt="#" />
            </a>
            <h3 className="name-product">
            <a href="#">Hoodie 0342</a>
            </h3>
            <span className="price">100$</span>
            <div className="btn__item-product">
            <a href="#" style={{padding: 5}}><i className="fas fa-cart-shopping" /> Quick purchase</a>
            <a href="#" style={{borderLeft: '1px #fff solid'}}><i className="fas fa-eye icon" /> See
                details</a>
            </div>
        </div>
        {/*  */}
        </div>
    </div>
    {/* MENS SHIRT*/}
    </main> </>

    )
}

export default Home