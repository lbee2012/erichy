import React from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

const icons = ['discord','instagram','telegram','linkedin','github','tiktok','whatsapp','paypal'];

export default function ContactWindow({ onClose }) {
  const cfg = uiSpec.contact;
  const description = 'clicking any links will open a new tab!';
  
  // split into two rows of exactly 4
  const row1 = icons.slice(0, 4);
  const row2 = icons.slice(4);

  return (
    <Draggable handle=".handle">
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
          >
            contact
          </span>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
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

        {/* content-area */}
        <div
          style={{
            height: `${cfg.contentArea.height}px`,
            padding: `${cfg.contentArea.padding[0]}px ${cfg.contentArea.padding[1]}px ${cfg.contentArea.padding[2]}px ${cfg.contentArea.padding[3]}px`,
            boxSizing: 'border-box',
            overflow: 'auto'
          }}
        >
          {[row1, row2].map((row, i) => (
            <div
              key={i}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {row.map(icon => {
                const grp = cfg.iconGroup[icon];
                return (
                  <div
                    key={icon}
                    style={{
                      width: `${grp.width}px`,
                      height: `${grp.height}px`,
                      margin: `${grp.margin[0]}px ${grp.margin[1]}px ${grp.margin[2]}px ${grp.margin[3]}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src={`/ico/contact/${icon}.png`}
                      alt={`${icon} icon`}
                      style={{ width: `${cfg.icons.width}px`, height: `${cfg.icons.height}px` }}
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
                      {icon}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* description */}
          <div
            style={{
              width: `${cfg.descriptionFrame.width}px`,
              height: `${cfg.descriptionFrame.height}px`,
              padding: `${cfg.descriptionFrame.padding[0]}px ${cfg.descriptionFrame.padding[1]}px ${cfg.descriptionFrame.padding[2]}px ${cfg.descriptionFrame.padding[3]}px`,
              boxSizing: 'border-box',
              border: '1px solid black',
              borderRadius: `${cfg.descriptionFrame.radius}px`,
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontSize: cfg.description.fontSize,
                color: cfg.description.color,
              }}
            >
              {description}
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
}