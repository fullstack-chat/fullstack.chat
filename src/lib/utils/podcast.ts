import { XMLParser } from 'fast-xml-parser';

export interface PodcastEpisode {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  duration: string;
  enclosure: {
    url: string;
    length: string;
    type: string;
  };
  imgUrl?: string
}

export async function getPodcastEpisodes(): Promise<PodcastEpisode[]> {
  const response = await fetch('https://feed.podbean.com/fullstackchat/feed.xml');
  const xmlData = await response.text();
  
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
  });
  
  const parsed = parser.parse(xmlData);
  const items = parsed.rss.channel.item;

  const defaultImg = parsed.rss.channel["itunes:image"]?.href;
  
  return items.map((item: any) => ({
    title: item.title,
    link: item.link,
    description: item.description,
    pubDate: new Date(item.pubDate).toLocaleDateString(),
    duration: item['itunes:duration'],
    enclosure: item.enclosure,
    imgUrl: item['itunes:image']?.href || defaultImg
  }));
}

export async function getLatestEpisode(): Promise<PodcastEpisode | null> {
  try {
    const episodes = await getPodcastEpisodes();
    return episodes.length > 0 ? episodes[0] : null;
  } catch (error) {
    console.error('Error fetching latest episode:', error);
    return null;
  }
}
