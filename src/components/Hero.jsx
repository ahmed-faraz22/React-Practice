import { useEffect, useState } from "react";
import "./Hero.css";
import cartImg from "../assets/images/download (1).png";

export const Hero = ({ cartItems, setCartItems }) => {
    useEffect(() => {
        VANTA.BIRDS({
            el: ".hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xc3c3f4
        });
    }, []);

    const [cart, setCart] = useState(false);

    if (cart === true) {
        document.querySelector(".cart-wrapper").style.display = "block";
    }

    // Update cartCount to reflect total quantity, not just unique items
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const addItemToCart = (item) => {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const decreaseItemQuantity = (item) => {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            const updatedItem = updatedCartItems[itemIndex];
            if (updatedItem.quantity === 1) {
                removeItem(item.id); // Remove item if quantity reaches 0
            } else {
                updatedItem.quantity -= 1;
                setCartItems(updatedCartItems);
            }
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const cartWrapper = document.querySelector(".cart-wrapper");
            const cart = document.querySelector(".cart");
            const subBtn = event.target.closest(".sub-btn");

            // If click is inside cart wrapper or cart, don't close
            if (cartWrapper.contains(event.target) || cart.contains(event.target) || subBtn) {
                return;
            }

            // Close the cart if click is outside both
            cartWrapper.style.display = "none";
            cart.style.display = "flex";
            setCart(false);
        };

        // Add the event listener on component mount
        document.addEventListener("click", handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [cartItems]);

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="inner">
                        <h1>Discover the Latest <br /> Trends & Unbeatable Deals!</h1>
                        <div onClick={() => setCart(true)} className="cart">
                            <img src="https://img.icons8.com/?size=50&id=9720&format=png" alt="" className="cart-icon" />
                            <h4>Cart😊</h4>
                            <span className="cart-count">{cartCount}</span>
                        </div>
                        <div className="cart-wrapper">
                            <div className="cart-dropdown">
                                {cartItems.length === 0 ? (
                                    <div className="empty-cart">
                                        <img className="emptycart-img" src={cartImg} alt="" />
                                        <h3><span>Where did everything go?</span> Your cart is empty, Fill it with awesome products!</h3>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="dropdown-card">
                                            <div className="dropdown-card-img">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="dropdown-card-description">
                                                <h4>{item.title}</h4>
                                                <div className="card-footer">
                                                    <h4>${item.price.toFixed(2)}</h4>
                                                    <h4>Qty: {item.quantity}</h4>
                                                </div>
                                            </div>
                                            <div 
                                                onClick={(e) => { 
                                                    e.stopPropagation();  // Prevent cart from closing
                                                    decreaseItemQuantity(item); 
                                                }} 
                                                className="sub-btn">
                                                <span>-</span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
