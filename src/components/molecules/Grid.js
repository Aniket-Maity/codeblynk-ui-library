import React from 'react'
import PropTypes from 'prop-types'
export default function Grid(props) {
  let { flow, repeat, gap, gapX, gapY, children, className } = props
  const gapNormal = gap ? 'gap-' + gap : ''
  const gapNormalX = gapX ? 'gap-x-' + gapX : ''
  const gapNormalY = gapY ? 'gap-y-' + gapY : ''
  const gridFlowRepeat = `grid-${flow}-${repeat}`
  let classNameAlt = [
    'grid',
    gapNormal,
    gapNormalX,
    gapNormalY,
    gridFlowRepeat
  ].join(' ')

  return (
    <div
      // className="grid gap-1   grid-cols-2"
      key={flow}
      className={classNameAlt ? classNameAlt : ''}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  flow: PropTypes.string,
  repeat: PropTypes.number,
  gap: PropTypes.number,
  gapY: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string
}
Grid.defaultProps = {
  flow: 'cols',
  repeat: 2,
  gap: 1
}
