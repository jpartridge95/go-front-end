import React, { useState, useEffect } from 'react';
import ReviewForm from './CreateReview/ReviewForm';
import NavBar from './Elements/NavBar';

const CreateReview = () => {

    return (
        <div>
            <NavBar />
            <ReviewForm />
        </div>
    )
}

export default CreateReview