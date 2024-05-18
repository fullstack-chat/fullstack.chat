import React from "react";
import { UserInfo } from "../models";
import UiCard from "./UiCard";
import Image from "next/image";
import UserSocials from "./UserSocials";

type Params = {
  userInfo: UserInfo;
};

function UserProfileCard({ userInfo }: Params) {
  return (
    <UiCard className="space-y-4 grid grid-cols-3">
      <header className="flex gap-4 items-center col-span-3">
        <Image
          src={userInfo.imageUrl || "/images/default-profile.png"}
          width={75}
          height={75}
          alt={`${userInfo.displayName}'s profile picture`}
          className="rounded-full"
        />
        <div className="col-span-2 w-full">
          <p className="font-bold">{userInfo.displayName}</p>
          <p className="text-sm">@{userInfo.username}</p>
        </div>
      </header>
      <p className="col-span-3">{userInfo.tagline}</p>
      <UserSocials userInfo={userInfo} />
    </UiCard>
  );
}

export default UserProfileCard;
