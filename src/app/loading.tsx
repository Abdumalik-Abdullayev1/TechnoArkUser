'use client'
import './globals.css';
import { useState, useEffect } from 'react';

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
        <div className="loader"></div>
      </div>
    );
  }

  return <>{children}</>;
}
