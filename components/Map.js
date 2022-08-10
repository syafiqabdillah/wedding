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
      className={`overflow-hidden opacity-90 border border-themeprimary h-[40vh] md:h-[50vh] mt-4 ${props.className}`}
    >
      {/* <MapContainer
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
      </MapContainer> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3336207216585!2d106.82920475043181!3d-6.350834695381669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec3a9517d101%3A0x895775594e85e9ac!2sFelfest%20UI%20Faculty%20Club%20Universitas%20Indonesia!5e0!3m2!1sen!2sid!4v1660143891103!5m2!1sen!2sid"
        width="600"
        height="450"
        style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
