import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'

function Loading() {
  return (
    <div className="text-gray-200 m-8 flex items-center justify-center w-screen text-4xl">
      <FaCircleNotch className="animate-spin"/>
    </div>
  )
}

export default Loading