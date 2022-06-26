import React from 'react'

function Heading(props) {
  return (
    <h2 className="mb-4 text-5xl font-greatvibes font-bold tracking-widest text-themeprimary">
      {props.children}
    </h2>
  )
}

export default Heading
