import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const icons = [
  'discord','github','instagram','linkedin','paypal','telegram','tiktok','whatsapp'
];

export default function ContactWindow({ onClose }) {
  const [content, setContent] = useState('Loading...');
  useEffect(() => {
    fetch('/content/contact.md')
      .then(r => r.text())
      .then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
  }, []);
  // const [position] = useState(() => ({ x: Math.random() * (window.innerWidth - 800), y: Math.random() * (window.innerHeight - 600) }));

  return (
    <Draggable handle=".handle" /* defaultPosition={position} */>
      <div className="absolute w-[800px] h-[600px] bg-[#FFFBE3] border-4 border-black rounded-[15px] box-border flex flex-col overflow-hidden">
        <div className="handle w-full h-[68px] bg-[#FFD992] flex items-center justify-between px-4 box-border border-b-4 border-black rounded-tl-[11px] rounded-tr-[11px]">
          <span style={{ fontSize: '32pt', color: '#333333' }}>contact</span>
          <button
            onClick={onClose}
            className="w-[50px] h-[50px] flex items-center justify-center bg-transparent border-none p-0 outline-none focus:outline-none"
            style={{ cursor: 'pointer' }}
          >
            [x]
          </button>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-4 gap-4 place-items-center">
            {icons.map(icon => (
              <div key={icon} className="flex flex-col items-center">
                <img
                  src={`/ico/contact/${icon}.png`}
                  alt={`${icon} icon`}
                  className="w-[120px] h-[120px]"
                />
                <span style={{ fontSize: '32pt', fontWeight: 'bold', color: '#333333' }}>
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
