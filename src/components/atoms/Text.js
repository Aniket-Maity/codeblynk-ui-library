import React from 'react'
import PropTypes from 'prop-types'
export default function Text({
  type,
  children,
  className,
  severity,
  customColor,
  ...props
}) {
  let size =
    type === 'label'
      ? 'text-xs'
      : type === 'normal'
      ? 'text-normal'
      : type === 'header'
      ? 'text-2xl'
      : type === 'sub-header'
      ? 'text-lg'
      : 'text-sm'
  let color =
    severity === 'info'
      ? 'text-info'
      : severity === 'warning'
      ? 'text-warning'
      : severity === 'error'
      ? 'text-error'
      : severity === 'success'
      ? 'text-success'
      : 'text-primary'

  return (
    <div
      className={`${size} ${className ? className : ''} ${
        customColor ? customColor : color
      }`}
      {...props}
    >
      {children}
    </div>
  )
}

Text.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  severity: PropTypes.string
}
Text.defaultProps = {
  type: 'normal',
  customColor: undefined
}
