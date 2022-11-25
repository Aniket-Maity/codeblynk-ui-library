import React from 'react'
import Text from '../atoms/Text'
import PropTypes from 'prop-types'
export default function ProgressList({ listData, vertical }) {
  return (
    <div>
      <div className='p-2'>
        {vertical ? (
          <div>
            {listData.map((uData, idx) => (
              <div className='flex flex-row' key={idx}>
                <div className='w-5 h-5 border-dotted border-2 border-black  rounded-full flex justify-center content-center'>
                  {uData.isActive && (
                    <div className='w-3 h-3 m-0.5 rounded-full bg-primary'></div>
                  )}
                </div>
                <div className={`w-full   duration-${(idx + 1) * 200}`}>
                  <div className='px-4 animate-listView'>{uData.label}</div>
                  <div className='flex felx-row'>
                    <div
                      className={`${
                        idx < listData.length - 1 &&
                        'border-dotted border-l-2 border-black'
                      } -ml-2.5 -mt-1`}
                    ></div>
                    <div className='px-4 animate-listView'>
                      <Text>{uData.content}</Text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex flex-row overflow-auto'>
            {listData.map((uData, idx) => (
              <div key={idx} className=''>
                <div className='w-5 h-5 border-dotted border-2 border-black  rounded-full flex justify-center content-center'>
                  {uData.isActive && (
                    <div className='w-3 h-3 m-0.5 rounded-full bg-primary'></div>
                  )}
                </div>
                <div className={`w-full   duration-${(idx + 1) * 200}`}>
                  <div
                    className={`${
                      idx < listData.length - 1 &&
                      'border-dotted border-t-2 border-black'
                    } -mt-2.5 ml-4`}
                  >
                    {uData.label}
                  </div>
                  <div className='flex felx-row'>
                    <div></div>
                    <div className='px-2 animate-listView'>
                      <Text>{uData.content}</Text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

ProgressList.propTypes = {
  listData: PropTypes.array,
  vertical: PropTypes.bool
}
ProgressList.defaultProps = {
  vertical: true
}
