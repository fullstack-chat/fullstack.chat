export type UserInfo = {
  userId: string,
  username: string,
  faunaId: string,
  displayName?: string,
  website?: string
  twitter?: string
  youtube?: string
  linkedin?: string
  threads?: string
  twitch?: string
  tagline?: string
  imageUrl?: string
  isPublic?: boolean
  selectedRoles?: string[]
}

export enum RoleTypes {
  Ping
}

export type DiscordMember = {
  roles: string[]
  user: DiscordMemberUserInfo
}

export type DiscordMemberUserInfo = {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  banner: string
  accent_color: number
  global_name: string
  avatar_decoration_data: string
  banner_color: string
  clan: string
}


// {
//   "avatar": null,
//   "communication_disabled_until": null,
//   "flags": 0,
//   "joined_at": "2019-03-09T02:57:30.884000+00:00",
//   "nick": "brianmmdev",
//   "pending": false,
//   "premium_since": "2023-05-24T13:18:36.688000+00:00",
//   "roles": [
//       "1233235561255276625",
//       "554788026635649034",
//       "1109908605861367990",
//       "803352374999384095"
//   ],
//   "unusual_dm_activity_until": null,
//   "user": {
//       "id": "385635938241609729",
//       "username": "brianmmdev",
//       "avatar": "41f860696a2469ca2454cae70ed3bffe",
//       "discriminator": "0",
//       "public_flags": 4194304,
//       "flags": 4194304,
//       "banner": null,
//       "accent_color": 5577927,
//       "global_name": "brianmmdev",
//       "avatar_decoration_data": null,
//       "banner_color": "#551cc7",
//       "clan": null
//   },
//   "mute": false,
//   "deaf": false
// }