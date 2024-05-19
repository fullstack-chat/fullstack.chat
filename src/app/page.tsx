import JoinButton from "./lib/components/JoinButton";
import UiCard from "./lib/components/UiCard";

export default function Home() {
  return (
    <div>
      <section className="text-center grid py-12 lg:py-24">
        <h1 className="mb-8">fullstack.chat</h1>
        <h2 className="font-normal uppercase text-lg lg:text-xl">
          Our Mission:
        </h2>
        <p className="text-balance text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight max-w-prose">
          Create a safe space for developers of all backgrounds to learn, grow,
          and build friendships.
        </p>
      </section>

      <div className="flex flex-col md:grid grid-cols-3 gap-4">
        <div className="col-span-3 flex items-center justify-center text-xl text-center uppercase">
          <h2 className="font-normal uppercase text-lg lg:text-xl">
            Core principles:
          </h2>
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

      <div className="py-10 flex items-center justify-center">
        <JoinButton />
      </div>
    </div>
  );
}
