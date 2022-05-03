import React from "react"; 
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./Globalstyles";
import Hero from './Components/Hero';
import Products from "./Components/Products";
import { productData } from'./Components/Products/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your Favorite' daata={productData}/>
    </Router>
  );
}

export default App;
