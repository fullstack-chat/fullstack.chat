import React from 'react'
import { UserInfo } from '../models'
import UiCard from './UiCard'

type Params = {
  userInfo: UserInfo
}

function UserProfileCard({ userInfo }: Params) {
  return (
    <UiCard>
      <div className='italic'>profile img here</div>
      <div className='italic'>users name here</div>
      <div className='text-sm'>@{ userInfo.username }</div>
      <div className=''>{ userInfo.tagline }</div>
    </UiCard>
  )
}

export default UserProfileCard