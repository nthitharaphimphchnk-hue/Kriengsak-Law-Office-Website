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
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${mainVideo.videoId}`}
                title={mainVideo.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {[secondVideo, thirdVideo].map((video) => (
              <article key={`${video.videoId}-${video.title}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10 aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                    title={video.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
