import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#FFFBE3] overflow-hidden">
      {/* Background wireframe image - positioned from top-left, crops from right/bottom */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'url(/wireframe/main_light-mode.png)',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          zIndex: -1
        }}
      />
      {/* Top-left sunlight */}
      <div className="absolute top-0 left-0 w-[1404px] h-[355px] bg-[#AACCFF]" />
      {/* Top-right sunlight */}
      <div className="absolute top-0 right-0 w-[1192px] h-[1080px] bg-[#AACCFF]" />
    </div>
  );
}
