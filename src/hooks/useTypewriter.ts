import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 60,
  pauseMs = 1800,
): string {
  const [display, setDisplay] = useState('');
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const currentWords = wordsRef.current;
      if (!currentWords || currentWords.length === 0) return;
      
      const current = currentWords[idx % currentWords.length];
      if (!deleting) {
        charIdx++;
        setDisplay(current.slice(0, charIdx));
        if (charIdx === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pauseMs);
          return;
        }
      } else {
        charIdx--;
        setDisplay(current.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % currentWords.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, [typeSpeed, deleteSpeed, pauseMs]);

  return display;
}
