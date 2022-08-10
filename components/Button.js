import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  function onClick() {
    if (!props.disabled && !props.loading) {
      props.onClick()
    }
  }
  return (
    <div
      className={`px-4 py-2 hover:cursor-pointer disabled:${
        props.disabled
      } border ${
        props.disabled
          ? 'border-gray-200 text-gray-400'
          : 'border-themeprimary bg-paper hover:text-themebg hover:bg-themeprimary '
      }  text-themeprimary font-light  transition duration-300 ${
        props.className
      }`}
      onClick={onClick}
    >
      {props.children}
    </div>
  )
}

Button.defaultProps = {
  disabled: false,
  loading: false,
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
}

export default Button
