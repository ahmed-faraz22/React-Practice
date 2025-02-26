import "./Header.css"
import logo from "../assets/images/site-logo.png"
// console.log(styles);

export const Header = () => {
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
                        <l1><a href="index.html">Home</a></l1>
                        <l1><a href="#">Products</a></l1>
                        <l1><a href="#">Contact US</a></l1>
                        <l1><a href="#">Faq</a></l1>
                    </ul>
                    <ul className="sidebar">
                        <l1><a href="#">Home</a></l1>
                        <l1><a href="#">Products</a></l1>
                        <l1><a href="#">Contact US</a></l1>
                        <l1><a href="#">Faq</a></l1>
                    </ul>
                </nav>
                <div className="header-cta">
                    <a href="#">CTA 1</a>
                    <a href="#">CTA 2</a>
                </div>
                <div className="menu-btn">
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