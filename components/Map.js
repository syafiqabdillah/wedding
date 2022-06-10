import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function Map(props) {
  const location = [-6.351298, 106.8312263]

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
      className={`overflow-hidden h-[200px] md:h-[500px] rounded-xl mt-4 ${props.className}`}
      data-aos="zoom-in"
    >
      <MapContainer
        center={location}
        zoom={15}
        scrollWheelZoom={true}
        className={`w-full h-full z-0`}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={icon}
          position={location}
          onClick={() => console.log('yaho')}
        />
      </MapContainer>
    </div>
  )
}

export default Map
