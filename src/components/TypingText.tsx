import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 60 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let cancelled = false;

    const type = (i: number) => {
      if (cancelled) return;
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        setTimeout(() => type(i + 1), speed);
      }
    };

    setDisplayedText('');
    type(0);

    return () => {
      cancelled = true;
    };
  }, [text, speed]);

  return (
    <div className="typing-text">
      {displayedText}
    </div>
  );
}
