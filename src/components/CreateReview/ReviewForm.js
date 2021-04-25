import React, { useState, useEffect } from 'react';
import SubmitFormButton from '../Elements/SubmitFormButton';
import StarField from './StarField';
import MapBox from "./MapBox"

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
            <label>Name</label>
            <input type="text"></input>
            <label>Score</label>
            <input type="file" />
            <StarField starRating={score} updateScore={updateScore} />
            <MapBox latLng={updateLatLng}/>
            <SubmitFormButton text="Submit Review"/>
        </form>
    )
}

export default ReviewForm