'use server'

import FaunaService from "./services/FaunaService"
import { auth, currentUser } from '@clerk/nextjs/server'
import { DiscordMember, UserInfo } from './models'
import { configurableRoles } from "./data"

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
    const member = await getDiscordMember(discordId)
    if(!member) {
      console.log(member)
      return
    }

    const selectedRoles: string[] = []
    configurableRoles.forEach(role => {
      if(member?.roles?.includes(role.id)) {
        selectedRoles.push(role.id)
      }
    })

    const svc = new FaunaService(process.env.FAUNA_SECRET as string)
    const data = await svc.getRecordByIndex('idxUserByUserId', discordId)

    const ui: UserInfo = {
      imageUrl: cu?.imageUrl,
      userId: data.userId,
      username: member?.user?.username,
      displayName: data.displayName,
      faunaId: data.id,
      website: data.website,
      twitter: data.twitter,
      youtube: data.youtube,
      linkedin: data.linkedin,
      threads: data.threads,
      twitch: data.twitch,
      tagline: data.tagline,
      isPublic: data.isPublic,
      selectedRoles,
    }
    return ui
  } else {
    throw new Error("discord account is required")
  }
}

export async function getDiscordMember(discordUserId: string): Promise<DiscordMember | undefined> {
  const memberRes = await fetch(`https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${discordUserId}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`
    }
  })
  if(memberRes.status === 401) {
    return
  }
  return await memberRes.json() as DiscordMember
}

export async function syncRoles(discordUserId: string, roleIds: string[]) {
  const memberRes = await fetch(`https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${discordUserId}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`
    }
  })
  const member = await memberRes.json() as DiscordMember

  const permittedRoleIds = configurableRoles.map(r => r.id)
  let rolesToRemove: string[] = []
  let rolesToAdd: string[] = []

  permittedRoleIds.forEach(roleId => {
    if(roleIds.includes(roleId)) {
      rolesToAdd.push(roleId)
    } else {
      rolesToRemove.push(roleId)
    }
  })

  const promises: Promise<Response>[] = []

  rolesToRemove.forEach(rid => {
    if(member.roles.includes(rid)) {
      promises.push(fetch(`https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${discordUserId}/roles/${rid}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
      }))
    }
  })

  rolesToAdd.forEach(rid => {
    if(!member.roles.includes(rid)) {
      promises.push(fetch(`https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${discordUserId}/roles/${rid}`, {
        method: 'PUT',
        headers: {
          "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
      }))
    }
  })

  await Promise.all(promises)
}

export async function getPublicProfiles() {
  // get data from fauna based on user id
  const svc = new FaunaService(process.env.FAUNA_SECRET as string)
  const data = await svc.listRecords('users')
  const users = data.filter((d: any) => d.isPublic)
  return users
}

export type UpdateUserInfoParams = {
  website?: string
  twitter?: string
  youtube?: string
  linkedin?: string
  threads?: string
  twitch?: string
  tagline?: string
  isPublic?: boolean
  imageUrl?: string
  displayName?: string
  username?: string
}

export async function updateUserInfo(faunaId: string, params: UpdateUserInfoParams, selectedRoles: string[] = []) {
  const svc = new FaunaService(process.env.FAUNA_SECRET as string)
  const data = await svc.updateRecord('users', faunaId, {...params})

  await syncRoles(data.userId, selectedRoles)
}