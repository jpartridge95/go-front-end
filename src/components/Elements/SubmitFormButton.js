import React, { useState, useEffect } from 'react';

const SubmitFormButton = ({ text, action }) => {

    const actionChain = (e) => {
        if (e.keyCode === "Enter") {
            return action(e)
        }
    }

    return (
        <button onKeyDown={actionChain} onClick={action}>{text}</button>
    )
}

export default SubmitFormButton