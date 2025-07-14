import React, { useEffect, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  delay: number;
}

const ShootingStarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < 30; i++) {
        starsRef.current.push({
          id: i,
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 200,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 2000
        });
      }
    };

    initStars();

    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Check if star should be visible (delay system)
        if (elapsed < star.delay) return;

        // Update star position (moving up and to the right at an angle)
        star.y -= star.speed * 2;
        star.x += star.speed * 0.5;

        // Reset star when it goes off screen
        if (star.y < -star.length || star.x > canvas.width + star.length) {
          star.y = canvas.height + Math.random() * 200;
          star.x = Math.random() * canvas.width;
          star.delay = elapsed + Math.random() * 3000;
        }

        // Draw shooting star
        const gradient = ctx.createLinearGradient(
          star.x, 
          star.y, 
          star.x - star.length * 0.5, 
          star.y + star.length * 2
        );
        
        gradient.addColorStop(0, `rgba(203, 84, 153, ${star.opacity})`);
        gradient.addColorStop(0.6, `rgba(203, 84, 153, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(203, 84, 153, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length * 0.5, star.y + star.length * 2);
        ctx.stroke();

        // Add a bright head to the star
        ctx.fillStyle = `rgba(203, 84, 153, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};


export default ShootingStarsBackground;