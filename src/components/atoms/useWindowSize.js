import React, { useEffect, useState } from 'react'

const getWindowParams = ({ forMobile, forTablet, forDesktop }) => {
  if (window.innerWidth < 768) {
    return forMobile
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    return forTablet
  } else {
    return forDesktop
  }
}
export default function UseWindowSize({ forMobile, forTablet, forDesktop }) {
  const [windowSize, setWindowSize] = useState(
    getWindowParams({ forMobile, forTablet, forDesktop })
  )
  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowParams({ forMobile, forTablet, forDesktop }))
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
