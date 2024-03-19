'use client'

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect } from "react";
import UiCard from "./components/UiCard";

export default function Home() {

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/hello')
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <main>
      <div className="mt-20 p-4 min-h-[20vh]">
        <div className="flex items-center justify-center text-xl text-center uppercase">
          Our mission:
        </div>
        <div className="flex items-center justify-center text-6xl font-extrabold text-center">
          Empower independent developers to launch successful products.
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mx-4 my-20">
        <div className="col-span-3 text-xl font-semibold">
          What we do:
        </div>
        <UiCard title="X Space">
          <div className="mb-2">
            We host a bi-weekly space on X where we interview developers building their own products. Join in to learn how others do it, and stick around to ask questions!
          </div>
          <a href="https://twitter.com/fullstackchat" target="_blank" className="pb-1 border-b-2 border-[#ffffff95] hover:border-[#00a8e8] transition-all">
            Follow @fullstackchat
          </a>
        </UiCard>
        <UiCard title="Newsletter">
          <div className="mb-2">
            Insights currated from leading SaaS builders delivered directly to your inbox. Our newsletter is sent out every other week, also includes community updates and milestones submitted by members.
          </div>
          <a href="https://fullstack-chat.beehiiv.com/subscribe" target="_blank" className="pb-1 border-b-2 border-[#ffffff95] hover:border-[#00a8e8] transition-all">
            Subscribe
          </a>
        </UiCard>
        <UiCard title="Community">
          <div className="mb-2">
            The fullstack.chat Discord community is filled with other builders with the goal of launching and operating successful products.
          </div>
          <a href="https://discord.gg/NsD4knqTee" target="_blank" className="pb-1 border-b-2 border-[#ffffff95] hover:border-[#00a8e8] transition-all">
            Join the Discord
          </a>
        </UiCard>
        {/* <UiCard title="Blog">
          <div>
            info here about blog
          </div>
          <div>
            go to blog
          </div>
        </UiCard> */}
      </div>

      <div className="mx-4 my-20">
        <UiCard title="Most recent space" className="grid md:grid-cols-3 gap-2">
          <div className="col-span-2">
            <div>
              <p>In the most recent Space, <a href="https://twitter.com/brianmmdev">Brian</a> spoke with Matias Hernandez who's building an AI-powered speech-to-text Saas that runs directly from the browser.</p>
              <p>We discuss his target audience, the tech stack, and various challenges he's run into building his first product he intends to launch and be used by others!</p>
            </div>
            <a href="https://youtu.be/3Jyl2IemdVY" target="_blank" className="pb-1 border-b-2 border-[#ffffff95] hover:border-[#00a8e8] transition-all">
              Listen on YouTube
            </a>
          </div>
          <div className="flex justify-center">
            <img src="/assets/images/spaces/1.png" className="rounded-xl border-t-2 border-[#222222]" />
          </div>
        </UiCard>
      </div>

      <div className="flex flex-col md:grid grid-cols-3 gap-4 mx-4 my-20">
        <div className="col-span-3 text-xl font-semibold">
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
    </main>
  );
}
