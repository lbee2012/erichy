import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useTheme } from '../theme/ThemeContext';
import { useThemedSpec } from '../theme/useThemedSpec';
import { useDragState } from '../hooks/useDragState';

export default function FaqWindow({
  onClose,
  onFocus = () => {},
  zIndex = 1,
  isOpen = true,
  defaultPosition = { x: 0, y: 0 },
  onDragStop = () => {}
}) {
  const cfg = useThemedSpec('faq');
  const { palette } = useTheme();
  const [expandedItems, setExpandedItems] = useState({});

  const handleFocus = () => onFocus();
  const { isDragging, handleDragStart, handleDragStop } = useDragState(handleFocus, onDragStop);
  const frameStroke = cfg.window.strokeColor || palette.frameStrokeColor || '#000000';

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "WHO is me?",
      answer: [
        "- origin: vietnamese guy",
        "- birthday: dec-20. 2007",
        "  - i often joke as i borned in '2012' // as vietnamese, we mostly/officially use DD/MM/YYYY // ma dob would be writen as '20/12'",
        "- gender: undetermined yet"
      ]
    },
    {
      question: "WHERE my location?",
      answer: [
        "- currently living: Hanoi City - Vietnam's Capital",
        "- ordinary from:",
        "  - Hoanh Nha, Giao Thuy, Giao Tien, Nam Dinh prc.",
        "  - Kien Xuong, Thai Binh prc."
      ]
    },
    {
      question: "WHICH my degrees?",
      answer: [
        "- FPT PolySchool // 2022 - 2026 // Software Engineering.",
          "- affiliated w/. FPT University.",
          "- GPA: 3.85/4.0 // top 10%",
        "- FPT University - Hoa Lac camp // 2026 - 2028 // Computer Science",
        "- Master? // definitely i would! but unsured y:?",
      ]
    },
    {
      question: "WHY this website?",
      answer: [
        "- inspired by Shar // youtube.com/sharyap.",
        "- sharyap.com is sooo adorable!",
        "  <3"
      ]
    },
    {
      question: "WHAT things involve?",
      answer: [
        "- home // main dir",
        "- about // me, not/and u <3",
        "- work // mine!",
        "- faq // no one asked. sorry",
        "- links // my connections",
        "- museum // cloud-hosting exhibition",
        "- blogs // abt my thghts, wrts, life",
      ]
    },
    {
      question: "are you grieay?",
      answer: [
        "- ..yea... i'm not sure :?"
      ]
    },
    {
      question: "bro u r so skibidi!",
      answer: [
        "- i bili: ok -_- :/"
      ]
    },
    {
      question: "wenomechainsama?",
      answer: [
        "- hell nah :("
      ]
    },
    {
      question: "gegagedigedagedago?",
      answer: [
        "- everyday i'm shuffling!"
      ]
    },
    {
      question: "do you btw!?",
      answer: [
        "- absolutely! btw i use arch.",
        "- ma daily-drive since 25.Sep.",
      ]
    }
  ];

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
            frequently asked questions
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
            overflow: 'hidden'
          }}
        >
          {/* scrollable container */}
          <div
            style={{
              height: cfg.scrollableArea.height,
              overflowY: cfg.scrollableArea.overflowY,
              // Hide scrollbar but keep functionality
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
            // Add custom CSS class for webkit browsers
            className="faq-scrollbar-hidden"
          >
            {faqItems.map((item, index) => (
              <div key={index}>
                {/* Question header */}
                <div
                  onClick={() => toggleItem(index)}
                  style={{
                    backgroundColor: cfg.questionItem.backgroundColor,
                    marginTop: cfg.questionItem.margin[0] + 'px',
                    marginRight: cfg.questionItem.margin[1] + 'px',
                    marginBottom: cfg.questionItem.margin[2] + 'px',
                    marginLeft: cfg.questionItem.margin[3] + 'px',
                    paddingTop: cfg.questionItem.padding[0] + 'px',
                    paddingRight: cfg.questionItem.padding[1] + 'px',
                    paddingBottom: cfg.questionItem.padding[2] + 'px',
                    paddingLeft: cfg.questionItem.padding[3] + 'px',
                    borderRadius: expandedItems[index] ? '5px 5px 0 0' : cfg.questionItem.borderRadius + 'px',
                    border: cfg.questionItem.border,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    userSelect: 'none'
                  }}
                >
                  <span
                    style={{
                      fontSize: cfg.questionItem.fontSize,
                      fontWeight: cfg.questionItem.fontWeight,
                      color: cfg.questionItem.color
                    }}
                  >
                    {item.question}
                  </span>
                  <img
                    src={cfg.expandIcon.source}
                    alt="expand"
                    style={{
                      width: cfg.expandIcon.width + 'px',
                      height: cfg.expandIcon.height + 'px',
                      transform: expandedItems[index] ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }}
                  />
                </div>
                
                {/* Answer content - sticks to question */}
                {expandedItems[index] && (
                  <div
                    style={{
                      backgroundColor: cfg.questionAnswer.backgroundColor,
                      marginTop: cfg.questionAnswer.margin[0] + 'px',
                      marginRight: cfg.questionAnswer.margin[1] + 'px',
                      marginBottom: cfg.questionAnswer.margin[2] + 'px',
                      marginLeft: cfg.questionAnswer.margin[3] + 'px',
                      paddingTop: cfg.questionAnswer.padding[0] + 'px',
                      paddingRight: cfg.questionAnswer.padding[1] + 'px',
                      paddingBottom: cfg.questionAnswer.padding[2] + 'px',
                      paddingLeft: cfg.questionAnswer.padding[3] + 'px',
                      border: cfg.questionAnswer.border,
                      borderTop: cfg.questionAnswer.borderTop,
                      borderRadius: cfg.questionAnswer.borderRadius,
                      fontSize: cfg.questionAnswer.fontSize,
                      color: cfg.questionAnswer.color,
                    }}
                  >
                    {item.answer.map((line, lineIndex) => (
                      <div key={lineIndex} style={{ marginBottom: lineIndex < item.answer.length - 1 ? '4px' : '0' }}>
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
