import React from 'react'

function Section(props) {
  return (
    <section
      id={props.id ? props.id : ''}
      className={`min-h-screen flex flex-col  justify-center items-center relative text-center  overflow-x-hidden px-2 bg-white bg-opacity-20 ${props.className}`}
    >
      {props.children}
    </section>
  )
}

export default Section
