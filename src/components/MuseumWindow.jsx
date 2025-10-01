import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';
import { useDragState } from '../hooks/useDragState';
import { DEFAULT_MUSEUM_DESCRIPTION, getMuseumDescription } from '../data/museum-text';

export default function MuseumWindow({
  onClose,
  onFocus = () => {},
  zIndex = 1,
  isOpen = true,
  defaultPosition = { x: 0, y: 0 },
  onDragStop = () => {}
}) {
  const cfg = useThemedSpec('museum');
  const { palette } = useTheme();
  const [zoomedImage, setZoomedImage] = useState(null);
  const handleFocus = () => onFocus();
  const { isDragging, handleDragStart, handleDragStop } = useDragState(handleFocus, onDragStop);
  const frameStroke = cfg.window.strokeColor || palette.frameStrokeColor || '#000000';
  const backgroundOverlay = cfg.backgroundOverlay || 'rgba(0, 0, 0, 0)';
  const backgroundImageValue = cfg.backgroundImage
    ? `linear-gradient(${backgroundOverlay}, ${backgroundOverlay}), url(${cfg.backgroundImage})`
    : undefined;

  const handleImageClick = (imageIndex, imageSrc) => {
    if (!imageSrc) return;

    const deviceKey = `device${imageIndex}`;
    const description = getMuseumDescription(deviceKey) || DEFAULT_MUSEUM_DESCRIPTION;
    setZoomedImage({ index: imageIndex, src: imageSrc, description });
  };

  const handleModalClose = () => {
    setZoomedImage(null);
  };

  return (
    <>
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
            backgroundImage: backgroundImageValue,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
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
            museum 
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
            overflow: 'auto'
          }}
          className="museum-scrollbar-hidden"
        >
          {/* Section 1: BOOKS */}
          <div>
            <h2
              style={{
                fontSize: cfg.sectionTitle.fontSize,
                fontWeight: cfg.sectionTitle.fontWeight,
                color: cfg.sectionTitle.color,
                marginTop: cfg.sectionTitle.margin[0] + 'px',
                marginRight: cfg.sectionTitle.margin[1] + 'px',
                marginBottom: cfg.sectionTitle.margin[2] + 'px',
                marginLeft: cfg.sectionTitle.margin[3] + 'px'
              }}
            >
              1. BOOKS
            </h2>
            <p
              style={{
                fontSize: cfg.sectionSubTitle.fontSize,
                fontWeight: cfg.sectionSubTitle.fontWeight,
                color: cfg.sectionSubTitle.color,
                marginTop: cfg.sectionSubTitle.margin[0] + 'px',
                marginRight: cfg.sectionSubTitle.margin[1] + 'px',
                marginBottom: cfg.sectionSubTitle.margin[2] + 'px',
                marginLeft: cfg.sectionSubTitle.margin[3] + 'px'
              }}
            >
              (J.V.Scholz special reccs)
            </p>
            
            <div
              style={{
                marginTop: cfg.sectionContent.margin[0] + 'px',
                marginRight: cfg.sectionContent.margin[1] + 'px',
                marginBottom: cfg.sectionContent.margin[2] + 'px',
                marginLeft: cfg.sectionContent.margin[3] + 'px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Book 1 Frame - Image left, description right */}
              <div
                style={{
                  width: cfg.books.itemFrame1.width + 'px',
                  height: cfg.books.itemFrame1.height + 'px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: cfg.books.itemFrame1.marginBottom + 'px'
                }}
              >
                <img
                  src={cfg.books.item1.source}
                  alt="Atomic Habits"
                  style={{
                    width: cfg.books.itemImage.width + 'px',
                    height: cfg.books.itemImage.height + 'px',
                    borderRadius: cfg.books.itemImage.radius + 'px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ flex: 1, marginLeft: '40px' }}>
                  <h3
                    style={{
                      fontSize: cfg.books.sectionTitle.fontSize,
                      fontWeight: cfg.books.sectionTitle.fontWeight,
                      color: cfg.books.sectionTitle.color,
                      margin: '0 0 10px 0'
                    }}
                  >
                    atomic habits - james clear
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.books.itemDescription.fontSize,
                      fontWeight: cfg.books.itemDescription.fontWeight,
                      color: cfg.books.itemDescription.color,
                      margin: 0
                    }}
                  >
                    a vietnamized ver, i borrowed this book from a family member<br/>
                    this book is crazy
                  </p>
                </div>
              </div>
              
              {/* Book 2 Frame - Image right, description left */}
              <div
                style={{
                  width: cfg.books.itemFrame2.width + 'px',
                  height: cfg.books.itemFrame2.height + 'px',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ flex: 1, marginRight: '40px', textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                  <h3
                    style={{
                      fontSize: cfg.books.sectionTitle.fontSize,
                      fontWeight: cfg.books.sectionTitle.fontWeight,
                      color: cfg.books.sectionTitle.color,
                      margin: '0 0 10px 0'
                    }}
                  >
                    deep work - cal newport
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.books.itemDescription.fontSize,
                      fontWeight: cfg.books.itemDescription.fontWeight,
                      color: cfg.books.itemDescription.color,
                      margin: 0
                    }}
                  >
                    bought this one on an online store<br/>
                    this book is also crazy
                  </p>
                </div>
                <img
                  src={cfg.books.item2.source}
                  alt="Deep Work"
                  style={{
                    width: cfg.books.itemImage.width + 'px',
                    height: cfg.books.itemImage.height + 'px',
                    borderRadius: cfg.books.itemImage.radius + 'px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>

          {/* Section 2: TECHS */}
          <div>
            <h2
              style={{
                fontSize: cfg.sectionTitle.fontSize,
                fontWeight: cfg.sectionTitle.fontWeight,
                color: cfg.sectionTitle.color,
                marginTop: cfg.sectionTitle.margin[0] + 'px',
                marginRight: cfg.sectionTitle.margin[1] + 'px',
                marginBottom: cfg.sectionTitle.margin[2] + 'px',
                marginLeft: cfg.sectionTitle.margin[3] + 'px'
              }}
            >
              2. TECHS
            </h2>
            <p
              style={{
                fontSize: cfg.sectionSubTitle.fontSize,
                fontWeight: cfg.sectionSubTitle.fontWeight,
                color: cfg.sectionSubTitle.color,
                marginTop: cfg.sectionSubTitle.margin[0] + 'px',
                marginRight: cfg.sectionSubTitle.margin[1] + 'px',
                marginBottom: cfg.sectionSubTitle.margin[2] + 'px',
                marginLeft: cfg.sectionSubTitle.margin[3] + 'px'
              }}
            >
              (some of the most techs i owned)
            </p>
            
            <div
              style={{
                marginTop: cfg.sectionContent.margin[0] + 'px',
                marginRight: cfg.sectionContent.margin[1] + 'px',
                marginBottom: cfg.sectionContent.margin[2] + 'px',
                marginLeft: cfg.sectionContent.margin[3] + 'px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: cfg.techs.deviceImage.spacing + 'px'
              }}
            >
              {Array.from({ length: cfg.techs.totalSlots || 16 }, (_, index) => index + 1).map((num) => {
                const deviceKey = `device${num}`;
                const deviceConfig = cfg.techs[deviceKey] || {};
                const source = deviceConfig.source;
                const hasImage = Boolean(source);
                return (
                  <div
                    key={deviceKey}
                    style={{
                      width: cfg.techs.deviceImage.width + 'px',
                      height: cfg.techs.deviceImage.height + 'px',
                      backgroundColor: cfg.techs.deviceImage.backgroundColor,
                      borderRadius: cfg.techs.deviceImage.borderRadius + 'px',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: hasImage ? cfg.techs.deviceImage.cursor : 'default',
                      transition: 'transform 0.2s ease',
                      willChange: hasImage ? 'transform' : 'auto'
                    }}
                    onClick={() => handleImageClick(num, source)}
                    onMouseEnter={(e) => {
                      if (hasImage) e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      if (hasImage) e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {hasImage ? (
                      <img
                        src={source}
                        alt={`Device ${num}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <span style={{ color: palette.placeholderTextColor || '#555555', fontSize: '0.85rem', textAlign: 'center', padding: '0 12px' }}>
                        coming soon
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: DIY */}
          <div>
            <h2
              style={{
                fontSize: cfg.sectionTitle.fontSize,
                fontWeight: cfg.sectionTitle.fontWeight,
                color: cfg.sectionTitle.color,
                marginTop: cfg.sectionTitle.margin[0] + 'px',
                marginRight: cfg.sectionTitle.margin[1] + 'px',
                marginBottom: cfg.sectionTitle.margin[2] + 'px',
                marginLeft: cfg.sectionTitle.margin[3] + 'px'
              }}
            >
              3. DIY
            </h2>
            <p
              style={{
                fontSize: cfg.sectionSubTitle.fontSize,
                fontWeight: cfg.sectionSubTitle.fontWeight,
                color: cfg.sectionSubTitle.color,
                marginTop: cfg.sectionSubTitle.margin[0] + 'px',
                marginRight: cfg.sectionSubTitle.margin[1] + 'px',
                marginBottom: cfg.sectionSubTitle.margin[2] + 'px',
                marginLeft: cfg.sectionSubTitle.margin[3] + 'px'
              }}
            >
              (wanna show guys my kingdom of hand-made products)
            </p>
            
            <div
              style={{
                marginTop: cfg.sectionContent.margin[0] + 'px',
                marginRight: cfg.sectionContent.margin[1] + 'px',
                marginBottom: cfg.sectionContent.margin[2] + 'px',
                marginLeft: cfg.sectionContent.margin[3] + 'px'
              }}
            >
              {/* Empty section as requested */}
            </div>
          </div>

          {/* Section 4: ACHIEVEMENTS */}
          <div>
            <h2
              style={{
                fontSize: cfg.sectionTitle.fontSize,
                fontWeight: cfg.sectionTitle.fontWeight,
                color: cfg.sectionTitle.color,
                marginTop: cfg.sectionTitle.margin[0] + 'px',
                marginRight: cfg.sectionTitle.margin[1] + 'px',
                marginBottom: cfg.sectionTitle.margin[2] + 'px',
                marginLeft: cfg.sectionTitle.margin[3] + 'px'
              }}
            >
              4. ACHIEVEMENTS
            </h2>
            <p
              style={{
                fontSize: cfg.sectionSubTitle.fontSize,
                fontWeight: cfg.sectionSubTitle.fontWeight,
                color: cfg.sectionSubTitle.color,
                marginTop: cfg.sectionSubTitle.margin[0] + 'px',
                marginRight: cfg.sectionSubTitle.margin[1] + 'px',
                marginBottom: cfg.sectionSubTitle.margin[2] + 'px',
                marginLeft: cfg.sectionSubTitle.margin[3] + 'px'
              }}
            >
              ('childhood' who does not even play a game, huh?)
            </p>
            
            <div
              style={{
                marginTop: cfg.sectionContent.margin[0] + 'px',
                marginRight: cfg.sectionContent.margin[1] + 'px',
                marginBottom: cfg.sectionContent.margin[2] + 'px',
                marginLeft: cfg.sectionContent.margin[3] + 'px'
              }}
            >
              {/* Game 1 */}
              <div
                style={{
                  width: cfg.achievements.gameFrame1.width + 'px',
                  height: cfg.achievements.gameFrame1.height + 'px',
                  display: 'flex',
                  marginBottom: cfg.achievements.gameFrame1.marginBottom + 'px'
                }}
              >
                <img
                  src={cfg.achievements.gameImage1.source}
                  alt="Game 1"
                  style={{
                    width: cfg.achievements.gameImage1.width + 'px',
                    height: cfg.achievements.gameImage1.height + 'px',
                    objectFit: 'cover',
                    borderRadius: cfg.achievements.gameImage1.borderRadius + 'px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: cfg.achievements.gameTitle.fontSize,
                      fontWeight: cfg.achievements.gameTitle.fontWeight,
                      color: cfg.achievements.gameTitle.color,
                      marginTop: cfg.achievements.gameTitle.margin[0] + 'px',
                      marginRight: cfg.achievements.gameTitle.margin[1] + 'px',
                      marginBottom: cfg.achievements.gameTitle.margin[2] + 'px',
                      marginLeft: cfg.achievements.gameTitle.margin[3] + 'px'
                    }}
                  >
                    freefire
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.achievements.gameDescription.fontSize,
                      fontWeight: cfg.achievements.gameDescription.fontWeight,
                      color: cfg.achievements.gameDescription.color,
                      marginTop: cfg.achievements.gameDescription.margin[0] + 'px',
                      marginRight: cfg.achievements.gameDescription.margin[1] + 'px',
                      marginBottom: cfg.achievements.gameDescription.margin[2] + 'px',
                      marginLeft: cfg.achievements.gameDescription.margin[3] + 'px'
                    }}
                  >
                    grandmaster vietnam no.1 rank<br/>
                    death match - season 7<br/>
                    i've played for straight around 32 hours,<br/>
                    from the beginning of new season 7
                  </p>
                </div>
              </div>

              {/* Game 2 */}
              <div
                style={{
                  width: cfg.achievements.gameFrame2.width + 'px',
                  height: cfg.achievements.gameFrame2.height + 'px',
                  display: 'flex'
                }}
              >
                <img
                  src={cfg.achievements.gameImage2.source}
                  alt="Game 2"
                  style={{
                    width: cfg.achievements.gameImage2.width + 'px',
                    height: cfg.achievements.gameImage2.height + 'px',
                    objectFit: 'cover',
                    borderRadius: cfg.achievements.gameImage2.borderRadius + 'px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: cfg.achievements.gameTitle.fontSize,
                      fontWeight: cfg.achievements.gameTitle.fontWeight,
                      color: cfg.achievements.gameTitle.color,
                      marginTop: cfg.achievements.gameTitle.margin[0] + 'px',
                      marginRight: cfg.achievements.gameTitle.margin[1] + 'px',
                      marginBottom: cfg.achievements.gameTitle.margin[2] + 'px',
                      marginLeft: cfg.achievements.gameTitle.margin[3] + 'px'
                    }}
                  >
                    arena of valor (lien quan mobile)
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.achievements.gameDescription.fontSize,
                      fontWeight: cfg.achievements.gameDescription.fontWeight,
                      color: cfg.achievements.gameDescription.color,
                      marginTop: cfg.achievements.gameDescription.margin[0] + 'px',
                      marginRight: cfg.achievements.gameDescription.margin[1] + 'px',
                      marginBottom: cfg.achievements.gameDescription.margin[2] + 'px',
                      marginLeft: cfg.achievements.gameDescription.margin[3] + 'px'
                    }}
                  >
                    y'bneth - vietnam no.1<br/>
                    in season 22<br/>
                    i got this badge few times,<br/>
                    but this pic is the first, the earliest (oldest)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: INSPIRATIONS */}
          <div>
            <h2
              style={{
                fontSize: cfg.sectionTitle.fontSize,
                fontWeight: cfg.sectionTitle.fontWeight,
                color: cfg.sectionTitle.color,
                marginTop: cfg.sectionTitle.margin[0] + 'px',
                marginRight: cfg.sectionTitle.margin[1] + 'px',
                marginBottom: cfg.sectionTitle.margin[2] + 'px',
                marginLeft: cfg.sectionTitle.margin[3] + 'px'
              }}
            >
              5. INSPIRATIONS
            </h2>
            <p
              style={{
                fontSize: cfg.sectionSubTitle.fontSize,
                fontWeight: cfg.sectionSubTitle.fontWeight,
                color: cfg.sectionSubTitle.color,
                marginTop: cfg.sectionSubTitle.margin[0] + 'px',
                marginRight: cfg.sectionSubTitle.margin[1] + 'px',
                marginBottom: cfg.sectionSubTitle.margin[2] + 'px',
                marginLeft: cfg.sectionSubTitle.margin[3] + 'px'
              }}
            >
              (evelyn)
            </p>
            
            <div
              style={{
                marginTop: cfg.sectionContent.margin[0] + 'px',
                marginRight: cfg.sectionContent.margin[1] + 'px',
                marginBottom: cfg.sectionContent.margin[2] + 'px',
                marginLeft: cfg.sectionContent.margin[3] + 'px'
              }}
            >
              {/* Empty section as requested */}
            </div>
          </div>
        </div>
      </div>
      </Draggable>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          style={cfg.modalOverlay}
          onClick={handleModalClose}
        >
          <div
            style={cfg.modalContent}
          >
            <img
              src={zoomedImage.src}
              alt={`Tech Device ${zoomedImage.index}`}
              style={cfg.modalImage}
            />
            <div style={cfg.modalDescription}>
              {zoomedImage.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
