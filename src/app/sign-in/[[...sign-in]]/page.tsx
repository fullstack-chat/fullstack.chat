import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
  return (
    <div className='w-100 h-100 flex items-center justify-center'>
      <SignIn />
    </div>
  )
}

export default SignInPage