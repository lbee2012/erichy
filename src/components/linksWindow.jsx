import React from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

export default function LinksWindow({ onClose }) {
  const cfg = uiSpec.links;
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
          >
            links
          </span>
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
            >
              [x]
            </span>
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
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Social Media Icons Grid */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            width: '100%',
          }}>
            {/* First row - 4 icons */}
            {['discord', 'instagram', 'telegram', 'linkedin'].map((platform) => (
              <div
                key={platform}
                style={{
                  width: cfg.iconGroup[platform].width + 'px',
                  height: cfg.iconGroup[platform].height + 'px',
                  marginTop: cfg.iconGroup[platform].margin[0] + 'px',
                  marginRight: cfg.iconGroup[platform].margin[1] + 'px',
                  marginBottom: cfg.iconGroup[platform].margin[2] + 'px',
                  marginLeft: cfg.iconGroup[platform].margin[3] + 'px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={`/ico/links/${platform}.png`}
                  alt={platform}
                  style={{
                    width: cfg.icons.width + 'px',
                    height: cfg.icons.height + 'px',
                    objectFit: 'contain'
                  }}
                />
                <div
                  style={{
                    width: cfg.iconText.width + 'px',
                    height: cfg.iconText.height + 'px',
                    fontSize: cfg.iconText.fontSize,
                    fontWeight: cfg.iconText.fontWeight,
                    color: cfg.iconText.color,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {platform === 'linkedin' ? 'edin' :
                   platform === 'instagram' ? 'ig' :
                   platform === 'telegram' ? 'tele' :
                   platform === 'discord' ? 'disco' :
                   platform}
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 4 icons */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            width: '100%',
          }}>
            {['github', 'x', 'whatsapp', 'youtube'].map((platform) => (
              <div
                key={platform}
                style={{
                  width: cfg.iconGroup[platform].width + 'px',
                  height: cfg.iconGroup[platform].height + 'px',
                  marginTop: cfg.iconGroup[platform].margin[0] + 'px',
                  marginRight: cfg.iconGroup[platform].margin[1] + 'px',
                  marginBottom: cfg.iconGroup[platform].margin[2] + 'px',
                  marginLeft: cfg.iconGroup[platform].margin[3] + 'px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={`/ico/links/${platform}.png`}
                  alt={platform}
                  style={{
                    width: cfg.icons.width + 'px',
                    height: cfg.icons.height + 'px',
                    objectFit: 'contain'
                  }}
                />
                <div
                  style={{
                    width: cfg.iconText.width + 'px',
                    height: cfg.iconText.height + 'px',
                    fontSize: cfg.iconText.fontSize,
                    fontWeight: cfg.iconText.fontWeight,
                    color: cfg.iconText.color,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {platform === 'github' ? 'gubhit' : 
                   platform === 'x' ? 'x' :
                   platform === 'whatsapp' ? 'whatsup' :
                   platform === 'youtube' ? 'utub' :
                   platform}
                </div>
              </div>
            ))}
          </div>
          
          {/* Description Frame */}
          <div
            style={{
              width: cfg.descriptionFrame.width + 'px',
              height: cfg.descriptionFrame.height + 'px',
              border: cfg.descriptionFrame.stroke + 'px solid ' + cfg.descriptionFrame.strokeColor,
              borderRadius: cfg.descriptionFrame.radius + 'px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}
          >
            <span
              style={{
                fontSize: cfg.description.fontSize,
                color: cfg.description.color,
                textAlign: 'center'
              }}
            >
              clicking any links will open a new tab!
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
