import React from 'react'

function Button(props) {
  return (
    <a
      className={`px-4 py-2 rounded-xl bg-blue-300 hover:bg-blue-400 text-white ${props.className}`}
      onClick={props.onClick}
      href={props.href ? props.href : '#'}
    >
      {props.children}
    </a>
  )
}

export default Button
