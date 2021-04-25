import React, { useState, useEffect } from 'react';
import CallToActionButton from './CallToActionButton';
import SignedIn from "./SignedIn"

const NavBar = () => {

    const [signInState, setSignInState] = useState({
        "signedIn": false,
        "userID": null
    })

    // Get signed in user, do this when review feed is working

    return (
        <div>
            <h1>AnyReview</h1>
            {!signInState["signedIn"] ?
                <CallToActionButton text="Sign in" /> : 
                <SignedIn userID={signInState["userID"]}/>}
        </div>
    )
}

export default NavBar;