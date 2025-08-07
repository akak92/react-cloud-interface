interface SpeakButtonProps {
  onClick: () => void;
}

export default function SpeakButton({ onClick }: SpeakButtonProps) {
  return (
    <button className="speak-button" onClick={onClick}>
      Hablar con Astor
    </button>
  );
}
