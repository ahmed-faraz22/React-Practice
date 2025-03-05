import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"
import { AboutUs } from "./components/AboutUs"
import { Footer } from "./components/Footer"
import "./App.css"
import "./components/Animations.css"
import "./components/Responsivness.css"
import { useState } from "react"
// import "./components/main"

function App() {

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    console.log("pookie is here");
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
    });
  };


  return (
    <>
      <Header/>
      <Hero cartItems={cartItems} setCartItems={setCartItems}/>
      <Products addToCart={addToCart}/>
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default App
