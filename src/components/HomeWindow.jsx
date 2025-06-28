import React from 'react';
import uiSpec from '../ui-spec';

export default function HomeWindow({ onOpen }) {
  const cfg = uiSpec.home;
  return (
    <div style={{ position: 'fixed', top: '0px', left: '0px', right: '0px', bottom: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          position: 'relative',
          width: cfg.window.width + 'px',
          height: cfg.window.height + 'px',
          backgroundColor: cfg.window.bg,
          border: cfg.window.stroke + 'px solid black',
          borderRadius: cfg.window.radius + 'px',
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
            <span>hi!&nbsp;</span>
            <span style={{ color: cfg.mainText.colors[1], marginLeft: cfg.mainText.marginLeft + 'px' }}>
              i'm lbee
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
            technology enthusiasm
          </div>

          {/* icon groups */}
          <div style={{ display: 'flex', margin: cfg.supportingText.marginTop + 'px' }}>
            {Object.entries(cfg.iconGroup).map(([key, grp]) => (
              <div
                key={key}
                onClick={() => onOpen(key)}
                style={{
                  width: grp.width + 'px',
                  height: grp.height + 'px',
                  margin: grp.margin + 'px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={`/ico/home/${key}.png`}
                  alt={`${key} icon`}
                  style={{ width: cfg.icon.width + 'px', height: cfg.icon.height + 'px' }}
                />
                <div
                  style={{
                    width: cfg.iconText.width + 'px',
                    height: cfg.iconText.height + 'px',
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
