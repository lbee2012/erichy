import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

export default function WorksWindow({ onClose }) {
  const cfg = uiSpec.works;
  const [text, setText] = useState('loading...');
  useEffect(() => {
    fetch('/content/works.md')
      .then(r => r.text())
      .then(txt => setText(txt))
      .catch(() => setText('error loading content'));
  }, []);
  // const [position] = useState(() => ({
  //   x: Math.random() * (window.innerWidth - 800),
  //   y: Math.random() * (window.innerHeight - 600)
  // }));

  return (
    <Draggable handle=".handle" /* defaultPosition={position} */>
      <div
        style={{
          width: `${cfg.window.width}px`,
          height: `${cfg.window.height}px`,
          backgroundColor: cfg.window.bg,
          borderWidth: `${cfg.window.stroke}px`,
          borderColor: 'black',
          borderStyle: 'solid',
          borderRadius: `${cfg.window.radius}px`
        }}
        className="absolute box-border flex flex-col overflow-hidden"
      >
        
        {/* window-title */}
        <div
          style={{
            height: `${cfg.titleBar.height}px`,
            backgroundColor: cfg.titleBar.bg,
            padding: `${cfg.titleBar.padding[0]}px ${cfg.titleBar.padding[1]}px ${cfg.titleBar.padding[2]}px ${cfg.titleBar.padding[3]}px`,
            boxSizing: 'border-box'
          }}
          className="handle w-full flex items-center justify-between border-b-4 border-black"
        >
          <span
            style={{
              fontSize: cfg.titleText.fontSize,
              fontWeight: cfg.titleText.fontWeight,
              color: cfg.titleText.color
            }}
          >
            works
          </span>
          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          >
            <span
              style={{
                fontSize: cfg.closeButton.fontSize,
                fontWeight: cfg.closeButton.fontWeight,
                color: cfg.closeButton.color
              }}
            >
              [x]
            </span>
          </button>
        </div>

        {/* window-content */}
        <div className="flex-1 box-border overflow-hidden pt-[15px] pr-[20px] pb-0 pl-[20px]">
          {/* works-lower (empty content placeholder) */}
        </div>
      </div>
    </Draggable>
  );
}
