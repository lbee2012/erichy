import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import {
  FRAME_WIDTH, FRAME_HEIGHT,
  STROKE_WIDTH, BORDER_RADIUS,
  TITLE_BAR_HEIGHT,
  COLOR_BACKGROUND, COLOR_TITLE_BG, COLOR_TITLE_TEXT,
  FONT_PT_TITLE
} from '../theme';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function WorksWindow({ onClose }) {
  const [content, setContent] = useState('Loading...');
  useEffect(() => {
    fetch('/content/works.md')
      .then(r => r.text())
      .then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
  }, []);
  const [position] = useState(() => {
    const x = (window.innerWidth - FRAME_WIDTH) / 2;
    const y = (window.innerHeight - FRAME_HEIGHT) / 2;
    return { x, y };
  });

  return (
    <Draggable handle=".handle" defaultPosition={position}>
      <div
        className="absolute box-border shadow-lg z-40 flex flex-col"
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          background: COLOR_BACKGROUND,
          border: `${STROKE_WIDTH}px solid black`,
          borderRadius: BORDER_RADIUS
        }}
      >
        {/* titlebar */}
        <div
          className="handle relative box-border flex items-center justify-between px-[20px] cursor-move"
          style={{
            width: FRAME_WIDTH,
            height: TITLE_BAR_HEIGHT,
            background: COLOR_TITLE_BG,
            borderBottom: `${STROKE_WIDTH}px solid black`
          }}
        >
          <span style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>works</span>
          <button onClick={onClose} style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>&times;</button>
        </div>
        {/* content area */}
        <div className="relative w-full h-[536px] box-border">
          {/* empty content for now */}
        </div>
      </div>
    </Draggable>
  );
}
