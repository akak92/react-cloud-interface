import { useEffect, useRef } from 'react';
import type { Point } from '../logic/types';
import { generatePoints, bounceWithinCircle } from '../logic/particleUtils';

const NUM_POINTS = 1200;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;
    const RADIUS_FACTOR = 0.2;
    const radius = Math.min(width, height) * RADIUS_FACTOR;

    pointsRef.current = generatePoints(centerX, centerY, radius, NUM_POINTS);

    function drawFrame(time: number) {
      ctx.clearRect(0, 0, width, height);

      pointsRef.current.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;
        bounceWithinCircle(point, centerX, centerY, radius);

        const hue = (point.colorShift + time * 0.05) % 360;
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(drawFrame);
    }

    requestAnimationFrame(drawFrame);
  }, []);

  return <canvas ref={canvasRef} className="canvas fade-in" />;
}
