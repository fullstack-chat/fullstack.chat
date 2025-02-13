import { getLatestEpisode } from "@/lib/utils/podcast";
import JoinButton from "./lib/components/JoinButton";
import UiCard from "./lib/components/UiCard";

export default async function Home() {
  const episode = await getLatestEpisode();
  
  return (
    <div>
      <section className="text-center grid py-12 lg:py-24">
        <div className="mb-6">
          <img src="/assets/images/logo-2.png" alt="fullstack.chat logo" className="mx-auto h-40" />
        </div>
        <h1 className="mb-8">fullstack.chat</h1>
        <p className="text-balance text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight max-w-prose">
          A weekly interview-style podcast featuring builders from around the community discussing their projects, process, and experiences.
        </p>
      </section>

      <section className="flex flex-col gap-4 mb-4">

      <UiCard title="Latest episode" className="col-span-2">
        {episode && (
          <div className="flex flex-col md:flex-row gap-4">
            <img 
              className="w-full md:w-48 h-48 object-cover rounded" 
              src={episode.imgUrl} 
              alt={episode.title} 
            />
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl md:text-2xl break-words">{episode.title}</div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-gray-300">
                <span className="break-words">Published: {episode.pubDate}</span>
                <span className="break-words">Duration: {episode.duration}</span>
              </div>
              <div 
                dangerouslySetInnerHTML={{ __html: episode.description }} 
                className="text-gray-200 rounded my-2 break-words [&>p]:mb-4 last:[&>p]:mb-0" 
              />
              <div className="flex flex-wrap gap-4">
                <a href={episode.link} target="_blank" rel="noreferrer" className="hover:underline break-all">
                  Listen to episode {'->'}
                </a>
                <a href="/episodes" className="hover:underline break-all">
                  All episodes {'->'}
                </a>

              </div>
            </div>
          </div>
        )}
      </UiCard>
      </section>

      <div className="flex flex-col md:grid grid-cols-2 gap-4 mb-20">
        <UiCard title="About the host" className="flex gap-1">
          <img className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mr-4" src="/assets/images/brian.jpg" alt="Brian Morrison" />
          <div>
            <a href="https://x.com/brianmmdev" target="_blank" rel="noreferrer">
              Brian Morrison II
            </a>
            {` `}
            is a tech enthusiast and full stack developer with over 15 years of experience, currently working as Sr. Developer Educator at{" "}
            <a href="https://clerk.com" target="_blank" rel="noreferrer">
              Clerk
            </a>
            .
          </div>
        </UiCard>
        <UiCard title="Apply to be on the podcast" className="flex flex-col">
          <p>
            Are you an active builder, thinking about starting a new project, or represent a dev tool company that caters to builders?
            Then I'd love to hear from you!
          </p>
          <a href="/podcast/apply" target="_blank" rel="noreferrer">
            Apply to be on the podcast
          </a>
        </UiCard>
      </div>

      <div className="flex flex-col md:grid grid-cols-3 gap-4">
        <div className="col-span-3 flex flex-col gap-2 items-center justify-center  text-center">
          <h2 className="font-normal text-lg lg:text-xl uppercase">
            Join the community
          </h2>
          <p className="text-gray-200">Interested in connecting with other buidlers? We have a small but active community built on the following core principles:</p>
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
