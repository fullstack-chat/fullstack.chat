'use server'

import FaunaService from "./services/FaunaService"
import { auth, currentUser } from '@clerk/nextjs'
import { UserInfo } from './models'

export async function getUserInfo(): Promise<UserInfo | undefined> {
  const a = auth()
  if(!a.userId) {
    throw new Error("login is required")
  }
  const cu = await currentUser()
  let discordId = ''
  if(cu?.externalAccounts) {
    let discordAccountInfo = cu.externalAccounts.find((ea: any) => ea.provider === 'oauth_discord')
    if(discordAccountInfo) {
      discordId = discordAccountInfo.externalId
    }
  }
  if(discordId) {
    const svc = new FaunaService(process.env.FAUNA_SECRET as string)
    const data = await svc.getRecordByIndex('idxUserByUserId', discordId)
    const ui: UserInfo = {
      imageUrl: cu?.imageUrl,
      userId: data.userId,
      username: data.username,
      faunaId: data.id,
      website: data.website,
      twitter: data.twitter,
      youtube: data.youtube,
      linkedin: data.linkedin,
      threads: data.threads,
      twitch: data.twitch,
      tagline: data.tagline
    }
    return ui
  } else {
    throw new Error("discord account is required")
  }
}

export async function getPublicProfiles() {
  // get data from fauna based on user id
  const svc = new FaunaService(process.env.FAUNA_SECRET as string)
  const data = await svc.listRecords('users')
  console.log(data)
}


export type UpdateUserInfoParams = {
  website?: string
  twitter?: string
  youtube?: string
  linkedin?: string
  threads?: string
  twitch?: string
  tagline?: string
}

export async function updateUserInfo(faunaId: string, params: UpdateUserInfoParams) {
  const svc = new FaunaService(process.env.FAUNA_SECRET as string)
  const data = await svc.updateRecord('users', faunaId, {...params})
  console.log(data)
}

// {
//   userId: "385635938241609729",
//   username: "brianmm02"
// }