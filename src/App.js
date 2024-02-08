import "./App.css";

import React, { Component } from 'react'
import ProductPreview from "./productPreview/productpreview";
import ProductDetail from "./productDetails/prodectDetails";
import Navbar from "./navbar/navbar";
import ProductData from "./utils/productData";
 


export default class App extends Component {
  state={
    Productdata:ProductData,
    currentPreviewImage:'https://imgur.com/iOeUBV7.png'
  }

  onColorOptionClick=(index) => {

const  UpdatedImage=this.state.Productdata.colorOptions[index].imageUrl
this.setState({currentPreviewImage:UpdatedImage})
 }


  render() {
    return (
      <div className="App">
      <header>
        <Navbar />
      </header>

      <div className="maincontainer">
        <ProductPreview  currentPreviewImage={this.state.currentPreviewImage}/>

        
        <ProductDetail data={this.state.Productdata} onColorOptionClick={this.onColorOptionClick}/>
      </div>
    </div>
    )
  }
}




