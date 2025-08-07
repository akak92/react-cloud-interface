import ParticleCanvas from './components/ParticleCanvas';
import TypingText from './components/TypingText';

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TypingText text="Este es un texto generado letra por letra." speed={80} />
      </div>
    </>
  );
}
