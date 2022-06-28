import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCommentDots,
  faHandshake,
  faHome,
  faImagePortrait,
  faImages,
  faLocationDot,
  faRing,
} from '@fortawesome/free-solid-svg-icons'

const menus = [
  {
    icon: faHome,
    id: 'home',
    label: 'Home',
  },
  {
    icon: faHandshake,
    id: 'acara',
    label: 'Acara',
  },
  {
    icon: faLocationDot,
    id: 'lokasi',
    label: 'Lokasi',
  },
  {
    icon: faImages,
    id: 'galeri',
    label: 'Galeri',
  },
  {
    icon: faCommentDots,
    id: 'doa',
    label: 'Pesan',
  },
]

function onClickNavItem(id) {
  console.log('to', id)
  try {
    document.getElementById(id).scrollIntoView()
  } catch (err) {}
}

function NavigationItem({ id, icon, label = '' }) {
  return (
    <div
      className="flex justify-center w-12 items-center text-themeprimary cursor-pointer hover:brightness-110 flex-col gap-1"
      onClick={() => onClickNavItem(id)}
    >
      <FontAwesomeIcon icon={icon} className="h-6" />
      <p className="text-xs">{label}</p>
    </div>
  )
}

function Navigation({ showCover }) {
  return (
    <div
      className={`z-100 fixed bottom-0 left-0 w-full h-20 bg-white shadow flex justify-evenly sm:justify-center sm:gap-16 transition-all duration-1000 ${
        showCover ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ zIndex: '100000' }}
    >
      {menus.map((item) => (
        <NavigationItem
          key={item.id}
          icon={item.icon}
          id={item.id}
          label={item.label}
        />
      ))}
    </div>
  )
}

export default Navigation
