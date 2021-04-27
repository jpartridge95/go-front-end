import React, { useState, useEffect } from 'react';

const CurrencySelector = ({ action }) => {

    const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
    const [otherCurrencyMenu, setOtherCurrencyMenu] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState("(no currency selected)")

    const changeVisibility = (e) => {
        e.preventDefault()
        setShowCurrencyMenu(!showCurrencyMenu)
    }

    const changeOtherView = (e) => {
        e.preventDefault()
        setOtherCurrencyMenu(!otherCurrencyMenu)
    }

    const handleOtherCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value)
    }

    const handleCurrencyClick = (e) => {
        e.preventDefault(e)
        setSelectedCurrency(e.target.id)
        setShowCurrencyMenu(!showCurrencyMenu)
    } 

    useEffect(() => {
        action(selectedCurrency)
    }, [selectedCurrency])

    return (
        <div>
            <button onClick={changeVisibility} >Currency</button>
            {!showCurrencyMenu ? null :
            <div>
                <button id="£" onClick={handleCurrencyClick} >£</button>
                <button id="$" onClick={handleCurrencyClick} >$</button>
                <button id="€" onClick={handleCurrencyClick} >€</button>
                <button onClick={changeOtherView} >other</button>
                {!otherCurrencyMenu ? null :
                <div>
                    <input type="text" onChange={handleOtherCurrencyChange} ></input>
                    <button onClick={changeVisibility}>Hide</button>
                </div>
                }
            </div>
            }
        </div>
    )
}

export default CurrencySelector