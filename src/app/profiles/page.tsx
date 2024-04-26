'use client'
import React, { useEffect, useState } from 'react'
import { getPublicProfiles } from '../actions'
import { UserInfo } from '../models'
import UserProfileCard from '../components/UserProfileCard'

function Profiles() {
  const [profiles, setProfiles] = useState<UserInfo[]>([])

  useEffect(() => {
    async function fetchData() {
      let p = await getPublicProfiles()
      setProfiles([...p])
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <h1>Profiles</h1>
      <div>Members of our amazing community:</div>
      <div className='grid grid-cols-3 gap-4'>
        {profiles.map((p, i) => <UserProfileCard key={i} userInfo={p} />)}
      </div>
    </div>
  )
}

export default Profiles