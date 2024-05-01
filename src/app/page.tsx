"use client";

import JoinButton from "./lib/components/JoinButton";
import UiCard from "./lib/components/UiCard";

export default function Home() {
  return (
    <div>
      <section className="text-center grid py-12 lg:py-24">
        <h1 className="mb-8">fullstack.chat</h1>
        <h2 className="font-normal uppercase text-xl">Our Mission:</h2>
        <h3 className="text-balance">
          Create a safe space for developers of all backgrounds to learn, grow,
          and build friendships.
        </h3>
      </section>

      <div className="flex flex-col md:grid grid-cols-3 gap-4">
        <div className="col-span-3 flex items-center justify-center text-xl text-center uppercase">
          Core principles:
        </div>
        <UiCard title="Authenticity and integrity">
          Members are expected to be honest and authentic at all times and to
          avoid being intentionally deceptive for any reason.
        </UiCard>
        <UiCard title="Kindness and openness">
          With honesty, be respectfully nice. We all come from different walks
          of life and members should welcome others with open arms.
        </UiCard>
        <UiCard title="Willing altruism">
          We're all here with a common goal. Be willing to lift others up, a
          high tide raises all boats.
        </UiCard>
      </div>

      <div className="mx-4 my-10 flex items-center justify-center">
        <JoinButton />
      </div>
    </div>
  );
}
