import React, { useState, useEffect } from 'react';

const StarField = ({ updateScore, starRating }) => {

    return (
        <div>
            <button id="1" onClick={updateScore}>*</button>
            <button id="2" onClick={updateScore}>*</button>
            <button id="3" onClick={updateScore}>*</button>
            <button id="4" onClick={updateScore}>*</button>
            <button id="5" onClick={updateScore}>*</button>
            <p>{starRating}/5 Stars</p>
        </div>
    )
}

export default StarField