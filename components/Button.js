import React from 'react'

function Button(props) {
  return (
    <a
      className={`px-4 py-2 hover:cursor-pointer rounded-md bg-brownprimary hover:brightness-110 text-brownbg ${props.className}`}
      onClick={props.onClick}
      href={props.href ? props.href : '#'}
    >
      {props.children}
    </a>
  )
}

export default Button
