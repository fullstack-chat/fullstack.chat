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
    <UiCard className="mx-auto space-y-4 grid place-items-center">
      <Image
        src={userInfo.imageUrl || "/images/default-profile.png"}
        width={75}
        height={75}
        alt={""}
        className="rounded-full"
      />
      <header className="text-center">
        <p className="font-bold">{userInfo.displayName}</p>
        <p className="text-sm">@{userInfo.username}</p>
      </header>
      <p className="text-center">{userInfo.tagline}</p>
      <UserSocials userInfo={userInfo} />
    </UiCard>
  );
}

export default UserProfileCard;
