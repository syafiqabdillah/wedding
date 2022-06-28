import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const location = [-6.351298, 106.8312263]
const ZOOM = 13

function Map(props) {
  const icon = new L.icon({
    iconUrl: '/img/location.png',
    iconRetinaUrl: '/img/location.png',
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
  })
  return (
    <div
      data-aos="fade-up"
      className={`overflow-hidden h-[40vh] md:h-[50vh] mt-4 ${props.className}`}
    >
      <MapContainer
        center={location}
        zoom={ZOOM}
        scrollWheelZoom={false}
        className={`w-full h-full z-0`}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={location} />
      </MapContainer>
    </div>
  )
}

export default Map
