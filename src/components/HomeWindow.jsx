import React from 'react';
import uiSpec from '../ui-spec';

export default function HomeWindow({ onOpen }) {
  const cfg = uiSpec.home;
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        style={{
          width: `${cfg.window.width}px`,
          height: `${cfg.window.height}px`,
          backgroundColor: cfg.window.bg,
          border: `${cfg.window.stroke}px solid black`,
          borderRadius: `${cfg.window.radius}px`,
          boxSizing: 'border-box'
        }}
        className="relative overflow-hidden"
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
          className="flex items-center justify-start"
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
            height: `${cfg.contentArea.height}px`,
            backgroundColor: cfg.contentArea.bg,
            padding: `${cfg.contentArea.padding[0]}px ${cfg.contentArea.padding[1]}px ${cfg.contentArea.padding[2]}px ${cfg.contentArea.padding[3]}px`,
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
            <span>hi!&nbsp;</span>
            <span style={{ color: cfg.mainText.colors[1], marginLeft: `${cfg.mainText.marginLeft}px` }}>
              i'm lbee
            </span>
          </div>

          {/* supporting-text */}
          <div
            style={{
              marginTop: `${cfg.supportingText.marginTop}px`,
              fontSize: cfg.supportingText.fontSize,
              fontWeight: cfg.supportingText.fontWeight,
              color: cfg.supportingText.color
            }}
          >
            technology enthusiasm
          </div>

          {/* icon groups */}
          <div style={{ display: 'flex', margin: `${cfg.supportingText.marginTop}px` }}>
            {Object.entries(cfg.iconGroup).map(([key, grp]) => (
              <div
                key={key}
                onClick={() => onOpen(key)}
                style={{
                  width: `${grp.width}px`,
                  height: `${grp.height}px`,
                  margin: `${grp.margin}px`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={`/ico/home/${key}.png`}
                  alt={`${key} icon`}
                  style={{ width: `${cfg.icon.width}px`, height: `${cfg.icon.height}px` }}
                />
                <div
                  style={{
                    width: `${cfg.iconText.width}px`,
                    height: `${cfg.iconText.height}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.iconText.fontSize,
                    fontWeight: cfg.iconText.fontWeight,
                    color: cfg.iconText.color
                  }}
                >
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
