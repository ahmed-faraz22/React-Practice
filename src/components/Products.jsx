import Cards from "./Cards"
import "./Products.css"


export const Products = ({addToCart}) => {
    return (
        <>
            <section className="products">
                <div className="container">
                    <div className="inner">
                        <h2>New <span>Arrivals</span> Styles & Trends</h2>
                        <div className="cards">
                        <Cards addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}