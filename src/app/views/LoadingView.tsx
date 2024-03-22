import React from 'react'
import { CgSpinner } from 'react-icons/cg'

function LoadingView() {
  return (
    <div className='pt-16 flex items-center justify-center'>
      <CgSpinner className='animate-spin text-6xl' />
    </div>
  )
}

export default LoadingView