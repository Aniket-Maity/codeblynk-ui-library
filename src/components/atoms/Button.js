import React from 'react'
import PropTypes from 'prop-types'
export default function Button({
  children,
  className,
  onClick,
  flat,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`focus:outline-none focus:ring focus:ring-offset-2   ${
        flat ? 'border-2 border-secondary' : 'bg-secondary'
      } ${className}
            ${
              flat
                ? 'active:bg-secondary text-primary'
                : 'active:bg-black text-white'
            }
            rounded-lg`}
    >
      <div className='px-2'>{children}</div>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  flat: PropTypes.bool
}

Button.defaultProps = {
  onClick: undefined,
  className: '',
  flat: false
}
