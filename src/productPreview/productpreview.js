

import  React from 'react'
import './productpreview.css'
function Productpreview(prop) {

var time= new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })


console.log(prop.currentPreviewImage)

  return (

      <div className="product_preview">
         <img src={prop.currentPreviewImage} alt="productPreview" />
        <div className="time">
        <p>{time}</p>
        </div>
        </div>

  
 
  )
}

export default Productpreview
