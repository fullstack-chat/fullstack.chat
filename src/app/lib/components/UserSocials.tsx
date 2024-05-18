import React from "react";
import { UserInfo } from "../models";
import Globe from "./icons/GlobeIcon";
import XIcon from "./icons/XIcon";
import YouTubeIcon from "./icons/YouTubeIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
import ThreadsIcon from "./icons/ThreadsIcon";
import TwitchIcon from "./icons/TwitchIcon";

type Params = {
  userInfo: UserInfo;
};

function UserSocials({ userInfo }: Params) {
  return (
    <div className="flex w-full text-zinc-200 flex-wrap gap-2 justify-center">
      {userInfo?.website ? <Globe className="w-10 h-10" /> : null}
      {userInfo?.twitter ? <XIcon className="w-10 h-10" /> : null}
      {userInfo?.youtube ? <YouTubeIcon className="w-10 h-10" /> : null}
      {userInfo?.linkedin ? <LinkedinIcon className="w-10 h-10" /> : null}
      {userInfo?.threads ? <ThreadsIcon className="w-10 h-10" /> : null}
      {userInfo?.twitch ? <TwitchIcon className="w-10 h-10" /> : null}
    </div>
  );
}

export default UserSocials;
