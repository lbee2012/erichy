import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function FolderWindow({ title, file, onClose }) {
  const [content, setContent] = useState('Loading...');
  const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`/content/${file}`)
      .then(r => r.text())
      .then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
  }, [file]);

  useEffect(() => {
    const x = (window.innerWidth - 800) / 2;
    const y = (window.innerHeight - 600) / 2;
    setDefaultPosition({ x, y });
  }, []);

  return (
    <Draggable handle=".handle" defaultPosition={defaultPosition}>
      <div
        style={{ resize: 'both', overflow: 'auto' }}
        className="bg-white border shadow-lg w-[800px] h-[600px] z-40 flex flex-col"
      >
        <div className="handle bg-blue-600 text-white p-2 flex justify-between items-center cursor-move">
          <span className="text-lg font-bold">{title.toLowerCase()}</span>
          <button onClick={onClose} className="ml-2 text-xl leading-none">&times;</button>
        </div>
        <div className="p-4 prose max-w-none overflow-auto flex-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </Draggable>
  );
}
