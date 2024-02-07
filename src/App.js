
import "./App.css";
import ProductPreview from './productpreview'
import Product from "./productData";
function App() {
  
  return (
    <div className="App">
      <header>
        <nav>
          <img
            className="header_img"
            src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/00/92/0260aab44ee8a2faeafde18ee1da/amazon-logo-inverse.svg"
            alt="Red Strap"
          />
         
        </nav>
      </header>

      <div className="maincontainer">
       <ProductPreview/>
       
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
   </div>
  );
}

export default App;
