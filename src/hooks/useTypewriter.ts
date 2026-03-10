import { useState, useEffect } from 'react';

export function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 60,
  pauseMs = 1800,
): string {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = words[idx];
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
          idx = (idx + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, [words, typeSpeed, deleteSpeed, pauseMs]);

  return display;
}
