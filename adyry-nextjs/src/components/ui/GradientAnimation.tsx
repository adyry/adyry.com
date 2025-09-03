'use client';

import { useEffect } from 'react';

export default function GradientAnimation() {
  useEffect(() => {
    let animationId: number;
    let startTime: number;
    const colorDuration = 40000; 
    const rotationDuration = 21000; 

    const colors = [
      [129, 211, 233], // #81d3e9
      [132, 239, 139], // #84ef8b
      [173, 124, 224], // #ad7ce0
      [240, 157, 154], // #f09d9a
      [217, 222, 127], // #d9de7f
    ];

    // Linear interpolation between two RGB values
    const lerp = (start: number, end: number, factor: number): number => {
      return Math.round(start + (end - start) * factor);
    };

    // Convert RGB array to CSS color string
    const rgbToString = (rgb: number[]): string => {
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    };

    // Get interpolated color between two colors
    const getInterpolatedColor = (color1: number[], color2: number[], factor: number): number[] => {
      return [
        lerp(color1[0], color2[0], factor),
        lerp(color1[1], color2[1], factor),
        lerp(color1[2], color2[2], factor),
      ];
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      const elapsed = currentTime - startTime;
      
      // Color animation progress
      const colorProgress = (elapsed % colorDuration) / colorDuration;
      
      // Rotation animation progress (different interval)
      const rotationProgress = (elapsed % rotationDuration) / rotationDuration;
      const degree = rotationProgress * 360;
      
      // Calculate which colors to interpolate between
      const colorIndex = colorProgress * colors.length;
      const currentColorIndex = Math.floor(colorIndex) % colors.length;
      const nextColorIndex = (currentColorIndex + 1) % colors.length;
      const interpolationFactor = colorIndex - Math.floor(colorIndex);
      
      // Create simple two-color gradient
      const color1 = getInterpolatedColor(
        colors[currentColorIndex],
        colors[nextColorIndex],
        interpolationFactor
      );
      const color2 = getInterpolatedColor(
        colors[nextColorIndex],
        colors[(nextColorIndex + 1) % colors.length],
        interpolationFactor
      );
      
      // Apply the two-color gradient with rotating angle to body
      document.body.style.background = `linear-gradient(${degree}deg, ${rgbToString(color1)}, ${rgbToString(color2)})`;
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return null;
}
