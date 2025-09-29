import React from 'react';
import Draggable from 'react-draggable';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';
import { useDragState } from '../hooks/useDragState';

export default function BlogsWindow({
  onClose,
  onFocus = () => {},
  zIndex = 1,
  isOpen = true,
  defaultPosition = { x: 0, y: 0 }
}) {
  const cfg = useThemedSpec('blogs');
  const { palette } = useTheme();
  const handleFocus = () => onFocus();
  const { isDragging, handleDragStart, handleDragStop } = useDragState(handleFocus);
  const frameStroke = cfg.window.strokeColor || palette.frameStrokeColor || '#000000';
  return (
    <Draggable handle=".handle" defaultPosition={defaultPosition} onStart={handleDragStart} onStop={handleDragStop}>
      <div
        onMouseDown={handleFocus}
        className={`window-frame ${isDragging ? 'window-dragging' : ''} ${isOpen ? 'window-open' : 'window-closed'}`}
        style={{
          position: 'absolute',
          width: cfg.window.width + 'px',
          height: cfg.window.height + 'px',
          zIndex,
          backgroundColor: cfg.window.bg,
          border: cfg.window.stroke + 'px solid ' + frameStroke,
          borderRadius: cfg.window.radius + 'px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {/* title-bar */}
        <div
          style={{
            height: cfg.titleBar.height + 'px',
            backgroundColor: cfg.titleBar.bg,
            paddingTop: cfg.titleBar.padding[0] + 'px',
            paddingRight: cfg.titleBar.padding[1] + 'px',
            paddingBottom: cfg.titleBar.padding[2] + 'px',
            paddingLeft: cfg.titleBar.padding[3] + 'px',
            borderBottom: '4px solid ' + frameStroke,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }}
          className="handle"
        >
          <span
            style={{
              fontSize: cfg.titleText.fontSize,
              fontWeight: cfg.titleText.fontWeight,
              color: cfg.titleText.color
            }}
          >blogs</span>
          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '0px',
              cursor: 'pointer'
            }}
          >
            <span
              style={{
                fontSize: cfg.closeButton.fontSize,
                fontWeight: cfg.closeButton.fontWeight,
                color: cfg.closeButton.color
              }}
            >[x]</span>
          </button>
        </div>

        {/* content-area */}
        <div
          style={{
            height: cfg.contentArea.height + 'px',
            paddingTop: cfg.contentArea.padding[0] + 'px',
            paddingRight: cfg.contentArea.padding[1] + 'px',
            paddingBottom: cfg.contentArea.padding[2] + 'px',
            paddingLeft: cfg.contentArea.padding[3] + 'px',
            boxSizing: 'border-box',
            overflow: 'auto'
          }}
        >
          <div style={{ fontSize: cfg.placeholderText.fontSize, color: cfg.placeholderText.color }}>
            blogs will appear here soon.
          </div>
        </div>
      </div>
    </Draggable>
  );
}
