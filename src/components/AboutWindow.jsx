import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import uiSpec from '../ui-spec';

export default function AboutWindow({ onClose }) {
  const cfg = uiSpec.about;
  const [content, setContent] = useState('Loading…');

  useEffect(() => {
    fetch('/content/about.md')
      .then(r => r.text())
      .then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
  }, []);

  return (
    <Draggable handle=".handle">
      <div
        style={{
          position: 'absolute',
          width: cfg.window.width + 'px',
          height: cfg.window.height + 'px',
          backgroundColor: cfg.window.bg,
          border: cfg.window.stroke + 'px solid black',
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
            borderBottom: '4px solid black',
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
              src={cfg.avatar.source}
              alt="avatar"
              style={{
                width: cfg.avatar.width + 'px',
                height: cfg.avatar.height + 'px',
                borderRadius: cfg.avatar.radius + 'px',
                marginTop: cfg.avatar.margin[0] + 'px',
                marginRight: cfg.avatar.margin[1] + 'px',
                marginBottom: cfg.avatar.margin[2] + 'px',
                marginLeft: cfg.avatar.margin[3] + 'px'
              }}
            />
            <div>
              <div
                style={{
                  fontSize: cfg.nameText.fontSize,
                  fontWeight: cfg.nameText.fontWeight,
                  color: cfg.nameText.color,
                  marginTop: cfg.nameText.margin[0] + 'px',
                  marginRight: cfg.nameText.margin[1] + 'px',
                  marginBottom: cfg.nameText.margin[2] + 'px',
                  marginLeft: cfg.nameText.margin[3] + 'px'
                }}
              >Quy Long Hoang</div>
              <div
                style={{
                  fontSize: cfg.quoteText.fontSize,
                  fontWeight: cfg.quoteText.fontWeight,
                  color: cfg.quoteText.color,
                  marginTop: cfg.quoteText.margin[0] + 'px',
                  marginRight: cfg.quoteText.margin[1] + 'px',
                  marginBottom: cfg.quoteText.margin[2] + 'px',
                  marginLeft: cfg.quoteText.margin[3] + 'px'
                }}
              >
                where is my quality?<br/>MMT Co., Ltd.
              </div>
            </div>
          </div>

          <hr
            style={{
              marginTop: cfg.separator.margin[0] + 'px',
              marginRight: cfg.separator.margin[1] + 'px',
              marginBottom: cfg.separator.margin[2] + 'px',
              marginLeft: cfg.separator.offsetLeft + 'px',
              borderTop: cfg.separator.borderWidth + 'px solid ' + cfg.separator.color,
              width: cfg.separator.width + 'px',
              opacity: cfg.separator.opacity
            }}
          />

          <div
            style={{
              flex: '1',
              overflow: 'auto',
              width: (cfg.content.width || '100%') + 'px',
              fontSize: cfg.content.normalText.fontSize,
              color: cfg.content.normalText.color,
              boxSizing: 'border-box'
            }}
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
