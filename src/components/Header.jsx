import "./Header.css"
import logo from "../assets/images/site-logo.png"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

export const Header = () => {

    const [isMenuActive, setIsMenuActive] = useState (false);
const toggle = () => {
    setIsMenuActive(prevIsMenuActive => !prevIsMenuActive);
}

    return(
        <>
        <header>
        <div className="container">
            <div className="inner">
                <div className="site-logo">
                   <a href="index.html"><img src={logo} alt=""/></a>
                </div>
                <nav>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contactUs">Contact US</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                    </ul>
                    <ul className={`sidebar ${isMenuActive ? "active" : " "}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contactUs">Contact US</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                    </ul>
                </nav>
                <div className="header-cta">
                    <a href="#">CTA 1</a>
                    <a href="#">CTA 2</a>
                </div>
                <div className={`menu-btn ${isMenuActive ? "active" : " "}`} onClick={toggle}>
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}