import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ flat, size, className, ...props }) => {
  const inputSize =
    size === 'small'
      ? 'w-36 h-6 text-sm'
      : size === 'large'
      ? 'h-7 text-lg'
      : size === 'full'
      ? 'min-w-full h-7 text-base'
      : 'w-48 h-7 text-base'
  return (
    <input
      className={`
      focus:outline-none active:bg-neutral-gray rounded-lg px-2 ${[
        flat ? 'border-1 border-secondary' : 'border-2 border-secondary',
        'rounded-sm',
        inputSize,
        className
      ].join(' ')}`}
      {...props}
    />
  )
}
Input.propTypes = {
  flat: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'date', 'number', 'file', 'email'])
    .isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}
Input.defaultProps = {
  flat: false,
  type: 'text',
  size: 'medium',
  onChange: undefined
}

export default Input
