import React from 'react'

function Productpreview(prop) {
  

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes() ;

 
 
  return (

      <div className="product_preview">
         <img src="https://imgur.com/iOeUBV7.png" alt="productPreview" />
        <div className="time">
        <p>{`${hours}:${minutes}`}</p>
        </div>
        </div>

  
 
  )
}

export default Productpreview
