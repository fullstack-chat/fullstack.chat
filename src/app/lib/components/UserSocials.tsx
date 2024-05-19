import React from "react";
import { UserInfo } from "../models";
import Globe from "./icons/GlobeIcon";
import XIcon from "./icons/XIcon";
import YouTubeIcon from "./icons/YouTubeIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import ThreadsIcon from "./icons/ThreadsIcon";
import TwitchIcon from "./icons/TwitchIcon";

type Params = {
  userInfo: UserInfo;
};

function UserSocials({ userInfo }: Params) {
  return (
    <div className="text-zinc-200 flex flex-wrap gap-2 col-span-3">
      {userInfo?.website ? (
        <span>
          <a target="_blank" href={userInfo.website}>
            <Globe className="w-6 h-6" />
          </a>
        </span>
      ) : null}
      {userInfo?.twitter ? (
        <span>
          <a target="_blank" href={userInfo.twitter}>
            <XIcon className="w-6 h-6" />
          </a>
        </span>
      ) : null}
      {userInfo?.youtube ? (
        <span>
          <a target="_blank" href={userInfo.youtube}>
            <YouTubeIcon className="w-6 h-6" />
          </a>
        </span>
      ) : null}
      {userInfo?.linkedin ? (
        <span>
          <a target="_blank" href={userInfo.linkedin}>
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </span>
      ) : null}
      {userInfo?.threads ? (
        <span>
          <a target="_blank" href={userInfo.threads}>
            <ThreadsIcon className="w-6 h-6" />
          </a>
        </span>
      ) : null}
      {userInfo?.twitch ? (
        <span>
          <a target="_blank" href={userInfo.twitch}>
            <TwitchIcon className="w-6 h-6" />
          </a>
        </span>
      ) : null}
    </div>
  );
}

export default UserSocials;
