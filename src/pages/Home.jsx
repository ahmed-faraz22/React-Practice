import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { AboutUs } from '../components/AboutUs'
import { Footer } from '../components/Footer'

const Home = () => {

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    })};

  return (
    <>
          <Hero cartItems={cartItems} setCartItems={setCartItems}/>
          <Products addToCart={addToCart}/>
          <AboutUs/>
    </>
  )
}

export default Home;