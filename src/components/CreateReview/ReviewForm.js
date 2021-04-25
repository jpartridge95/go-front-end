import React, { useState, useEffect } from 'react';
import SubmitFormButton from '../Elements/SubmitFormButton';
import StarField from './StarField';
import MapBox from "./MapBox"

const ReviewForm = () => {

    const [score, setScore] = useState(3)

    const updateScore = (e) => {
        e.preventDefault();
        const newScore = parseInt(e.target.id)
        setScore(newScore)
    }

    // update lat/long func(e) => state(e.target.loc)

    return (
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Score</label>
            <input type="file" />
            <StarField starRating={score} updateScore={updateScore} />
            <MapBox />
            <SubmitFormButton text="Submit Review"/>
        </form>
    )
}

export default ReviewForm