import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CyclingWaveLoader from './CyclingWaveLoader';

const ROUTE_LOAD_DURATION_MS = 700;

export default function RouteLoader() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPathRef.current = location.pathname;
      return;
    }
    if (location.pathname === prevPathRef.current) return;
    prevPathRef.current = location.pathname;
    setShow(true);
    const t = setTimeout(() => setShow(false), ROUTE_LOAD_DURATION_MS);
    return () => clearTimeout(t);
  }, [location.pathname]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[200] pointer-events-none"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="absolute inset-0 pointer-events-auto">
        <CyclingWaveLoader
          accentColor="#FDE047"
          backgroundColor="#020617"
          waveCount={6}
          waveSize={120}
          rotationSpeed={3}
          strokeWidth={2}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
