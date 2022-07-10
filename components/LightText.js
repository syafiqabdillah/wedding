import React from 'react'

function LightText(props) {
  return (
    <p
      onClick={() => (props.onClick ? props.onClick() : null)}
      className={`font-extralight ` + props.className}
    >
      {props.children}
    </p>
  )
}

export default LightText
