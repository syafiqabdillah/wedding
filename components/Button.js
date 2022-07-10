import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <div
      className={`px-4 py-2 hover:cursor-pointer rounded-md disabled:${props.disabled} bg-themeprimary hover:brightness-110 text-white ${props.className}`}
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
