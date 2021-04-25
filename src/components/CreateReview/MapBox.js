import { map } from 'leaflet';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet"

const MapBox = ({ latLng }) => {

    const [location, setLocation] = useState([53.4035, -2.9908])
    const [markerLocation, setMarkerLocation] = useState(null)

    const setMarker = (e) => {
        setMarkerLocation(e)
    }

    useEffect(() => {
        latLng(markerLocation)
    }, [markerLocation])

    return (
        <MapContainer 
            style={{height:"500px", width:"500px"}} 
            center={location} 
            zoom={13} 
            scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker setMarker={setMarker}/>
        </MapContainer>
    )
}

export default MapBox

function LocationMarker({ setMarker }) {

    const [position, setPosition] = useState(null)

    const map = useMapEvent("click", (e) => {
        const point = e.latlng
        setPosition(point)
        console.log(point)
        setMarker(point)
    })
    
  
    return position === null ? null : (
      <Marker position={position}>
      </Marker>
    )
}