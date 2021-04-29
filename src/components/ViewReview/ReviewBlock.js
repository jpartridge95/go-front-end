import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EditDelete from '../Elements/EditDelete';
import StarDisplay from "../Elements/StarDisplay"
import DisplayMap from './DisplayMap';
import Price from "./Price"

const ReviewBlock = ({ reviewID }) => {

    const [productName, setProductName] = useState()
    const [productImage, setProductImage] = useState("")
    const [score, setScore] = useState()
    const [pricePaid, setpricePaid] = useState()
    const [currency, setCurrency] = useState()
    const [boughtFromLat, setBoughtFromLat] = useState(0)
    const [boughtFromLong, setBoughtFromLong] = useState(0)
    const [locationBought, setLocationBought] = useState()
    const [fullReview, setFullReview] = useState()
    const [createdBy, setCreatedBy] = useState()

    useEffect(() => {
            axios({
                method: "GET",
                url: `http://localhost:9001/reviews/byid/${reviewID}`,
                headers: {
                    "Content-Type": "application/json"
                }

            }).then((res) => {

                let { 
                    productName,
                    productImage,
                    score,
                    pricePaid,
                    currency,
                    boughtFromLat,
                    boughtFromLong,
                    locationBought,
                    fullReview,
                    createdBy
                } = res.data

                setProductName(productName)
                setProductImage(productImage)
                setScore(score)
                setpricePaid(pricePaid)
                setCurrency(currency)
                setBoughtFromLat(boughtFromLat)
                setBoughtFromLong(boughtFromLong)
                setLocationBought(locationBought)
                setFullReview(fullReview)
                setCreatedBy(createdBy)

            }).catch((err) => console.log(err))
    }, [reviewID])

    return (
        <main>
            <h1>{productName}</h1>
            <img 
                style={{height:"500px",width:"500px"}} 
                src={"data:image/jpeg;base64," + (productImage)}
                alt={"Image showing " + productName} >
            </img>
            <StarDisplay score={score} />
            <p>Bought from {locationBought}</p>
            {[boughtFromLat, boughtFromLong] !== [0,0] && <DisplayMap markerPosition={[boughtFromLat, boughtFromLong]} />}
            <Price amount={pricePaid} currency={currency} productName={productName} />
            <article>
                <h4>What (user) had to say about the item</h4>
                <p>{fullReview}</p>
            </article>
            <EditDelete editDeleteTarget={"review"} />
        </main>
    )
}

export default ReviewBlock