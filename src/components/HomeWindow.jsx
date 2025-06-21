import React from 'react';
import {
  FRAME_WIDTH, FRAME_HEIGHT,
  STROKE_WIDTH, BORDER_RADIUS,
  TITLE_BAR_HEIGHT,
  COLOR_BACKGROUND, COLOR_TITLE_BG, COLOR_TITLE_TEXT,
  COLOR_SECONDARY_TEXT, COLOR_SUPPORT_TEXT,
  FONT_PT_TITLE, FONT_PT_MAIN, FONT_PT_SUPPORT,
  ICON_GROUP_WIDTH, ICON_GROUP_HEIGHT, ICON_SIZE, ICON_LABEL_HEIGHT, ICON_LABEL_FONT
} from '../theme';

export default function HomeWindow({ onOpen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="relative box-border overflow-hidden"
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          background: COLOR_BACKGROUND,
          border: `${STROKE_WIDTH}px solid black`,
          borderRadius: BORDER_RADIUS
        }}
      >
        {/* title bar */}
        <div
          className="absolute top-0 left-0 box-border flex items-center justify-center"
          style={{
            width: FRAME_WIDTH,
            height: TITLE_BAR_HEIGHT,
            background: COLOR_TITLE_BG,
            borderBottom: `${STROKE_WIDTH}px solid black`
          }}
        >
          <span style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>home</span>
        </div>
        {/* content area */}
        <div
          className="absolute left-0 box-border overflow-hidden"
          style={{
            top: TITLE_BAR_HEIGHT,
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT - TITLE_BAR_HEIGHT,
            background: COLOR_BACKGROUND
          }}
        >
          <div className="relative w-full h-full flex flex-col items-center pt-[50px] space-y-[20px] overflow-auto">
            <div
              className="flex items-center justify-center"
              style={{
                width: ICON_GROUP_WIDTH * 4.8,
                height: ICON_GROUP_HEIGHT * 0.94,
                fontSize: FONT_PT_MAIN,
                fontWeight: 'bold',
                lineHeight: `${ICON_GROUP_HEIGHT * 0.94}px`,
                color: COLOR_TITLE_TEXT
              }}
            >
              <span>hi!</span>
              <span style={{ color: COLOR_SECONDARY_TEXT, marginLeft: '10px' }}>i'm lbee</span>
            </div>
            <div
              className="flex items-center justify-center"
              style={{
                width: ICON_GROUP_WIDTH * 3.025,
                height: FONT_PT_SUPPORT,
                fontSize: FONT_PT_SUPPORT,
                fontWeight: 'bold',
                color: COLOR_SUPPORT_TEXT
              }}
            >
              technology enthusiasm
            </div>
          </div>
          {/* icon groups */}
          <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 flex space-x-[50px]">
            <div onClick={() => onOpen('about')} className="w-[120px] h-[180px] flex flex-col items-center cursor-pointer">
              <img src="/ico/home/about.png" className="w-[120px] h-[120px]" alt="about icon" />
              <div className="w-[120px] h-[60px] flex items-center justify-center" style={{ fontSize: '32pt', fontWeight: 'bold', color: '#333333' }}>
                about
              </div>
            </div>
            <div onClick={() => onOpen('works')} className="w-[120px] h-[180px] flex flex-col items-center cursor-pointer">
              <img src="/ico/home/works.png" className="w-[120px] h-[120px]" alt="works icon" />
              <div className="w-[120px] h-[60px] flex items-center justify-center" style={{ fontSize: '32pt', fontWeight: 'bold', color: '#333333' }}>
                works
              </div>
            </div>
            <div onClick={() => onOpen('contact')} className="w-[120px] h-[180px] flex flex-col items-center cursor-pointer">
              <img src="/ico/home/contact.png" className="w-[120px] h-[120px]" alt="contact icon" />
              <div className="w-[120px] h-[60px] flex items-center justify-center" style={{ fontSize: '32pt', fontWeight: 'bold', color: '#333333' }}>
                contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
