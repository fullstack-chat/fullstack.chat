import { getPodcastEpisodes } from '@/lib/utils/podcast';
import UiCard from '../lib/components/UiCard';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

export default async function EpisodesPage() {
  const episodes = await getPodcastEpisodes();

  return (
    <div className="space-y-8">
      <nav className="flex items-center mb-8">
        <Link href="/" className="text-gray-200 hover:text-slate-300">
          ← Back to Home
        </Link>
      </nav>
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
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{episode.pubDate}</span>
                <span>Duration: {episode.duration}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: episode.description }} />
              
              <div className="flex gap-4">
                <a
                  href={episode.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center"
                >
                  View Episode
                </a>
                <a
                  href={episode.enclosure.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center"
                >
                  Download Audio
                </a>
              </div>
            </div>
          </UiCard>
        ))}
      </div>
    </div>
  );
}
