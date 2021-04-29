import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import NavBar from './Elements/NavBar';
import ReviewBlock from './ViewReview/ReviewBlock';

const ViewReview = () => {

    const { id } = useParams()

    return (
        <div>
            <NavBar />
            <ReviewBlock reviewID={id} />
        </div>
    )
}

export default ViewReview