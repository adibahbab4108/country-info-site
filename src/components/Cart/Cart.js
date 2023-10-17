import React from 'react';

const Cart = (props) => {
const cart=props.cart;
console.log(cart);
const totalPopulation=cart.reduce((sum,country)=>sum+country.population,0);
    return (
        <div>
            <h2>Total Population : {totalPopulation}</h2>
        </div>
    );
};

export default Cart;