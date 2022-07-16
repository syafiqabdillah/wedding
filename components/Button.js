import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <div
      className={`px-4 py-2 hover:cursor-pointer disabled:${
        props.disabled
      } border ${
        props.disabled ? 'border-gray-200' : 'border-themeprimary'
      } hover:brightness-110 text-themeprimary font-light hover:text-themebg hover:bg-themeprimary transition duration-300 ${
        props.className
      }`}
      onClick={() => (props.disabled ? null : props.onClick())}
    >
      {props.children}
    </div>
  )
}

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
