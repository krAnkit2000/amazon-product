import "./App.css";
import ProductPreview from "./productpreview";
import ProductDetail from "./prodectDetails";
import Navbar from "./navbar";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className="maincontainer">
        <ProductPreview />
        <ProductDetail />
      </div>
    </div>
  );
}

export default App;
