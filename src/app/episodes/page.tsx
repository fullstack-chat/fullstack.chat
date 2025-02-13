import { getPodcastEpisodes } from '@/lib/utils/podcast';
import UiCard from '../lib/components/UiCard';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

export default async function EpisodesPage() {
  const episodes = await getPodcastEpisodes();

  return (
    <div className="space-y-8 max-w-full overflow-x-hidden">
      <section className="text-center py-12">
        <div className="mb-6">
          <img src="/assets/images/logo-2.png" alt="fullstack.chat logo" className="mx-auto h-40" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Podcast Episodes</h1>
        <p className="text-xl text-gray-200">
          Listen to all episodes of the fullstack.chat podcast
        </p>
      </section>

      <div className="grid gap-6">
        {episodes.map((episode) => (
          <UiCard key={episode.link} title={episode.title}>
            <div className="space-y-4 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                <span className="break-words">{episode.pubDate}</span>
                <span className="break-words">Duration: {episode.duration}</span>
              </div>
              <div 
                dangerouslySetInnerHTML={{ __html: episode.description }} 
                className="break-words [&>p]:mb-4 [&>p]:break-words last:[&>p]:mb-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ul>li]:pl-2 [&>ul>li]:break-words"
              />
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={episode.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center hover:text-gray-300 transition-colors break-words"
                >
                  View Episode →
                </a>
                <a
                  href={episode.enclosure.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center hover:text-gray-300 transition-colors break-words"
                >
                  Download Audio →
                </a>
              </div>
            </div>
          </UiCard>
        ))}
      </div>
    </div>
  );
}
