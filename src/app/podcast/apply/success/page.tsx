import JoinButton from '@/app/lib/components/JoinButton'
import React from 'react'

function Page() {
  return (

    <header className="flex flex-col gap-2">
      <h1>Thanks for applying!</h1>
      <p className="lg:text-lg text-balance md:max-w-prose">
        If we feel you're a good fit for the show, we'll reach out to schedule! In the meantime, join the Discord if you aren't already a member and introduce yourself!
      </p>
      <div className='flex'>
        <JoinButton />
      </div>
    </header>
  )
}

export default Page