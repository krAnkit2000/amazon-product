import React from 'react'
import Product from "./productData";
function prodectDetail() {
  return (
    <div>
    <div className="product_data">
    <h2 className="product_title">{Product.title}</h2>
    <p className="product_description">{Product.description}</p>
    <h4 className="section_heading">Select Color</h4>
    <div className="productfilter">
    <img
    className="productfilter_img selectImg"
    src="https://imgur.com/iOeUBV7.png"
    alt="Black Strap"
      />

      <img
        className="productfilter_img"
        src="https://imgur.com/PTgQlim.png"
        alt="Blue Strap"
      />
      <img
      className="productfilter_img"
      src="https://imgur.com/Mplj1YR.png"
      alt="Purple Strap"
    />
    <img
    className="productfilter_img"
    src="https://imgur.com/xSIK4M8.png"
    alt=""
    />
    </div>
 
    <div className="butitem">
    <button className="buy">Buy Now</button>
    </div>
   </div> 
    </div>
  )
}

export default prodectDetail
