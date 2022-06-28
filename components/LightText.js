import React from 'react'

function LightText(props) {
  return (
    <p className={`font-extralight ` + props.className}>{props.children}</p>
  )
}

export default LightText
