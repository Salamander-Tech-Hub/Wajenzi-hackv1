interface MediaPlaceholderProps {
  type: 'image' | 'video';
  label?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  className?: string;
}

const aspectClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  wide: 'aspect-[21/9]',
};

export default function MediaPlaceholder({
  type,
  label,
  aspectRatio = 'video',
  className = '',
}: MediaPlaceholderProps) {
  const labelText = label ?? (type === 'video' ? 'Insert video here' : 'Your image here');
  return (
    <div
      className={`rounded-2xl border-2 border-dashed border-primary/40 bg-slate-800/40 flex flex-col items-center justify-center gap-3 overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
      style={{ minHeight: type === 'video' ? 200 : 240 }}
    >
      {type === 'video' ? (
        <svg className="w-14 h-14 text-primary/70" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M8 5v14l11-7z" />
          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ) : (
        <svg className="w-14 h-14 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )}
      <span className="text-sm font-medium text-slate-400 text-center px-4">{labelText}</span>
    </div>
  );
}
