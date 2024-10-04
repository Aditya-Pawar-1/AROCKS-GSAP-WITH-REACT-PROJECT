import React from 'react'
import LoadingChild from './LoadingChild'

const LoadingParent = () => {
  return (
    <div className='h-1 w-full z-50 fixed bg-transparent'>
        <LoadingChild />
    </div>
  )
}

export default LoadingParent