import React from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

export default function WorkWindow({ onClose }) {
  const cfg = uiSpec.work;
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
            work
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
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Section 1: DOTFILES */}
          <div style={{ marginBottom: cfg.section1.spacing.marginBottom + 'px' }}>
            <h3 style={{
              fontSize: cfg.section1.title.fontSize,
              fontWeight: cfg.section1.title.fontWeight,
              color: cfg.section1.title.color,
              marginTop: cfg.section1.title.margin[0] + 'px',
              marginRight: cfg.section1.title.margin[1] + 'px',
              marginBottom: cfg.section1.title.margin[2] + 'px',
              marginLeft: cfg.section1.title.margin[3] + 'px'
            }}>
              DOTFILES (ARCH) - dotees
            </h3>
            <div style={{
              paddingTop: cfg.section1.content.padding[0] + 'px',
              paddingRight: cfg.section1.content.padding[1] + 'px',
              paddingBottom: cfg.section1.content.padding[2] + 'px',
              paddingLeft: cfg.section1.content.padding[3] + 'px',
              minHeight: '40px'
            }}>
              {/* Empty for now */}
            </div>
          </div>

          {/* Section 2: AFTER EFFECTS */}
          <div style={{ marginBottom: cfg.section2.spacing.marginBottom + 'px' }}>
            <h3 style={{
              fontSize: cfg.section2.title.fontSize,
              fontWeight: cfg.section2.title.fontWeight,
              color: cfg.section2.title.color,
              marginTop: cfg.section2.title.margin[0] + 'px',
              marginRight: cfg.section2.title.margin[1] + 'px',
              marginBottom: cfg.section2.title.margin[2] + 'px',
              marginLeft: cfg.section2.title.margin[3] + 'px'
            }}>
              AFTER EFFECTS - adi ang Long
            </h3>
            <div style={{
              paddingTop: cfg.section2.content.padding[0] + 'px',
              paddingRight: cfg.section2.content.padding[1] + 'px',
              paddingBottom: cfg.section2.content.padding[2] + 'px',
              paddingLeft: cfg.section2.content.padding[3] + 'px'
            }}>
              {/* Video slots layout */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: cfg.section2.videoGrid.gap + 'px' }}>
                {/* Top row: S1 and S2 (horizontal 16:9) */}
                <div style={{ display: 'flex', gap: cfg.section2.videoGrid.gap + 'px' }}>
                  <div style={{ 
                    width: cfg.section2.videoSlots.slot1.width + 'px', 
                    height: cfg.section2.videoSlots.slot1.height + 'px', 
                    backgroundColor: cfg.section2.videoSlot.backgroundColor,
                    borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.section2.videoSlot.fontSize,
                    color: cfg.section2.videoSlot.color
                  }}>
                    <video
                      src={cfg.section2.videoSlots.slot1.source}
                      style={{
                        width: cfg.section2.videoSlots.slot1.width + 'px', 
                        height: cfg.section2.videoSlots.slot1.height + 'px', 
                        borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                        objectFit: 'cover'
                      }}
                      controls
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                    />
                    {cfg.section2.videoSlots.slot1.showDimensions && (
                      <div style={{ 
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem'
                      }}>
                        {cfg.section2.videoSlots.slot1.width}w x {cfg.section2.videoSlots.slot1.height}h
                      </div>
                    )}
                  </div>
                  <div style={{ 
                    width: cfg.section2.videoSlots.slot2.width + 'px', 
                    height: cfg.section2.videoSlots.slot2.height + 'px', 
                    backgroundColor: cfg.section2.videoSlot.backgroundColor,
                    borderRadius: cfg.section2.videoSlot.borderRadius + 'px'
                  }}>
                    <video
                      src={cfg.section2.videoSlots.slot2.source}
                      style={{
                        width: cfg.section2.videoSlots.slot2.width + 'px', 
                        height: cfg.section2.videoSlots.slot2.height + 'px', 
                        borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                        objectFit: 'cover'
                      }}
                      controls
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                    />
                  </div>
                </div>
                
                {/* Bottom row: S3, S4, S5 */}
                <div style={{ display: 'flex', gap: cfg.section2.videoGrid.gap + 'px' }}>
                  {/* S3 - vertical 9:16 */}
                  <div style={{ 
                    width: cfg.section2.videoSlots.slot3.width + 'px', 
                    height: cfg.section2.videoSlots.slot3.height + 'px', 
                    backgroundColor: cfg.section2.videoSlot.backgroundColor,
                    borderRadius: cfg.section2.videoSlot.borderRadius + 'px'
                  }}>
                    <video
                      src={cfg.section2.videoSlots.slot3.source}
                      style={{
                        width: cfg.section2.videoSlots.slot3.width + 'px', 
                        height: cfg.section2.videoSlots.slot3.height + 'px', 
                        borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                        objectFit: 'cover'
                      }}
                      controls
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                    />
                  </div>
                  
                  {/* S4 - vertical 3:4 */}
                  <div style={{ 
                    width: cfg.section2.videoSlots.slot4.width + 'px', 
                    height: cfg.section2.videoSlots.slot4.height + 'px', 
                    backgroundColor: cfg.section2.videoSlot.backgroundColor,
                    borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.section2.videoSlot.fontSize,
                    color: cfg.section2.videoSlot.color
                  }}>
                    <video
                      src={cfg.section2.videoSlots.slot4.source}
                      style={{
                        width: cfg.section2.videoSlots.slot4.width + 'px', 
                        height: cfg.section2.videoSlots.slot4.height + 'px', 
                        borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                        objectFit: 'cover'
                      }}
                      controls
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                    />
                    {cfg.section2.videoSlots.slot4.showDimensions && `${cfg.section2.videoSlots.slot4.width}w x ${cfg.section2.videoSlots.slot4.height}h`}
                  </div>
                  
                  {/* S5 - vertical 9:16 */}
                  <div style={{ 
                    width: cfg.section2.videoSlots.slot5.width + 'px', 
                    height: cfg.section2.videoSlots.slot5.height + 'px', 
                    backgroundColor: cfg.section2.videoSlot.backgroundColor,
                    borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.section2.videoSlot.fontSize,
                    color: cfg.section2.videoSlot.color
                  }}>
                    <video
                      src={cfg.section2.videoSlots.slot5.source}
                      style={{
                        width: cfg.section2.videoSlots.slot5.width + 'px', 
                        height: cfg.section2.videoSlots.slot5.height + 'px', 
                        borderRadius: cfg.section2.videoSlot.borderRadius + 'px',
                        objectFit: 'cover'
                      }}
                      controls
                      autoPlay
                      muted
                      loop
                      preload="metadata"
                    />
                    {cfg.section2.videoSlots.slot5.showDimensions && `${cfg.section2.videoSlots.slot5.width}w x ${cfg.section2.videoSlots.slot5.height}h`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: DEVELOPMENT */}
          <div>
            <h3 style={{
              fontSize: cfg.section3.title.fontSize,
              fontWeight: cfg.section3.title.fontWeight,
              color: cfg.section3.title.color,
              marginTop: cfg.section3.title.margin[0] + 'px',
              marginRight: cfg.section3.title.margin[1] + 'px',
              marginBottom: cfg.section3.title.margin[2] + 'px',
              marginLeft: cfg.section3.title.margin[3] + 'px'
            }}>
              DEVELOPMENT - personal project(s)
            </h3>
            <div style={{
              paddingTop: cfg.section3.content.padding[0] + 'px',
              paddingRight: cfg.section3.content.padding[1] + 'px',
              paddingBottom: cfg.section3.content.padding[2] + 'px',
              paddingLeft: cfg.section3.content.padding[3] + 'px'
            }}>
              <ul style={{
                margin: cfg.section3.developmentText.margin + 'px',
                paddingLeft: cfg.section3.developmentText.paddingLeft + 'px',
                lineHeight: cfg.section3.developmentText.lineHeight
              }}>
                <li>archy - this website! &lt;3</li>
                <li>that's it for the moment, some projects that i'm currently working on will be releasing soon!</li>
              </ul>
              <p style={{
                marginTop: cfg.section3.githubLink.marginTop + 'px',
                fontSize: cfg.section3.githubLink.fontSize,
                color: cfg.section3.githubLink.color
              }}>
                check out on my <a href="https://github.com/lbee2012/ " target="_blank" rel="noopener noreferrer">github</a>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
