import React from 'react'

function Button(props) {
  return (
    <div
      className={`px-4 py-2 hover:cursor-pointer rounded-md bg-themeprimary hover:brightness-110 text-themebg ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Button
