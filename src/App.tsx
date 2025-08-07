import { useEffect, useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import TypingText from './components/TypingText';

export default function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2500); // esperar el fade-in del canvas
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ParticleCanvas />
      {showText && (
        <div
          style={{
            position: 'absolute',
            top: '72%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TypingText
            text={`Mi nombre es Astor.\nSoy un Agente potenciado por IA diseñado para asistirte.\nTu voz es mi señal...`}
            speed={60}
            linePause={1000}
          />
        </div>
      )}
    </>
  );
}
