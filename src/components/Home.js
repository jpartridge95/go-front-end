import React, { useState, useEffect } from 'react';
import NavBar from "./Elements/NavBar.js";
import SignIn from './Home/SignIn.js';
import Content from "./Home/Content.js"

const Home = () => {
    return (
        <div>
            <NavBar />
            <SignIn />
            <Content />
        </div>
    )
}

export default Home