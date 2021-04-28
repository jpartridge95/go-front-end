import React, { useState, useEffect } from 'react';
import SubmitFormButton from '../Elements/SubmitFormButton';
import StarField from './StarField';
import MapBox from "./MapBox"
import CurrencySelector from './CurrencySelector';
import axios from "axios"

const ReviewForm = () => {

    // Hooo boy! Think I'm doing state wrong 'cause this a lot of it.

    const [score, setScore] = useState(3)
    const [latLng, setLatLng] = useState(null)
    const [selectedCurrency, setSelectedCurrency] = useState(null)
    const [productName, setProductName] = useState(null)
    const [pricePaid, setPricePaid] = useState(null)
    const [storeName, setStoreName] = useState(null)
    const [reviewText, setReviewText] = useState(null)
    const [imageFile, setImageFile] = useState()
    const [readerResult, setReaderResult] = useState()
    const [buffer, setBuffer] = useState(null)
    const [errorMessage, setErrorMessage] = useState(false)
    const [reviewID, setReviewID] = useState(null)

    const handleNameChange = (e) => {
        setProductName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPricePaid(e.target.value)
    }

    const handleStoreChange = (e) => {
        setStoreName(e.target.value)
    }

    const handleReviewChange = (e) => {
        setReviewText(e.target.value)
    }

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0])
    }

    // step one for image encoding ready for db insertion

    useEffect(() => {
        const blob = new Blob([imageFile], {type:"image/png"})
        const arrayBuffer = blob.arrayBuffer()
            .then((buffer) => {
                setBuffer(buffer)
            })
    }, [imageFile])

    // step two for image encoding for db insertion, ideally for testing and debugging
    // I would seperate them into three, however, this is stable and I currently have no
    // desire to change that. 

    useEffect(() => {
        if (buffer != null && buffer.byteLength < 1048576 * 2) {
            const dataViewer = new DataView(buffer)
            let binary = [];
            const len = dataViewer.byteLength;
            for (let i = 0; i < len; i++) {
                binary.push(dataViewer.getUint8(i));
            }
            
            const CHUNK_SIZE = 0x8000;
            let index = 0;
            const length = binary.length;
            let result = '';
            let slice;
            while (index < length) {
                slice = binary.slice(index, Math.min(index + CHUNK_SIZE, length)); 
                result += String.fromCharCode.apply(null, slice);
                index += CHUNK_SIZE;
            }

            const b64encoded = btoa(result);

            console.log(b64encoded)

            setReaderResult(b64encoded)

            if (errorMessage === true) {
                setErrorMessage(!errorMessage)
            }
            
        } if (buffer != null && buffer.byteLength > 1048576 * 2) {
            if (errorMessage === false) { 
                setErrorMessage(!errorMessage)
            }
        }
    }, [buffer])

    const updateScore = (e) => {
        e.preventDefault();
        const newScore = parseInt(e.target.id)
        setScore(newScore)
    }

    const updateCurrency = (e) => {
        setSelectedCurrency(e)
    }

    const updateLatLng = (e) => {
        setLatLng(e)
    }

    useEffect(() => {
        setLatLng(latLng)
    }, [latLng])

    const postForm = (e) => {
        e.preventDefault()
        let form = new FormData()
        form.append("productName",productName)
        form.append("productImage",readerResult)
        form.append("score",score)
        form.append("locationBought",storeName)
        form.append("boughtFromLat",latLng.lat)
        form.append("boughtFromLong",latLng.lng)
        form.append("pricePaid",pricePaid)
        form.append("currency",selectedCurrency)
        form.append("fullReview",reviewText)
        form.append("createdBy","1")

        // for (var key of form.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }

        axios({
            method: "POST",
            url: "http://localhost:9001/reviews/create",
            data: form,
            headers: {
                "Content-Type":"multipart/form-data; charset=utf-8; boundary='seperator'"
            }
        }).then((res) => setReviewID(res.data))
        .catch((err) => console.log(err))
    }

    return (
        <form>
            <label>Product name</label>
            <input type="text" onChange={handleNameChange} ></input>

            <label>Score</label>
            <StarField starRating={score} updateScore={updateScore} />

            <label>Price Paid {selectedCurrency}{pricePaid}</label>
            <input type="number" onChange={handlePriceChange} ></input>
            <CurrencySelector action={updateCurrency}/>

            <MapBox latLng={updateLatLng}/>

            <label>Name of store</label>
            <input type="text" onChange={handleStoreChange} ></input>

            <label>Full review</label>
            <textarea onChange={handleReviewChange}></textarea>

            <input type="file" accept="image/*" onChange={handleFileChange} ></input>
            {
                errorMessage ?
                <p>Please Upload an image less than 2MB in size</p>:
                <img src={"data:image/jpeg;base64,"+readerResult}></img>
            }

            <SubmitFormButton text="Submit Review" action={postForm}/>
        </form>
    )
}

export default ReviewForm