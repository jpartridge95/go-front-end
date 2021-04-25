import React, { useState, useEffect } from 'react';

const ShortFeed = ({ title, desc, img, score, id }) => {

    return (
        <div id={id}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>{score}/5</p>
                <img src={img} ></img>
            </div>
        </div>
    )
}

export default ShortFeed