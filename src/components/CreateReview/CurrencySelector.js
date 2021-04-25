import React, { useState, useEffect } from 'react';

const CurrencySelector = () => {

    const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
    const [otherCurrencyMenu, setOtherCurrencyMenu] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState(null)

    const changeVisibility = (e) => {
        e.preventDefault()
        setShowCurrencyMenu(!showCurrencyMenu)
    }

    const changeOtherView = (e) => {
        e.preventDefault()
        setOtherCurrencyMenu(!otherCurrencyMenu)
    }

    return (
        <div>
            <button onClick={changeVisibility} >Currency</button>
            {!showCurrencyMenu ? null :
            <div>
                <button>£</button>
                <button>$</button>
                <button>€</button>
                <button onClick={changeOtherView} >other</button>
                {!otherCurrencyMenu ? null :
                <input type="text" ></input>
                }
            </div>
            }
        </div>
    )
}

export default CurrencySelector