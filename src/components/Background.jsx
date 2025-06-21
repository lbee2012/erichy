import React from 'react';
import Wavify from 'react-wavify';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Sunlight waves effect */}
      <Wavify
        fill="rgba(255, 255, 255, 0.3)"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
        className="absolute top-0 right-0 w-full h-full"
      />
    </div>
  );
}
