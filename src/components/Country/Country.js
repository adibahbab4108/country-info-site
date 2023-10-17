import React from 'react';

const Country = (props) => {
    const countryDetails = props.country;
    const { name, population, region } = props.country;
    const { png } = props.country.flags;
    const flagStyle = { height: '50px' };
    const countryStyle = { border: '2px solid black', margin: '15px', borderRadius: '5px', padding: '5px' };
    const handleAddClick=props.handleAddClick;
    
    // console.log(props.country);
    return (
        <div style={countryStyle}>
            <h4>Country Name: {name.common}</h4>
            <img style={flagStyle} src={png} alt="" />
            <p>Population: {population}</p>
            <p>Region : {region}</p>
            <button onClick={()=>handleAddClick(countryDetails)}>Add</button>
        </div>
    );
};

export default Country;