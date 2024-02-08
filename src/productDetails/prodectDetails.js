import React from 'react'

// import Product from "./productData";
import './productDetails.css';
function ProdectDetail(props) {
  

  const colorOption=props.data.colorOptions.map((item,index)=>{
    return(

      <img key={index}
      className="productfilter_img  "
      src= {item.imageUrl}
      alt={item.styleName}
      onClick={()=>props.onColorOptionClick(index)}
        />
   
    )
  })

// buybtn

function buy(){
alert("next")
}


  // console.log(props.data);
  return (

    <div className="product_data">
    <h2 className="product_title">{props.data.title}</h2>
    <p className="product_description">{props.data.description}</p>
    <h4 className="section_heading">Select Color</h4>
    <div className="productfilter">
    {colorOption}
  
 
    
   </div> 
   <div className="butitem">
    <button className="buy" onClick={buy}>Buy Now</button>
    </div>
    </div>
  )
}

export default ProdectDetail
