'use client'

import { useEffect } from "react";
import UiCard from "./components/UiCard";

export default function Home() {

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('/api/hello')
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <main>
      <div className="mt-20 p-4 min-h-[20vh]">
        <div className="flex items-center justify-center text-xl text-center uppercase">
          Our mission:
        </div>
        <div className="flex items-center justify-center text-6xl font-extrabold text-center">
          Create a safe space for developers of all backgrounds to learn, grow, and build friendships.
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-3 gap-4 mx-4 my-20">
        <div className="col-span-3 flex items-center justify-center text-xl text-center uppercase">
          Core principles:
        </div>
        <UiCard title="Authenticity and integrity">
          Members are expected to be honest and authentic at all times and to avoid being intentionally deceptive for any reason.
        </UiCard>
        <UiCard title="Kindness and openness">
          With honesty, be respectfully nice. We all come from different walks of life and members should welcome others with open arms.
        </UiCard>
        <UiCard title="Willing altruism">
          We're all here with a common goal. Be willing to lift others up, a high tide raises all boats.
        </UiCard>
      </div>

      <div className="mx-4 my-10 flex items-center justify-center">
        <a href="https://discord.gg/NsD4knqTee" target="_blank" className="bg-gradient-to-b from-[#8A8DFF] to-[#5865F2] hover:to-[#8A8DFF] hover:shadow-lg rounded px-4 py-2 text-xl">
          Join the Discord
        </a>
      </div>
    </main>
  );
}
