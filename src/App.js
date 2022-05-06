import React from "react"; 
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./Globalstyles";
import Hero from './Components/Hero';
import Products from "./Components/Products";
import { productData, productDataTwo } from'./Components/Products/data'
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your Favorite' data={productData}/>
      <Feature />
      <Products heading='Snacks  for you' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
