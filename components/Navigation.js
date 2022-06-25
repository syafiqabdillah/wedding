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
  },
  {
    icon: faHandshake,
    id: 'acara',
  },
  {
    icon: faLocationDot,
    id: 'lokasi',
  },
  {
    icon: faImages,
    id: 'galeri',
  },
  {
    icon: faCommentDots,
    id: 'doa',
  },
]

function onClickNavItem(id) {
  console.log('to', id)
  try {
    document.getElementById(id).scrollIntoView()
  } catch (err) {}
}

function NavigationItem({ id, icon }) {
  return (
    <div
      className="flex justify-center items-center cursor-pointer hover:brightness-110"
      onClick={() => onClickNavItem(id)}
    >
      <FontAwesomeIcon icon={icon} className="h-6 text-brownprimary" />
    </div>
  )
}

function Navigation() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-brownsecondary flex justify-evenly sm:justify-center sm:gap-16">
      {menus.map((item) => (
        <NavigationItem key={item.id} icon={item.icon} id={item.id} />
      ))}
    </div>
  )
}

export default Navigation
