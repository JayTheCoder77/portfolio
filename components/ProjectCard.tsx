export function ProjectCard({
  title,
  description,
  stack,
  media,
  href,
  github,
  website,
}: {
  title: string;
  description: string;
  stack: string[];
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  href?: string;
  github?: string;
  website?: string;
}) {
  return (
    <article className="flex flex-col gap-6 sm:flex-row sm:gap-8">
      <div className="w-full sm:w-64 aspect-video shrink-0 overflow-hidden rounded-sm bg-[var(--border)]">
        {media ? (
          media.type === "video" ? (
            <video
              src={media.src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={media.src}
              alt={media.alt ?? title}
              className="h-full w-full object-cover"
            />
          )
        ) : null}
      </div>
      <div>
        <h3 className="text-[15px] md:text-[16px] font-medium text-[var(--fg)]">
          {href ? (
            <a href={href} className="transition-opacity hover:opacity-70">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mt-1 text-[14px] md:text-[15px] text-[var(--muted)]">
          {description}
        </p>
        <p className="mt-2 font-mono text-xs text-[var(--muted)]">
          {stack.join(" · ")}
        </p>
        {(github || website) && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {github ? (
              <a
                href={github}
                className="text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] hover:opacity-70"
              >
                GitHub
              </a>
            ) : null}
            {website ? (
              <a
                href={website}
                className="text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] hover:opacity-70"
              >
                Website
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
