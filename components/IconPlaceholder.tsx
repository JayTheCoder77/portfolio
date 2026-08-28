export function IconPlaceholder({
  size = 128,
  src,
  alt = "",
}: {
  size?: number;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-md border border-[var(--border)]"
      style={{ width: size, height: size }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : null}
    </div>
  );
}
