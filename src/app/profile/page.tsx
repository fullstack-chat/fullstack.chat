'use client'
import React, { useEffect, useState } from 'react'
import { getUserInfo, updateUserInfo } from '../actions'
import { UserInfo } from '../models'
import UiCard from '../components/UiCard'
import Image from 'next/image'

function ProfilePage() {
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [website, setWebsite] = useState<string>()
  const [twitter, setTwitter] = useState<string>()
  const [threads, setThreads] = useState<string>()
  const [linkedin, setLinkedin] = useState<string>()
  const [twitch, setTwitch] = useState<string>()
  const [youtube, setYoutube] = useState<string>()
  const [tagline, setTagline] = useState<string>()

  useEffect(() => {
    async function fetchData() {
      const userInfo = await getUserInfo()
      console.log(userInfo)
      if(userInfo) {
        setUserInfo(userInfo)
        setWebsite(userInfo.website)
        setTwitter(userInfo.twitter)
        setThreads(userInfo.threads)
        setLinkedin(userInfo.linkedin)
        setTwitch(userInfo.twitch)
        setYoutube(userInfo.youtube)
        setTagline(userInfo.tagline)
      }
    }
    fetchData()
  }, [])

  async function save() {
    if(!userInfo) return
    await updateUserInfo(userInfo?.faunaId, {
      website,
      twitter,
      youtube,
      linkedin,
      threads,
      twitch,
      tagline
    })
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <UiCard className='flex flex-col gap-4' title={userInfo?.username}>
          <Image
            src={userInfo?.imageUrl || '/images/default-profile.png'}
            width={75}
            height={75}
            alt={''}
            className='rounded-full' />
          <div className='flex flex-col gap-2'>
            <label>Tagline</label>
            <textarea
              value={userInfo?.tagline}
              onChange={e => setTagline(e.target.value)}
              className='text-black rounded p-1' />
          </div>
        </UiCard>
        <UiCard className='grid grid-cols-2 gap-4' outerClassName='col-span-2' title="Links">
          <div className='flex flex-col gap-2'>
            <label>Website</label>
            <input type="text"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              className='text-black rounded p-1' />
          </div>
          <div className='flex flex-col gap-2'>
            <label>X/Twitter</label>
            <input type="text"
              value={twitter}
              onChange={e => setTwitter(e.target.value)}
              className='text-black rounded p-1' />
          </div>
          <div className='flex flex-col gap-2'>
            <label>YouTube</label>
            <input type="text"
              value={youtube}
              onChange={e => setYoutube(e.target.value)}
              className='text-black rounded p-1' />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Twitch</label>
            <input type="text"
              value={twitch}
              onChange={e => setTwitch(e.target.value)}
              className='text-black rounded p-1' />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Threads</label>
            <input type="text"
              value={threads}
              onChange={e => setThreads(e.target.value)}
              className='text-black rounded p-1' />
          </div>
          <div className='flex flex-col gap-2'>
            <label>LinkedIn</label>
            <input type="text"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              className='text-black rounded p-1' />
          </div>
        </UiCard>
      </div>
      <div className='flex col-span-3'>
        <button onClick={() => save()}
          className='bg-gradient-to-b from-zinc-800 to-zinc-800 hover:from-zinc-700 hover:to-zinc-800 p-2 rounded transition-all'>
          Save
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
