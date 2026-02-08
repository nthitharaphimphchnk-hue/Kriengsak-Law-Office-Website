import { Facebook, Twitter, Share2 } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url?: string;
  className?: string;
}

export default function ShareButtons({ title, url, className = "" }: ShareButtonsProps) {
  const currentUrl = url || typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:text-blue-400",
    },
    {
      name: "LINE",
      icon: Share2,
      url: `https://line.me/R/msg/text/?${encodedTitle}%20${encodedUrl}`,
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <span className="text-sm font-semibold text-muted-foreground">แชร์:</span>
      <div className="flex gap-2">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`แชร์ไปยัง ${link.name}`}
              className={`p-2 rounded-full border border-border transition-colors ${link.color} hover:bg-muted`}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
