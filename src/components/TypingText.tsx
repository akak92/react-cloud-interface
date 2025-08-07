import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  linePause?: number;
  showCaret?: boolean;
}

export default function TypingText({
  text,
  speed = 60,
  linePause = 800,
  showCaret = true,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [caretVisible, setCaretVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const type = (i: number) => {
      if (cancelled || i >= text.length) return;

      const char = text[i];
      const delay = char === '\n' ? linePause : speed;

      setDisplayedText((prev) => prev + (char === '\n' ? '\n' : char));

      setTimeout(() => type(i + 1), delay);
    };

    setDisplayedText('');
    type(0);

    return () => {
      cancelled = true;
    };
  }, [text, speed, linePause]);

  useEffect(() => {
    if (!showCaret) return;
    const interval = setInterval(() => {
      setCaretVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, [showCaret]);

  return (
    <div className="typing-text">
      <span>
        {displayedText}
        {showCaret && <span className="caret-inline">{caretVisible ? '\u00A0' : ''}</span>}
      </span>
    </div>
  );
}
