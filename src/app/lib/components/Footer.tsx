import React from 'react'

function Footer() {
  return (
    <div className="my-2 flex justify-center">
      ©{(new Date()).getFullYear()} fullstack.chat
    </div>
  )
}

export default Footer