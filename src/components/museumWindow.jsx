import React from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

export default function MuseumWindow({ onClose }) {
  const cfg = uiSpec.museum;
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
        >
          {/* Section 1: INSPIRED BOOKS */}
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
              INSPIRED BOOKS
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
              (special thanks to J.V.Scholz for the recommendations)
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
                  width: cfg.section1.book1Frame.width + 'px',
                  height: cfg.section1.book1Frame.height + 'px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: cfg.section1.book1Frame.marginBottom + 'px'
                }}
              >
                <img
                  src={cfg.section1.book1.source}
                  alt="Atomic Habits"
                  style={{
                    width: cfg.section1.book.width + 'px',
                    height: cfg.section1.book.height + 'px',
                    borderRadius: cfg.section1.book.radius + 'px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1, marginLeft: '40px' }}>
                  <h3
                    style={{
                      fontSize: cfg.section1.title.fontSize,
                      fontWeight: cfg.section1.title.fontWeight,
                      color: cfg.section1.title.color,
                      margin: '0 0 10px 0'
                    }}
                  >
                    atomic habits - james clear
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.section1.bookContent.fontSize,
                      fontWeight: cfg.section1.bookContent.fontWeight,
                      color: cfg.section1.bookContent.color,
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
                  width: cfg.section1.book2Frame.width + 'px',
                  height: cfg.section1.book2Frame.height + 'px',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ flex: 1, marginRight: '40px', textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                  <h3
                    style={{
                      fontSize: cfg.section1.title.fontSize,
                      fontWeight: cfg.section1.title.fontWeight,
                      color: cfg.section1.title.color,
                      margin: '0 0 10px 0'
                    }}
                  >
                    deep work - cal newport
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.section1.bookContent.fontSize,
                      fontWeight: cfg.section1.bookContent.fontWeight,
                      color: cfg.section1.bookContent.color,
                      margin: 0
                    }}
                  >
                    bought this one on an online store<br/>
                    this book is also crazy
                  </p>
                </div>
                <img
                  src={cfg.section1.book2.source}
                  alt="Deep Work"
                  style={{
                    width: cfg.section1.book.width + 'px',
                    height: cfg.section1.book.height + 'px',
                    borderRadius: cfg.section1.book.radius + 'px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Section 2: TECHNOLOGICAL DEVICES */}
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
              TECHNOLOGICAL DEVICES
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
              (enjoy for pulling them out)
            </p>
            
            <div
              style={{
                marginTop: cfg.sectionContent.margin[0] + 'px',
                marginRight: cfg.sectionContent.margin[1] + 'px',
                marginBottom: cfg.sectionContent.margin[2] + 'px',
                marginLeft: cfg.sectionContent.margin[3] + 'px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: cfg.section2.picture.spacing + 'px'
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div
                  key={num}
                  style={{
                    width: cfg.section2.picture.width + 'px',
                    height: cfg.section2.picture.height + 'px',
                    backgroundColor: cfg.section2.picture.backgroundColor,
                    borderRadius: cfg.section2.picture.borderRadius + 'px',
                  }}
                >
                  {/* Placeholder for device images */}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: DIY PROJECTS */}
          <div>
            <h2
              style={{
                fontSize: cfg.sectionTitle.fontSize,
                fontWeight: cfg.sectionTitle.fontWeight,
                color: cfg.sectionTitle.color,
                marginBottom: cfg.sectionTitle.marginBottom + 'px',
                margin: 0
              }}
            >
              DIY PROJECTS
            </h2>
            
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

          {/* Section 4: GAMING ACHIEVEMENTS */}
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
              GAMING ACHIEVEMENTS
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
              ('childhood'. who does not even play games, huh?)
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
                  width: cfg.section4.game1Frame.width + 'px',
                  height: cfg.section4.game1Frame.height + 'px',
                  display: 'flex',
                  marginBottom: cfg.section4.game1Frame.marginBottom + 'px'
                }}
              >
                <img
                  src={cfg.section4.game1Pic.source}
                  alt="Game 1"
                  style={{
                    width: cfg.section4.game1Pic.width + 'px',
                    height: cfg.section4.game1Pic.height + 'px',
                    objectFit: 'cover',
                    borderRadius: cfg.section4.game1Pic.borderRadius + 'px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: cfg.section4.gameName.fontSize,
                      fontWeight: cfg.section4.gameName.fontWeight,
                      color: cfg.section4.gameName.color,
                      marginTop: cfg.section4.gameName.margin[0] + 'px',
                      marginRight: cfg.section4.gameName.margin[1] + 'px',
                      marginBottom: cfg.section4.gameName.margin[2] + 'px',
                      marginLeft: cfg.section4.gameName.margin[3] + 'px'
                    }}
                  >
                    freefire
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.section4.gameContent.fontSize,
                      fontWeight: cfg.section4.gameContent.fontWeight,
                      color: cfg.section4.gameContent.color,
                      marginTop: cfg.section4.gameContent.margin[0] + 'px',
                      marginRight: cfg.section4.gameContent.margin[1] + 'px',
                      marginBottom: cfg.section4.gameContent.margin[2] + 'px',
                      marginLeft: cfg.section4.gameContent.margin[3] + 'px'
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
                  width: cfg.section4.game2Frame.width + 'px',
                  height: cfg.section4.game2Frame.height + 'px',
                  display: 'flex'
                }}
              >
                <img
                  src={cfg.section4.game2Pic.source}
                  alt="Game 2"
                  style={{
                    width: cfg.section4.game2Pic.width + 'px',
                    height: cfg.section4.game2Pic.height + 'px',
                    objectFit: 'cover',
                    borderRadius: cfg.section4.game2Pic.borderRadius + 'px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: cfg.section4.gameName.fontSize,
                      fontWeight: cfg.section4.gameName.fontWeight,
                      color: cfg.section4.gameName.color,
                      marginTop: cfg.section4.gameName.margin[0] + 'px',
                      marginRight: cfg.section4.gameName.margin[1] + 'px',
                      marginBottom: cfg.section4.gameName.margin[2] + 'px',
                      marginLeft: cfg.section4.gameName.margin[3] + 'px'
                    }}
                  >
                    arena of valor (lien quan mobile)
                  </h3>
                  <p
                    style={{
                      fontSize: cfg.section4.gameContent.fontSize,
                      fontWeight: cfg.section4.gameContent.fontWeight,
                      color: cfg.section4.gameContent.color,
                      marginTop: cfg.section4.gameContent.margin[0] + 'px',
                      marginRight: cfg.section4.gameContent.margin[1] + 'px',
                      marginBottom: cfg.section4.gameContent.margin[2] + 'px',
                      marginLeft: cfg.section4.gameContent.margin[3] + 'px'
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

          {/* FAVORITE PICTURES section would go here if needed */}
        </div>
      </div>
    </Draggable>
  );
}
