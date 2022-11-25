import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ children, onClick }) {
  return (
    <div
      onClick={() => {
        onClick()
      }}
      className={`${
        onClick && 'cursor-pointer'
      } bg-white rounded-lg border-secondary shadow-xl w-auto rounded-sm hover:bg-gray-200`}
    >
      {children}
    </div>
  )
}
