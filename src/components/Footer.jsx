import "./Footer.css"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="inner">
                    <div className="col">
                        <div className="site-logo">
                            <img src="asets/images/site-logo.png" alt="" />
                        </div>
                        <div className="social-links">
                            <h4>follow us</h4>
                            <ul>
                                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png"
                                    alt="" />facebook</a></li>
                                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
                                    alt="" />instagram</a></li>
                                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png"
                                    alt="" />twitter</a></li>
                                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
                                    alt="" />linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h4>group 1</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>group 2</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <h4>group 3</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div className="wrapper">
                            <h4>group 4</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}