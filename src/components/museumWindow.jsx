import React, { useState } from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

export default function MuseumWindow({ onClose }) {
  const cfg = uiSpec.museum;
  const [zoomedImage, setZoomedImage] = useState(null);

  // Tech device descriptions array matching the image indices
  const techDescriptions = [
    "my first iPad ever! this iPad was my dad's gift when I was around 3, he bought it in a autumn vacation to Japan, Akihabara - Tokyo in 2010. thanks dad\njoke of the century (Vietnamese): tao đã chém hoa quả ầm ầm khi mấy thằng cùng lứa chưa biết cái iPad là chố cái gì.\n\nthen I got an iPad 2nd gen in the next year, afterwards, 3rd generation, subconsequenly, iPad Air 1st gen.\nthe head pic was the first one, I would update some nearby pics for the later gets",
    
    "finally, a guy who addicted and really enjoy FreeFire, PUBG, ArenaOfValor got his first self-afford iPad, in Mar 21st. 2021, which is an 8th Generation. it took my accumulation roughly 9 millions of VND",
    
    "iPad Air 4. (purchased in Dec 08. 2021). this was my mom's present, for my 14th birthday. thanks mom.",
    
    "iPad Air 5. (in June 19. 2022). this one is also my mom's gift, for my graduation of the junior high-school. thanks mom.",
    
    "Acer Nitro 5. AN515-45 R86D submodel. (in June 10. 2023). first laptop ever, I'm currently utilizing it since the time, really love it although the original charger have almost been broken. 😊",
    
    "Attack Shark X3. lavender-base. my mom's present, for a 16th birth day. this was a gaming mouse and I've sold it after few months of using because I decided to quit games, then I really left them behind. all the achivements were memories for the moment and also the future. games, games, games. 😳",
    
    "ZA68 Pro. tri-modes. my mom's present of my 16th birthday. I picked it because I love the LGBT led. continue using for a while since it broke at around the 2023's July. long story. 😭",
    
    "Moondrop Space Travel. hell yah, I bought it follow a friend's tell, love the trab, boost, volume, noise cancle, extend vol,... WE CAN'T NOT BLAME THIS SHIT BECAUSE IT WAS HELLY PERFECT. 😎",
    
    "Hyperwork. Hyperone Gen 2 & Silentium. special minimal ergonomic combo, keyboard & mouse. I bought this combination some days after taking the IELTS examination at Mar 22nd. Before, I simply use enormouse gears and they take me huge spaces on the desk, so my needs change then... 😔",
    
    "Logitech Ergo M575s. (in May 24. 2025). after realizing my desk sucked, I actively try to find a stable-in-one-place mouse, which is the kind of 'trackball' mouse. bought it at used condition with 30% of the original price, then I give the ergonomic Silentium to my mom. my first trackball, in the long-term journey with them! 😆",
    
    "Seiko Watch. (Mar 14. 2025). a special gift from Mr.Agata, our japanese friend, Agata decides to give me the watch throughout my dad, while my dad visiting Japan and his friends, includes Mr.Agata.",
    
    "Asus Vivobook. X509FA - xxx submodel. my uncle's old laptop, I support her to pick a new one and she gives me this one. currently dual-booting Arch Linux and Windows 10 ULTRA LITE on it, I mainly use it for writing something, like thoughts, autobiographies...",
    
    "Logitech Cordless Trackman Wheel - wireless version. (July 14. 2025). this one is dead for the moment, but this model first time released in 2000. I've got an ultimately ancient trackball during the real Japan summer vacation trippin. plus one for eric's trackball collection, hell yeh. 🏆",
    
    "ProtoArc EM01 - white & RGB ring (July 14. 2025). this was a very special one because its mother company, protoarc, did not produce this variant of EM01 anymore. Another extremely special trackball I got during Japan summer trip. 😎",
    
    "HHKB Professional HYBRID Type-S (Snow). (July 06. 2025). my first HHKB ever! I've dreamed for a HHKB keyboard for a while, mainly because of the notorious layout in any keyboard-tech forums. I thought it was customizable (hotswapable) but I was wrong, I did not read the information about Topre-switches since I bought it home =)). However, my keyboard nowadays is the limited edition. 😳\n\nif uguys pay more attention, will see the special point in the general looking at keycaps. I've mailed PFU for this issue reporting and they said they would send me a new one (not for replacement but the whole brand new HHKB by the same variant).",
    
    "LG Monitor - 23EA63. (July 05. 2025). quite an old monitor, first released might be in 2013, Agata gave it to me, the monitor has travelled for more than 5000 kilometers from Japan to Vietnam."
  ];

  const handleImageClick = (imageIndex, imageSrc) => {
    setZoomedImage({
      index: imageIndex,
      src: imageSrc,
      description: techDescriptions[imageIndex - 1] // Convert to 0-based index
    });
  };

  const handleModalClose = () => {
    setZoomedImage(null);
  };

  return (
    <>
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                <img
                  key={num}
                  src={cfg.techs[`device${num}`]?.source}
                  alt={`Device ${num}`}
                  style={{
                    width: cfg.techs.deviceImage.width + 'px',
                    height: cfg.techs.deviceImage.height + 'px',
                    backgroundColor: cfg.techs.deviceImage.backgroundColor,
                    borderRadius: cfg.techs.deviceImage.borderRadius + 'px',
                    objectFit: 'cover',
                    cursor: cfg.techs.deviceImage.cursor,
                    transition: 'transform 0.2s ease',
                    willChange: 'transform'
                  }}
                  onClick={() => handleImageClick(num, cfg.techs[`device${num}`]?.source)}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              ))}
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
