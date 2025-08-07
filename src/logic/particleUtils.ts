import type { Point } from './types';

export function generatePoints(
  centerX: number,
  centerY: number,
  radius: number,
  count: number
): Point[] {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    return {
      x,
      y,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      colorShift: Math.random() * 360,
    };
  });
}

export function bounceWithinCircle(
  point: Point,
  centerX: number,
  centerY: number,
  radius: number
) {
  const dx = point.x - centerX;
  const dy = point.y - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > radius) {
    const nx = dx / distance;
    const ny = dy / distance;

    const dot = point.dx * nx + point.dy * ny;
    point.dx -= 2 * dot * nx;
    point.dy -= 2 * dot * ny;

    point.x = centerX + nx * radius * 0.99;
    point.y = centerY + ny * radius * 0.99;
  }
}
