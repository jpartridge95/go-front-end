import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const SeeSubmittedReview = ({ linkTarget }) => {

    let route = "/review/" + linkTarget

    return (
        <div>
            <Link to={route}>Click to see my newest review</Link>
        </div>
    ) 
}

export default SeeSubmittedReview;