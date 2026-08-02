import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.3,
      dark: 1, 
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.81, 0.76, 1.0], // #cec1ff (light purple land)
      markerColor: [0.6, 0.5, 0.93], // #977fed (bright purple markers)
      glowColor: [0.19, 0.12, 0.38], // #311e60 (dark purple glow)
      markers: [
        // New York
        { location: [40.7128, -74.006], size: 0.05 },
        // London
        { location: [51.5072, 0.1276], size: 0.05 },
        // Tokyo
        { location: [35.6895, 139.6917], size: 0.05 },
        // Sydney
        { location: [-33.8688, 151.2093], size: 0.05 },
        // Vietnam (Hanoi)
        { location: [21.0285, 105.8542], size: 0.08 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005; // speed of rotation
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="w-full max-w-[400px] aspect-square relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          cursor: 'grab',
        }}
      />
    </div>
  );
}
