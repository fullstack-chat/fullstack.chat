import React from 'react'
import { UserInfo } from '../models'
import UiCard from './UiCard'
import Image from 'next/image'

type Params = {
  userInfo: UserInfo
}

function UserProfileCard({ userInfo }: Params) {
  return (
    <UiCard>
      <Image
        src={userInfo.imageUrl || '/images/default-profile.png'}
        width={75}
        height={75}
        alt={''}
        className='rounded-full' />
      {/* <div className='italic'>users name here</div> */}
      <div className='text-sm'>@{ userInfo.username }</div>
      <div className=''>{ userInfo.tagline }</div>
    </UiCard>
  )
}

export default UserProfileCard