import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: { p1: number; p2: number; opacity: number }[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      connections = [];

      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(100, 100, 100, ${Math.random() * 0.4 + 0.1})`,
        });
      }
    };

    const moveParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        const mouseDistance = Math.hypot(mouseX - p.x, mouseY - p.y);
        if (mouseDistance < 200) {
          const force = 0.05;
          p.speedX += ((mouseX - p.x) / mouseDistance) * force;
          p.speedY += ((mouseY - p.y) / mouseDistance) * force;

          const maxSpeed = 2;
          const currentSpeed = Math.hypot(p.speedX, p.speedY);
          if (currentSpeed > maxSpeed) {
            p.speedX = (p.speedX / currentSpeed) * maxSpeed;
            p.speedY = (p.speedY / currentSpeed) * maxSpeed;
          }
        }
      }
    };

    const findConnections = () => {
      connections = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (distance < 150) {
            connections.push({
              p1: i,
              p2: j,
              opacity: 1 - distance / 150,
            });
          }
        }
      }
    };

    const draw = () => {
      // Draw grey-to-black vertical gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#444'); // grey
      gradient.addColorStop(1, '#000'); // black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const conn of connections) {
        const p1 = particles[conn.p1];
        const p2 = particles[conn.p2];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(50, 50, 50, ${conn.opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };

    const animate = () => {
      moveParticles();
      findConnections();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-black"
    ></canvas>
  );
};
 
export default AnimatedBackground;
