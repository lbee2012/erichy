import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export default function FolderWindow({ title, file, onClose }) {
  const [content, setContent] = useState('Loading...');

  useEffect(() => {
    fetch(`/content/${file}`)
      .then(r => r.text())
      .then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
  }, [file]);

  return (
    <Draggable handle=".handle">
      <div className="absolute bg-white border shadow-lg w-80">
        <div className="handle bg-blue-600 text-white p-2 flex justify-between items-center cursor-move">
          <span>{title}</span>
          <button onClick={onClose} className="ml-2 text-xl leading-none">&times;</button>
        </div>
        <div className="p-4 whitespace-pre-wrap text-sm">{content}</div>
      </div>
    </Draggable>
  );
}
