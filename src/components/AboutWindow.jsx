import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import {
  FRAME_WIDTH, FRAME_HEIGHT,
  STROKE_WIDTH, BORDER_RADIUS,
  TITLE_BAR_HEIGHT,
  COLOR_BACKGROUND, COLOR_TITLE_BG, COLOR_TITLE_TEXT,
  FONT_PT_TITLE, FONT_PT_SUPPORT,
} from '../theme';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AboutWindow({ onClose }) {
  const [content, setContent] = useState('Loading...');
  useEffect(() => {
    fetch('/content/about.md')
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
          borderRadius: BORDER_RADIUS,
        }}
      >
        {/* titlebar */}
        <div
          className="handle relative box-border flex items-center justify-between px-[20px] cursor-move"
          style={{
            width: FRAME_WIDTH,
            height: TITLE_BAR_HEIGHT,
            background: COLOR_TITLE_BG,
            borderBottom: `${STROKE_WIDTH}px solid black`,
          }}
        >
          <span style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>about</span>
          <button onClick={onClose} style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>&times;</button>
        </div>
        {/* content area */}
        <div className="relative w-full h-[536px] overflow-auto box-border px-[20px] pt-[15px]">
          {/* avatar */}
          <img src="/ico/about/cn mel.jpeg" alt="avatar" className="w-[200px] h-[200px] rounded-full" style={{ position: 'absolute', top: '89px', right: '59px' }} />
          {/* main-text */}
          <div style={{ position: 'absolute', top: '131px', left: '104px', fontSize: '44pt', fontWeight: 'bold', color: '#32117C' }}>
            Quy Long. Hoang
          </div>
          {/* under-text */}
          <div style={{ position: 'absolute', top: '189px', left: '212px', fontSize: '24pt', color: '#333333', whiteSpace: 'pre-line' }}>
            where is my quality?{' '}
            MMT Co., Ltd.
          </div>
          {/* separator */}
          <hr style={{ position: 'absolute', top: '314px', width: '100%', borderColor: '#979797', opacity: 0.5, borderWidth: '1px' }} />
          {/* markdown content */}
          <div style={{ position: 'absolute', top: '329px', left: '20px', right: '20px', bottom: '0px', overflow: 'auto', fontSize: '24pt', color: '#333333' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
