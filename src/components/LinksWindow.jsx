import React from 'react';
import Draggable from 'react-draggable';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';
import { useDragState } from '../hooks/useDragState';

export default function LinksWindow({
  onClose,
  onOpenContact,
  onFocus = () => {},
  zIndex = 1,
  isOpen = true,
  defaultPosition = { x: 0, y: 0 }
}) {
  const cfg = useThemedSpec('links');
  const { palette } = useTheme();
  const handleFocus = () => onFocus();
  const { isDragging, handleDragStart, handleDragStop } = useDragState(handleFocus);
  // New order: disco, tele, edin, gubhit, mail, whasup
  const firstRowPlatforms = ['discord', 'telegram', 'linkedin'];
  const secondRowPlatforms = ['github', 'mail', 'whatsapp'];

  // Handle platform click to open URL in new tab
  const handlePlatformClick = (platform) => {
    if (platform === 'mail') {
      if (onOpenContact) onOpenContact();
      return;
    }
    const url = cfg.groupLinks[platform].url;
    if (url) window.open(url, '_blank');
  };
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
            marginTop: cfg.contentArea.margin[0] + 'px',
            marginRight: cfg.contentArea.margin[1] + 'px',
            marginBottom: cfg.contentArea.margin[2] + 'px',
            marginLeft: cfg.contentArea.margin[3] + 'px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* First row - 4 icons */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            width: '100%',
          }}>
            {firstRowPlatforms.map((platform) => (
              <div
                key={platform}
                onClick={() => handlePlatformClick(platform)}
                style={{
                  width: cfg.groupLinks[platform].width + 'px',
                  height: cfg.groupLinks[platform].height + 'px',
                  paddingTop: cfg.groupLinks[platform].padding[0] + 'px',
                  paddingRight: cfg.groupLinks[platform].padding[1] + 'px',
                  paddingBottom: cfg.groupLinks[platform].padding[2] + 'px',
                  paddingLeft: cfg.groupLinks[platform].padding[3] + 'px',
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
                  src={cfg.groupLinks[platform].source}
                  alt={platform}
                  style={{
                    width: cfg.groupIcon.width + 'px',
                    height: cfg.groupIcon.height + 'px',
                    objectFit: 'contain'
                  }}
                />
                <div
                  style={{
                    width: cfg.groupLabel.width + 'px',
                    height: cfg.groupLabel.height + 'px',
                    fontSize: cfg.groupLabel.fontSize,
                    fontWeight: cfg.groupLabel.fontWeight,
                    color: cfg.groupLabel.color,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {platform === 'linkedin' ? 'edin' :
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
            {secondRowPlatforms.map((platform) => (
              <div
                key={platform}
                onClick={() => handlePlatformClick(platform)}
                style={{
                  width: cfg.groupLinks[platform].width + 'px',
                  height: cfg.groupLinks[platform].height + 'px',
                  paddingTop: cfg.groupLinks[platform].padding[0] + 'px',
                  paddingRight: cfg.groupLinks[platform].padding[1] + 'px',
                  paddingBottom: cfg.groupLinks[platform].padding[2] + 'px',
                  paddingLeft: cfg.groupLinks[platform].padding[3] + 'px',
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
                  src={cfg.groupLinks[platform].source}
                  alt={platform}
                  style={{
                    width: cfg.groupIcon.width + 'px',
                    height: cfg.groupIcon.height + 'px',
                    objectFit: 'contain'
                  }}
                />
                <div
                  style={{
                    width: cfg.groupLabel.width + 'px',
                    height: cfg.groupLabel.height + 'px',
                    fontSize: cfg.groupLabel.fontSize,
                    fontWeight: cfg.groupLabel.fontWeight,
                    color: cfg.groupLabel.color,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {platform === 'github' ? 'gubhit' : 
                   platform === 'whatsapp' ? 'whasup' :
                   platform}
                </div>
              </div>
            ))}
          </div>
          
          {/* Description Frame */}
          <div
            style={{
              width: cfg.descriptionContainer.width + 'px',
              height: cfg.descriptionContainer.height + 'px',
              marginTop: cfg.descriptionContainer.marginTop + 'px',
              border: cfg.descriptionContainer.stroke + 'px solid ' + cfg.descriptionContainer.strokeColor,
              borderRadius: cfg.descriptionContainer.radius + 'px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box'
            }}
          >
            <span
              style={{
                fontSize: cfg.descriptionText.fontSize,
                color: cfg.descriptionText.color,
                textAlign: 'center'
              }}
            >
              wake me up on ...!
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
