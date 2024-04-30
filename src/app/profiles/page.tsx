'use client'
import React, { useEffect, useState } from 'react'
import { getPublicProfiles } from '../lib/actions'
import { UserInfo } from '../lib/models'
import UserProfileCard from '../lib/components/UserProfileCard'
import LoadingView from '../views/LoadingView'

function Profiles() {
  const [profiles, setProfiles] = useState<UserInfo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      let p = await getPublicProfiles()
      setProfiles([...p])
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <h1>Profiles</h1>
      <div>Members of our amazing community:</div>
      {isLoading && <LoadingView />}
      <div className='grid grid-cols-3 gap-4'>
        {profiles.map((p, i) => <UserProfileCard key={i} userInfo={p} />)}
      </div>
    </div>
  )
}

export default Profiles