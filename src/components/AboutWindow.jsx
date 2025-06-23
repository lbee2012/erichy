import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import avatarImg from '../../static/ico/about/cn_mel.jpeg';
import uiSpec from '../ui-spec';

export default function AboutWindow({ onClose }) {
  const cfg = uiSpec.about;
  const [content, setContent] = useState('Loading...');
  useEffect(() => {
    fetch('/content/about.md')
      .then(r => r.text()).then(txt => setContent(txt))
      .catch(() => setContent('Error loading content'));
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
          border: `${cfg.window.stroke}px solid black`,
          borderRadius: `${cfg.window.radius}px`,
          boxSizing: 'border-box'
        }}
        className="absolute flex flex-col overflow-hidden"
      >
        {/* title-bar */}
        <div
          style={{
            height: `${cfg.titleBar.height}px`,
            backgroundColor: cfg.titleBar.bg,
            padding: `${cfg.titleBar.padding[0]}px ${cfg.titleBar.padding[1]}px ${cfg.titleBar.padding[2]}px ${cfg.titleBar.padding[3]}px`,
            boxSizing: 'border-box',
            borderBottom: '4px solid black'
          }}
          className="handle flex items-center justify-between"
        >
          <span
            style={{
              fontSize: cfg.titleText.fontSize,
              fontWeight: cfg.titleText.fontWeight,
              color: cfg.titleText.color
            }}
          >about</span>
          <button
            onClick={onClose}
            style={{
              width: `${cfg.closeButton.width}px`,
              height: `${cfg.closeButton.height}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
            >[x]</span>
          </button>
        </div>

        {/* content-area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            paddingTop: `${cfg.contentArea.padding[0]}px`,
            paddingRight: `${cfg.contentArea.padding[1]}px`,
            paddingBottom: `${cfg.contentArea.padding[2]}px`,
            paddingLeft: `${cfg.contentArea.padding[3]}px`,
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'start' }}>
            <img
              src={avatarImg}
              alt="avatar"
              style={{
                width: `${cfg.avatar.width}px`,
                height: `${cfg.avatar.height}px`,
                borderRadius: `${cfg.avatar.radius}px`,
                margin: `${cfg.avatar.margin[0]}px ${cfg.avatar.margin[1]}px ${cfg.avatar.margin[2]}px ${cfg.avatar.margin[3]}px`              
              }}
            />
            <div>
              <div
                style={{
                  fontSize: cfg.nameText.fontSize,
                  fontWeight: cfg.nameText.fontWeight,
                  color: cfg.nameText.color,
                  margin: `${cfg.nameText.margin[0]}px ${cfg.nameText.margin[1]}px ${cfg.nameText.margin[2]}px ${cfg.nameText.margin[3]}px`                
                }}
              >Quy Long Hoang</div>
              <div
                style={{
                  fontSize: cfg.quoteText.fontSize,
                  fontWeight: cfg.quoteText.fontWeight,
                  color: cfg.quoteText.color,
                  margin: `${cfg.quoteText.margin[0]}px ${cfg.quoteText.margin[1]}px ${cfg.quoteText.margin[2]}px ${cfg.quoteText.margin[3]}px`
                }}
              >
                where is my quality?<br/>MMT Co., Ltd.
              </div>
            </div>
          </div>

          <hr
            style={{
              margin: `${cfg.separator.margin[0]}px ${cfg.separator.margin[1]}px ${cfg.separator.margin[2]}px ${cfg.separator.margin[3]}px`,
              borderTop: `${cfg.separator.borderWidth}px solid ${cfg.separator.color}`,
              width: `${cfg.separator.width}px`,
              marginLeft: `${cfg.separator.offsetLeft}px`,
              opacity: cfg.separator.opacity
            }}
          />

          <div
            style={{
              flex: 1,
              overflow: 'auto',
              width: `${cfg.content.width || '100%'}px`,
              fontSize: cfg.content.fontSize,
              color: cfg.content.color,
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
