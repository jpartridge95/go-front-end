import React, { useState, useEffect } from 'react';
import SubmitFormButton from '../Elements/SubmitFormButton';
import StarField from './StarField';
import MapBox from "./MapBox"
import CurrencySelector from './CurrencySelector';

const ReviewForm = () => {

    const [score, setScore] = useState(3)
    const [latLng, setLatLng] = useState(null)

    const updateScore = (e) => {
        e.preventDefault();
        const newScore = parseInt(e.target.id)
        setScore(newScore)
    }

    const updateLatLng = (e) => {
        setLatLng(e)
    }

    useEffect(() => {
        setLatLng(latLng)
        console.log(latLng)
    }, [latLng])
    // update lat/long func(e) => state(e.target.loc)

    return (
        <form>
            <label>Product name</label>
            <input type="text"></input>
            <label>Score</label>
            <StarField starRating={score} updateScore={updateScore} />
            <label>Price Paid</label>
            <input type="number" ></input>
            <label> $ </label>
            <CurrencySelector />
            <MapBox latLng={updateLatLng}/>
            <label>Name of store</label>
            <input type="text" ></input>
            <label>Full review</label>
            <textarea></textarea>
            <input type="file" ></input>
            <SubmitFormButton text="Submit Review"/>
        </form>
    )
}

export default ReviewForm