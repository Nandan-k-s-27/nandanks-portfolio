/**
 * InfiniteMarquee: a seamlessly looping horizontal strip of tech/tool names.
 * Two rows scroll in opposite directions. Pauses on hover.
 * Fully respects prefers-reduced-motion.
 */

const ROW_1 = [
  'React 18', 'TypeScript', 'Node.js', 'WebRTC', 'Socket.IO',
  'Redis', 'MongoDB', 'Express.js', 'Vite', 'Tailwind CSS',
];

const ROW_2 = [
  'Azure Data Factory', 'Azure Databricks', 'Delta Lake', 'Python',
  'OpenAI Whisper', 'Google Gemini AI', 'MediaPipe', 'ADLS Gen2',
  'MySQL', 'Git & GitHub',
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Duplicate for seamless infinite scroll
  const doubled = [...items, ...items];

  return (
    <div className={`marquee-row${reverse ? ' marquee-row--reverse' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-chip">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteMarquee() {
  return (
    <section className="marquee-section" aria-label="Technology Stack">
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />
      <MarqueeRow items={ROW_1} />
      <MarqueeRow items={ROW_2} reverse />
    </section>
  );
}
