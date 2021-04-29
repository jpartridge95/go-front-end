import React, { useState, useEffect } from 'react';
import ReviewForm from './CreateReview/ReviewForm';
import NavBar from './Elements/NavBar';
import SeeSubmittedReview from "./CreateReview/SeeSubmittedReview"

const CreateReview = () => {

    const [reviewSubmitted, setReviewSubmitted] = useState(false)
    const [reviewPostedID, setReviewPostedID] = useState(undefined)

    const toggleReviewSubmitted = (data) => {
        setReviewSubmitted(true)
        setReviewPostedID(data)
    }

    return (
        <div>
            <NavBar />
            {
                !reviewSubmitted ?
                <ReviewForm action={toggleReviewSubmitted} /> :
                <SeeSubmittedReview linkTarget={reviewPostedID} />
            }
        </div>
    )
}

export default CreateReview