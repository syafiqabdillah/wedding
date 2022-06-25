import React from 'react'

function Heading(props) {
  return (
    <h2 className="mb-4 text-3xl font-macondo font-bold tracking-wider text-brownprimary">
      {props.children}
    </h2>
  )
}

export default Heading
