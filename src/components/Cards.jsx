import React, { useEffect, useState } from 'react'

const Cards = ({addToCart}) => {

    const[data, setData] = useState([])

useEffect(() => {
    async function fetchData(){
        const response = await fetch('https://fakestoreapi.com/products')
        // console.log('api response', response);
        const json =  await response.json();
        setData(json.slice(0, 12));
    }
    fetchData();
}, [])


  return (
    <>
    {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-img">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="card-body">
            <h3>{item.title}</h3>
            <div className="card-description">
              <h4>${item.price}</h4>
              <div onClick={() => addToCart(item)} className="add-btn" data-name={item.title} data-price={item.price} data-img={item.image}>
                <span >+</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards