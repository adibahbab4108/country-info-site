import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountry(data))
  }, [])

  const handleAddClick = (countryDetails) => {
    const country = countryDetails;
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Country Loaded:{countries.length}</h1>
      <p>Country Added: {cart.length}</p>
      <div> <Cart cart={cart} ></Cart></div>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddClick={handleAddClick}></Country>)
        }
      </ul>

    </div>
  );
}

export default App;
