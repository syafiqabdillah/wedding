import React from 'react'

function LightText(props) {
  return (
    <p className={`font-extralight text-themetext ` + props.className}>
      {props.children}
    </p>
  )
}

export default LightText
