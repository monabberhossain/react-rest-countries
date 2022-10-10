import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, region, area, population, flags} = props.country;
    return (
        <div className='country'>
            <div className='country-name'>
                <h1>{name.common}</h1>
            </div>
            <div className='country-info'>
                <div className='country-desc'>
                    <h3>Capital: {capital}</h3>
                    <h4>Region: {region}</h4>
                    <h5>Area: {area}</h5>
                    <h5>Population: {population}</h5>
                </div>
                <div className='country-flag'>
                    <img src={flags.png} alt="" />
                </div>
            </div>            
        </div>
    );
};

export default Country;