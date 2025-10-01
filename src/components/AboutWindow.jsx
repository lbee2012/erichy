import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';
import { useDragState } from '../hooks/useDragState';

export default function AboutWindow({
  onClose,
  onFocus = () => {},
  zIndex = 1,
  isOpen = true,
  defaultPosition = { x: 0, y: 0 },
  onDragStop = () => {}
}) {
  const cfg = useThemedSpec('about');
  const { palette } = useTheme();
  const [content, setContent] = useState('Loading…');

  const handleFocus = () => onFocus();
  const { isDragging, handleDragStart, handleDragStop } = useDragState(handleFocus, onDragStop);
  const frameStroke = cfg.window.strokeColor || palette.frameStrokeColor || '#000000';

  useEffect(() => {
    fetch('/sources/txt/about.md')
      .then(r => r.text())
      .then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
  }, []);

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
          >about</span>
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
            flex: '1',
            paddingTop: cfg.contentArea.padding[0] + 'px',
            paddingRight: cfg.contentArea.padding[1] + 'px',
            paddingBottom: cfg.contentArea.padding[2] + 'px',
            paddingLeft: cfg.contentArea.padding[3] + 'px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img
              src={cfg.profileImage.source}
              alt="profile"
              style={{
                width: cfg.profileImage.width + 'px',
                height: cfg.profileImage.height + 'px',
                borderRadius: cfg.profileImage.radius + 'px',
                marginTop: cfg.profileImage.margin[0] + 'px',
                marginRight: cfg.profileImage.margin[1] + 'px',
                marginBottom: cfg.profileImage.margin[2] + 'px',
                marginLeft: cfg.profileImage.margin[3] + 'px'
              }}
            />
            <div>
              <div
                style={{
                  fontSize: cfg.profileName.fontSize,
                  fontWeight: cfg.profileName.fontWeight,
                  color: cfg.profileName.color,
                  marginTop: cfg.profileName.margin[0] + 'px',
                  marginRight: cfg.profileName.margin[1] + 'px',
                  marginBottom: cfg.profileName.margin[2] + 'px',
                  marginLeft: cfg.profileName.margin[3] + 'px'
                }}
              >Quy Long Hoang</div>
              <div
                style={{
                  fontSize: cfg.profileQuote.fontSize,
                  fontWeight: cfg.profileQuote.fontWeight,
                  color: cfg.profileQuote.color,
                  marginTop: cfg.profileQuote.margin[0] + 'px',
                  marginRight: cfg.profileQuote.margin[1] + 'px',
                  marginBottom: cfg.profileQuote.margin[2] + 'px',
                  marginLeft: cfg.profileQuote.margin[3] + 'px'
                }}
              >
                where is my quality?<br/>MMT Co., Ltd.
              </div>
            </div>
          </div>

          <hr
            style={{
              marginTop: cfg.divider.margin[0] + 'px',
              marginRight: cfg.divider.margin[1] + 'px',
              marginBottom: cfg.divider.margin[2] + 'px',
              marginLeft: cfg.divider.offsetLeft + 'px',
              borderTop: cfg.divider.borderWidth + 'px solid ' + cfg.divider.color,
              width: cfg.divider.width + 'px',
              opacity: cfg.divider.opacity
            }}
          />

          <div
            style={{
              flex: '1',
              overflow: 'auto',
              width: (cfg.textStyles.width || '100%') + 'px',
              fontSize: cfg.textStyles.bodyText.fontSize,
              color: cfg.textStyles.bodyText.color,
              boxSizing: 'border-box'
            }}
            className="about-scrollbar-hidden"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
