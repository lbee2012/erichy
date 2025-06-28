import React, { useState } from 'react';
import Draggable from 'react-draggable';
import uiSpec from '../ui-spec';

export default function FaqWindow({ onClose }) {
  const cfg = uiSpec.faq;
  
  // State to track which questions are expanded
  const [expandedQuestions, setExpandedQuestions] = useState({});
  
  const questions = [
    { 
      title: "WHO is me?", 
      content: "• origin: a vietnamese guy\n• birthday: dec 20, 2007\n• i usually fudge of a hashtag (2/20/2013), because, as vietnam so hardly use (MM/dd/yyyy), so my birthday would be wrote as '20/12'\n• gender: undetermined yet" 
    },
    { 
      title: "WHERE my location?", 
      content: "• currently living: Hanoi city - Vietnam's capital\n• originally from:\n   • Giao Tien, Nam Dinh province\n   • Kien Xuong, Thai Binh province" 
    },
    { 
      title: "WHICH my degrees?", 
      content: "• 2022 - 2026: Software Engineering (FPT PolySchool & FPT Polytechnic)\n• 2026 - 20xx (near future or far.. idk): ???" 
    },
    { 
      title: "WHY this website?", 
      content: "• inspired by Shar (youtube.com/sharyap),\n• her personal site (sharyap.com) is sooo adorable! <3" 
    },
    { 
      title: "WHAT things involved?", 
      content: "• Next.js with React framework\n• Custom draggable window system\n• Tailwind CSS for styling\n• Hosted on modern web infrastructure" 
    },
    { 
      title: "HOW to navigate?", 
      content: "• Click icons in home window to open sections\n• Drag windows around the screen\n• Use [x] button to close windows\n• Explore different sections for various content" 
    },
    { 
      title: "WHEN was this built?", 
      content: "• Started development in late 2024\n• Continuously updated and improved\n• Regular content additions and feature updates" 
    },
    { 
      title: "CAN I see the code?", 
      content: "• Yes! Check my GitHub profile\n• Source code available for learning\n• Feel free to fork and modify\n• Contributions welcome" 
    },
    { 
      title: "WILL this be mobile-friendly?", 
      content: "• Currently optimized for desktop\n• Mobile responsiveness planned\n• Performance improvements in progress\n• Better touch interaction coming soon" 
    },
    { 
      title: "ARE there more features coming?", 
      content: "• Museum section expansion\n• More interactive elements\n• Additional project showcases\n• Enhanced user experience features" 
    }
  ];

  const toggleQuestion = (index) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
            faq
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
              height: cfg.scrollContainer.height,
              overflowY: cfg.scrollContainer.overflowY,
            }}
          >
            {questions.map((question, index) => {
              const isExpanded = expandedQuestions[index];
              return (
                <div
                  key={index}
                  style={{
                    width: cfg.questionContainer.width + 'px',
                    marginTop: cfg.questionContainer.margin[0] + 'px',
                    marginRight: cfg.questionContainer.margin[1] + 'px',
                    marginBottom: cfg.questionContainer.margin[2] + 'px',
                    marginLeft: cfg.questionContainer.margin[3] + 'px',
                    border: cfg.questionContainer.stroke + 'px solid ' + cfg.questionContainer.strokeColor,
                    borderRadius: cfg.questionContainer.radius + 'px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}
                >
                  {/* Question Header (Always Visible) */}
                  <div
                    style={{
                      width: '100%',
                      height: cfg.questionHeader.height + 'px',
                      paddingTop: cfg.questionHeader.padding[0] + 'px',
                      paddingRight: cfg.questionHeader.padding[1] + 'px',
                      paddingBottom: cfg.questionHeader.padding[2] + 'px',
                      paddingLeft: cfg.questionHeader.padding[3] + 'px',
                      backgroundColor: cfg.questionHeader.bg,
                      cursor: cfg.questionHeader.cursor,
                      borderRadius: isExpanded ? cfg.questionHeader.borderRadius : cfg.questionContainer.radius + 'px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                      borderBottom: isExpanded ? '1px solid #CCCCCC' : 'none'
                    }}
                    onClick={() => toggleQuestion(index)}
                  >
                    <h4
                      style={{
                        fontSize: cfg.questionTitle.fontSize,
                        fontWeight: cfg.questionTitle.fontWeight,
                        color: cfg.questionTitle.color,
                        marginTop: cfg.questionTitle.margin[0] + 'px',
                        marginRight: cfg.questionTitle.margin[1] + 'px',
                        marginBottom: cfg.questionTitle.margin[2] + 'px',
                        marginLeft: cfg.questionTitle.margin[3] + 'px',
                        userSelect: cfg.questionTitle.userSelect
                      }}
                    >
                      {question.title}
                    </h4>
                    <span
                      style={{
                        fontSize: '1.2rem',
                        color: '#666666',
                        userSelect: 'none',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      ▼
                    </span>
                  </div>
                  
                  {/* Question Content (Dropdown) */}
                  {isExpanded && (
                    <div
                      style={{
                        width: '100%',
                        paddingTop: cfg.questionContent.padding[0] + 'px',
                        paddingRight: cfg.questionContent.padding[1] + 'px',
                        paddingBottom: cfg.questionContent.padding[2] + 'px',
                        paddingLeft: cfg.questionContent.padding[3] + 'px',
                        backgroundColor: cfg.questionContent.bg,
                        borderRadius: cfg.questionContent.borderRadius,
                        boxSizing: 'border-box'
                      }}
                    >
                      <pre
                        style={{
                          fontSize: cfg.questionContent.fontSize,
                          color: cfg.questionContent.color,
                          lineHeight: cfg.questionContent.lineHeight,
                          margin: 0,
                          fontFamily: 'inherit',
                          whiteSpace: 'pre-wrap'
                        }}
                      >
                        {question.content}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
