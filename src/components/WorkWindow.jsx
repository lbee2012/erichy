import React from 'react';
import Draggable from 'react-draggable';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';
import { useDragState } from '../hooks/useDragState';

export default function WorkWindow({
  onClose,
  onFocus = () => {},
  zIndex = 1,
  isOpen = true,
  defaultPosition = { x: 0, y: 0 },
  onDragStop = () => {}
}) {
  const cfg = useThemedSpec('work');
  const { palette } = useTheme();
  const handleFocus = () => onFocus();
  const { isDragging, handleDragStart, handleDragStop } = useDragState(handleFocus, onDragStop);
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
            flexDirection: 'column',
            // Hide scrollbar but keep functionality
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
          className="work-scrollbar-hidden"
        >
          {/* Section 1: DOTFILES */}
          <div style={{ marginBottom: cfg.arch.spacing.marginBottom + 'px' }}>
            <h3 style={{
              fontSize: cfg.arch.sectionTitle.fontSize,
              fontWeight: cfg.arch.sectionTitle.fontWeight,
              color: cfg.arch.sectionTitle.color,
              marginTop: cfg.arch.sectionTitle.margin[0] + 'px',
              marginRight: cfg.arch.sectionTitle.margin[1] + 'px',
              marginBottom: cfg.arch.sectionTitle.margin[2] + 'px',
              marginLeft: cfg.arch.sectionTitle.margin[3] + 'px'
            }}>
              DOTFILES (ARCH & I3) - dotfs
            </h3>
            <div style={{
              paddingTop: cfg.arch.contentArea.padding[0] + 'px',
              paddingRight: cfg.arch.contentArea.padding[1] + 'px',
              paddingBottom: cfg.arch.contentArea.padding[2] + 'px',
              paddingLeft: cfg.arch.contentArea.padding[3] + 'px',
              minHeight: '40px'
            }}>
              {/* Empty for now */}
            </div>
          </div>

          {/* Section 2: AFTER EFFECTS */}
          <div style={{ marginBottom: cfg.aep.spacing.marginBottom + 'px' }}>
            <h3 style={{
              fontSize: cfg.aep.sectionTitle.fontSize,
              fontWeight: cfg.aep.sectionTitle.fontWeight,
              color: cfg.aep.sectionTitle.color,
              marginTop: cfg.aep.sectionTitle.margin[0] + 'px',
              marginRight: cfg.aep.sectionTitle.margin[1] + 'px',
              marginBottom: cfg.aep.sectionTitle.margin[2] + 'px',
              marginLeft: cfg.aep.sectionTitle.margin[3] + 'px'
            }}>
              AFTER EFFECTS - adi ang Long
            </h3>
            <div style={{
              paddingTop: cfg.aep.contentArea.padding[0] + 'px',
              paddingRight: cfg.aep.contentArea.padding[1] + 'px',
              paddingBottom: cfg.aep.contentArea.padding[2] + 'px',
              paddingLeft: cfg.aep.contentArea.padding[3] + 'px'
            }}>
              {/* Video slots layout */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: cfg.aep.videoGrid.gap + 'px' }}>
                {/* Top row: S1 and S2 (horizontal 16:9) */}
                <div style={{ display: 'flex', gap: cfg.aep.videoGrid.gap + 'px' }}>
                  <div style={{ 
                    width: cfg.aep.videoItems.video1.width + 'px', 
                    height: cfg.aep.videoItems.video1.height + 'px', 
                    backgroundColor: cfg.aep.videoPlaceholder.backgroundColor,
                    borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.aep.videoPlaceholder.fontSize,
                    color: cfg.aep.videoPlaceholder.color
                  }}>
                    <video
                      src={cfg.aep.videoItems.video1.source}
                      style={{
                        width: cfg.aep.videoItems.video1.width + 'px', 
                        height: cfg.aep.videoItems.video1.height + 'px', 
                        borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                        objectFit: cfg.aep.playbackSettings.objectFit
                      }}
                      controls={cfg.aep.playbackSettings.controls}
                      autoPlay={cfg.aep.playbackSettings.autoplay}
                      muted={cfg.aep.playbackSettings.muted}
                      loop={cfg.aep.playbackSettings.loop}
                      preload={cfg.aep.playbackSettings.preload}
                    />
                    {cfg.aep.videoItems.video1.showDimensions && (
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
                        {cfg.aep.videoItems.video1.width}w x {cfg.aep.videoItems.video1.height}h
                      </div>
                    )}
                  </div>
                  <div style={{ 
                    width: cfg.aep.videoItems.video2.width + 'px', 
                    height: cfg.aep.videoItems.video2.height + 'px', 
                    backgroundColor: cfg.aep.videoPlaceholder.backgroundColor,
                    borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px'
                  }}>
                    <video
                      src={cfg.aep.videoItems.video2.source}
                      style={{
                        width: cfg.aep.videoItems.video2.width + 'px', 
                        height: cfg.aep.videoItems.video2.height + 'px', 
                        borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                        objectFit: cfg.aep.playbackSettings.objectFit
                      }}
                      controls={cfg.aep.playbackSettings.controls}
                      autoPlay={cfg.aep.playbackSettings.autoplay}
                      muted={cfg.aep.playbackSettings.muted}
                      loop={cfg.aep.playbackSettings.loop}
                      preload={cfg.aep.playbackSettings.preload}
                    />
                  </div>
                </div>
                
                {/* Bottom row: S3, S4, S5 */}
                <div style={{ display: 'flex', gap: cfg.aep.videoGrid.gap + 'px' }}>
                  {/* S3 - vertical 9:16 */}
                  <div style={{ 
                    width: cfg.aep.videoItems.video3.width + 'px', 
                    height: cfg.aep.videoItems.video3.height + 'px', 
                    backgroundColor: cfg.aep.videoPlaceholder.backgroundColor,
                    borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px'
                  }}>
                    <video
                      src={cfg.aep.videoItems.video3.source}
                      style={{
                        width: cfg.aep.videoItems.video3.width + 'px', 
                        height: cfg.aep.videoItems.video3.height + 'px', 
                        borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                        objectFit: cfg.aep.playbackSettings.objectFit
                      }}
                      controls={cfg.aep.playbackSettings.controls}
                      autoPlay={cfg.aep.playbackSettings.autoplay}
                      muted={cfg.aep.playbackSettings.muted}
                      loop={cfg.aep.playbackSettings.loop}
                      preload={cfg.aep.playbackSettings.preload}
                    />
                  </div>
                  
                  {/* S4 - vertical 3:4 */}
                  <div style={{ 
                    width: cfg.aep.videoItems.video4.width + 'px', 
                    height: cfg.aep.videoItems.video4.height + 'px', 
                    backgroundColor: cfg.aep.videoPlaceholder.backgroundColor,
                    borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.aep.videoPlaceholder.fontSize,
                    color: cfg.aep.videoPlaceholder.color
                  }}>
                    <video
                      src={cfg.aep.videoItems.video4.source}
                      style={{
                        width: cfg.aep.videoItems.video4.width + 'px', 
                        height: cfg.aep.videoItems.video4.height + 'px', 
                        borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                        objectFit: cfg.aep.playbackSettings.objectFit
                      }}
                      controls={cfg.aep.playbackSettings.controls}
                      autoPlay={cfg.aep.playbackSettings.autoplay}
                      muted={cfg.aep.playbackSettings.muted}
                      loop={cfg.aep.playbackSettings.loop}
                      preload={cfg.aep.playbackSettings.preload}
                    />
                    {cfg.aep.videoItems.video4.showDimensions && `${cfg.aep.videoItems.video4.width}w x ${cfg.aep.videoItems.video4.height}h`}
                  </div>
                  
                  {/* S5 - vertical 9:16 */}
                  <div style={{ 
                    width: cfg.aep.videoItems.video5.width + 'px', 
                    height: cfg.aep.videoItems.video5.height + 'px', 
                    backgroundColor: cfg.aep.videoPlaceholder.backgroundColor,
                    borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: cfg.aep.videoPlaceholder.fontSize,
                    color: cfg.aep.videoPlaceholder.color
                  }}>
                    <video
                      src={cfg.aep.videoItems.video5.source}
                      style={{
                        width: cfg.aep.videoItems.video5.width + 'px', 
                        height: cfg.aep.videoItems.video5.height + 'px', 
                        borderRadius: cfg.aep.videoPlaceholder.borderRadius + 'px',
                        objectFit: cfg.aep.playbackSettings.objectFit
                      }}
                      controls={cfg.aep.playbackSettings.controls}
                      autoPlay={cfg.aep.playbackSettings.autoplay}
                      muted={cfg.aep.playbackSettings.muted}
                      loop={cfg.aep.playbackSettings.loop}
                      preload={cfg.aep.playbackSettings.preload}
                    />
                    {cfg.aep.videoItems.video5.showDimensions && `${cfg.aep.videoItems.video5.width}w x ${cfg.aep.videoItems.video5.height}h`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: DEVELOPMENT */}
          <div>
            <h3 style={{
              fontSize: cfg.development.sectionTitle.fontSize,
              fontWeight: cfg.development.sectionTitle.fontWeight,
              color: cfg.development.sectionTitle.color,
              marginTop: cfg.development.sectionTitle.margin[0] + 'px',
              marginRight: cfg.development.sectionTitle.margin[1] + 'px',
              marginBottom: cfg.development.sectionTitle.margin[2] + 'px',
              marginLeft: cfg.development.sectionTitle.margin[3] + 'px'
            }}>
              DEVELOPMENT - personal project(s)
            </h3>
            <div style={{
              paddingTop: cfg.development.contentArea.padding[0] + 'px',
              paddingRight: cfg.development.contentArea.padding[1] + 'px',
              paddingBottom: cfg.development.contentArea.padding[2] + 'px',
              paddingLeft: cfg.development.contentArea.padding[3] + 'px'
            }}>
              <ul style={{
                margin: cfg.development.descriptionText.margin + 'px',
                paddingLeft: cfg.development.descriptionText.paddingLeft + 'px',
                lineHeight: cfg.development.descriptionText.lineHeight,
                fontSize: cfg.development.descriptionText.fontSize,
                color: cfg.development.descriptionText.color
              }}>
                <li>archy - this website! &lt;3</li>
                <li>that's it for the moment, some projects that i'm currently working on will be releasing soon!</li>
              </ul>
              <p style={{
                marginTop: cfg.development.repositoryLink.marginTop + 'px',
                fontSize: cfg.development.repositoryLink.fontSize,
                color: cfg.development.repositoryLink.color
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
