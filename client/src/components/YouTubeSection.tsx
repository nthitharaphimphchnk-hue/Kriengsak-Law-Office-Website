import { useState } from "react";
import { Youtube } from "lucide-react";

type YouTubeVideo = {
  title: string;
  videoId: string;
};

type YouTubeSectionProps = {
  channelName: string;
  channelUrl: string;
  videos: YouTubeVideo[];
};

export default function YouTubeSection({
  channelName,
  channelUrl,
  videos,
}: YouTubeSectionProps) {
  if (videos.length < 3) return null;

  const [mainVideo, secondVideo, thirdVideo] = videos;
  const [playingByVideoId, setPlayingByVideoId] = useState<Record<string, boolean>>({});
  const [thumbIndexByVideoId, setThumbIndexByVideoId] = useState<Record<string, number>>({});

  const getThumbnailCandidates = (videoId: string) => [
    `https://img.youtube.com/vi/${videoId}/0.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
  ];

  const playVideo = (videoId: string) => {
    setPlayingByVideoId((prev) => ({ ...prev, [videoId]: true }));
  };

  const renderVideoCard = (video: YouTubeVideo) => {
    const candidates = getThumbnailCandidates(video.videoId);
    const currentIndex = thumbIndexByVideoId[video.videoId] ?? 0;
    const thumbnailSrc = candidates[Math.min(currentIndex, candidates.length - 1)];
    const isPlaying = Boolean(playingByVideoId[video.videoId]);

    if (isPlaying) {
      return (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&playsinline=1&rel=0`}
          title={video.title}
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      );
    }

    return (
      <button
        type="button"
        onClick={() => playVideo(video.videoId)}
        className="relative w-full h-full block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`เล่นวิดีโอ: ${video.title}`}
      >
        <img
          src={thumbnailSrc}
          alt={`ภาพปกวิดีโอ ${video.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => {
            setThumbIndexByVideoId((prev) => ({
              ...prev,
              [video.videoId]: Math.min((prev[video.videoId] ?? 0) + 1, candidates.length - 1),
            }));
          }}
        />
        <span className="absolute inset-0 bg-black/30 pointer-events-none" />
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600/95 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white ml-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
    );
  };

  const renderVideoLinkCard = (video: YouTubeVideo) => {
    const candidates = getThumbnailCandidates(video.videoId);
    const currentIndex = thumbIndexByVideoId[video.videoId] ?? 0;
    const thumbnailSrc = candidates[Math.min(currentIndex, candidates.length - 1)];

    return (
      <a
        href={`https://youtu.be/${video.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-full block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`เปิดวิดีโอ YouTube: ${video.title}`}
      >
        <img
          src={thumbnailSrc}
          alt={`ภาพปกวิดีโอ ${video.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => {
            setThumbIndexByVideoId((prev) => ({
              ...prev,
              [video.videoId]: Math.min((prev[video.videoId] ?? 0) + 1, candidates.length - 1),
            }));
          }}
        />
        <span className="absolute inset-0 bg-black/30 pointer-events-none" />
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600/95 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white ml-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </a>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            ทนายความไขคดีปรึกษากฎหมายฟรี
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div className="inline-flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 shadow-sm">
            <Youtube className="h-5 w-5 text-red-600" />
            <span className="text-sm font-semibold text-red-600">Youtube</span>
            <span className="h-4 w-px bg-black/10" />
            <span className="text-sm md:text-base font-medium text-foreground">
              {channelName}
            </span>
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            <span>ไปที่ช่อง Youtube</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10 aspect-video bg-black">
              {renderVideoLinkCard(mainVideo)}
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {[secondVideo, thirdVideo].map((video) => (
              <article key={`${video.videoId}-${video.title}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10 aspect-video bg-black">
                  {renderVideoLinkCard(video)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
