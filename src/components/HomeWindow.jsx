import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';

export default function HomeWindow({ onOpen }) {
  const cfg = useThemedSpec('home');
  const { palette } = useTheme();
  const frameStroke = cfg.window.strokeColor || palette.frameStrokeColor || '#000000';
  return (
    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', bottom: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          position: 'relative',
          width: cfg.window.width + 'px',
          height: cfg.window.height + 'px',
          backgroundColor: cfg.window.bg,
          border: cfg.window.stroke + 'px solid ' + frameStroke,
          borderRadius: cfg.window.radius + 'px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          filter: 'drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.25))'
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
            justifyContent: 'flex-start',
            boxSizing: 'border-box'
          }}
        >
          <span
            style={{
              fontSize: cfg.titleText.fontSize,
              fontWeight: cfg.titleText.fontWeight,
              color: cfg.titleText.color
            }}
          >
            home
          </span>
        </div>

        {/* content-area */}
        <div
          style={{
            height: cfg.contentArea.height + 'px',
            backgroundColor: cfg.contentArea.bg,
            paddingTop: cfg.contentArea.padding[0] + 'px',
            paddingRight: cfg.contentArea.padding[1] + 'px',
            paddingBottom: cfg.contentArea.padding[2] + 'px',
            paddingLeft: cfg.contentArea.padding[3] + 'px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* main-text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: cfg.mainText.fontSize,
              fontWeight: cfg.mainText.fontWeight,
              color: cfg.mainText.colors[0]
            }}
          >
            <span>hey!&nbsp;</span>
            <span style={{ color: cfg.mainText.colors[1], marginLeft: cfg.mainText.marginLeft + 'px' }}>
              it's eric
            </span>
          </div>

          {/* supporting-text */}
          <div
            style={{
              marginBottom: cfg.supportingText.marginBottom + 'px',
              fontSize: cfg.supportingText.fontSize,
              fontWeight: cfg.supportingText.fontWeight,
              color: cfg.supportingText.color
            }}
          >
            technology enthusiasm // 40%
          </div>

          {/* icon groups */}
          <div style={{ display: 'flex', margin: cfg.supportingText.marginTop + 'px' }}>
            {Object.entries(cfg.navigationIcons).map(([key, iconConfig]) => (
              <div
                key={key}
                onClick={() => onOpen(key.replace('Icon', ''))}
                style={{
                  width: iconConfig.width + 'px',
                  height: iconConfig.height + 'px',
                  margin: iconConfig.margin + 'px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={iconConfig.source}
                  alt={`${key} icon`}
                  style={{ width: cfg.iconImage.width + 'px', height: cfg.iconImage.height + 'px' }}
                />
                <div
                  style={{
                    width: cfg.iconLabel.width + 'px',
                    height: cfg.iconLabel.height + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.iconLabel.fontSize,
                    fontWeight: cfg.iconLabel.fontWeight,
                    color: cfg.iconLabel.color
                  }}
                >
                  {key.replace('Icon', '')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
