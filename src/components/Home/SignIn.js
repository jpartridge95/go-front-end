import React, { useState, useEffect } from 'react';
import CallToActionButton from "../Elements/CallToActionButton.js"

const SignIn = () => {

    return (
        <div>
            <form>
                <input type="text"></input>
                <CallToActionButton text="Sign in" />
            </form>
        </div>
    )
}

export default SignIn