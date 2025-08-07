import { useEffect, useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import TypingText from './components/TypingText';
import SpeakButton from './components/SpeakButton';

export default function App() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showText) return;

    const text = `Mi nombre es Astor.\nSoy un Agente potenciado por IA diseñado para asistirte.\nHabla, que yo convertiré tu voz en propósito.`;
    const totalChars = text.length;
    const estimatedTime = totalChars * 60 + 2 * 1000;

    const timeout = setTimeout(() => {
      setShowButton(true);
    }, estimatedTime);

    return () => clearTimeout(timeout);
  }, [showText]);

  const handleSpeakClick = () => {
    alert('¡Astor te está escuchando! (Aquí podrías iniciar grabación)');
  };

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
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TypingText
            text={`Mi nombre es Astor.\nSoy un Agente potenciado por IA diseñado para asistirte.\nTu voz es mi señal...`}
            speed={60}
            linePause={1000}
          />
          {showButton && (
            <div className="fade-in-button">
              <SpeakButton onClick={handleSpeakClick} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
