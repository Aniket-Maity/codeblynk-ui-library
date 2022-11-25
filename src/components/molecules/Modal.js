import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
export default function Modal({
  display,
  modalType,
  modalHeader,
  children,
  modalDisplayControler
}) {
  let closeIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
  let [curDisplay, setCurDisplay] = useState(display)
  useEffect(() => {
    setCurDisplay(display)
  }, [display])
  console.log('inside', display, curDisplay)
  return (
    <div>
      {curDisplay && (
        <div>
          {modalType === 'right-sidebar' ? (
            <div>
              <div className='bg-neutral-gray bg-opacity-50 absolute inset-0 flex justify-center md:justify-end items-center '>
                <div className='bg-gray md:w-1/3 md:h-full w-full h-full overflow-auto'>
                  <div className='flex flex-row justify-between'>
                    <div className='px-2'>{modalHeader}</div>
                    <div
                      className='cursor-pointer p-1'
                      onClick={() => {
                        setCurDisplay(false)
                        modalDisplayControler(false)
                      }}
                    >
                      {closeIcon}
                    </div>
                  </div>
                  <div>{children}</div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className='bg-neutral-gray bg-opacity-50 absolute inset-0 flex justify-center items-center'>
                <div className='bg-neutral-gray rounded'>
                  <div className='flex flex-row justify-between'>
                    <div className='px-2'>{modalHeader}</div>
                    <div
                      className='cursor-pointer p-1'
                      onClick={() => {
                        setCurDisplay(false)
                        modalDisplayControler(false)
                      }}
                    >
                      {closeIcon}
                    </div>
                  </div>
                  <div>{children}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
Modal.propTypes = {
  display: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  modalHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}
Modal.defaultProps = {
  display: false,
  modalType: 'right-sidebar'
}
