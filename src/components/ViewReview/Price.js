import React, { useState, useEffect } from 'react';

const Price = ({ currency, amount, productName }) => {
    
    return (
        <div>
            <h4>Price Paid for {productName}</h4>
            <p>{currency}{amount}</p>
        </div>
    )
}

export default Price