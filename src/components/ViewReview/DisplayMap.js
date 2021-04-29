import { map } from 'leaflet';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

const FlyTo = ({ markerPosition }) => {

    const map = useMap()

    useEffect(() => {
        map.flyTo(markerPosition, 16, {duration: 6})
    }, [markerPosition])

    return null
}

const DisplayMap = ({ markerPosition }) => {

    return (
        <MapContainer 
            style={{height:"500px", width:"500px"}} 
            center={markerPosition} 
            zoom={11} 
            scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition}>
                </Marker>
            <FlyTo markerPosition={markerPosition} />
        </MapContainer>
    )
}

export default DisplayMap