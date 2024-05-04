"use client";
import React, { useEffect, useState } from "react";
import { getPublicProfiles } from "../lib/actions";
import { UserInfo } from "../lib/models";
import UserProfileCard from "../lib/components/UserProfileCard";
import LoadingView from "../views/LoadingView";

function Profiles() {
  const [profiles, setProfiles] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      let p = await getPublicProfiles();
      setProfiles([...p]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-2">
        <h1>Profiles</h1>
        <p className="lg:text-lg text-balance md:max-w-prose">
          Members of our amazing community:
        </p>
      </header>
      {isLoading && <LoadingView />}
      <div className="grid md:grid-cols-3 gap-4">
        {profiles.map((p, i) => (
          <UserProfileCard key={i} userInfo={p} />
        ))}
      </div>
    </section>
  );
}

export default Profiles;
