import React from 'react';
import Draggable from 'react-draggable';
import {
  FRAME_WIDTH, FRAME_HEIGHT,
  STROKE_WIDTH, BORDER_RADIUS,
  TITLE_BAR_HEIGHT,
  COLOR_BACKGROUND, COLOR_TITLE_BG, COLOR_TITLE_TEXT,
  ICON_GROUP_WIDTH, ICON_GROUP_HEIGHT, ICON_SIZE, ICON_LABEL_HEIGHT, ICON_LABEL_FONT,
  FONT_PT_TITLE
} from '../theme';

export default function ContactWindow({ onClose }) {
  const [position] = React.useState(() => {
    const x = (window.innerWidth - FRAME_WIDTH) / 2;
    const y = (window.innerHeight - FRAME_HEIGHT) / 2;
    return { x, y };
  });

  const icons = [
    'discord', 'instagram', 'telegram', 'linkedin',
    'github', 'tiktok', 'whatsapp', 'paypal'
  ];

  return (
    <Draggable handle=".handle" defaultPosition={position}>
      <div
        className="absolute box-border shadow-lg z-40 flex flex-col"
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          background: COLOR_BACKGROUND,
          border: `${STROKE_WIDTH}px solid black`,
          borderRadius: BORDER_RADIUS
        }}
      >
        {/* titlebar */}
        <div
          className="handle relative box-border flex items-center justify-between px-[20px] cursor-move"
          style={{
            width: FRAME_WIDTH,
            height: TITLE_BAR_HEIGHT,
            background: COLOR_TITLE_BG,
            borderBottom: `${STROKE_WIDTH}px solid black`
          }}
        >
          <span style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>contact</span>
          <button onClick={onClose} style={{ fontSize: FONT_PT_TITLE, color: COLOR_TITLE_TEXT }}>&times;</button>
        </div>
        {/* content area */}
        <div className="relative w-full h-[536px] box-border pt-[20px]">
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-4 gap-[50px] mt-[20px] justify-items-center">
            {icons.map(key => (
              <div
                key={key}
                onClick={() => window.open(`https://${key}.com`, '_blank')}
                className="flex flex-col items-center cursor-pointer"
                style={{
                  width: ICON_GROUP_WIDTH,
                  height: ICON_GROUP_HEIGHT
                }}
              >
                <img
                  src={`/static/ico/contact/${key}.png`}
                  alt={`${key} icon`}
                  style={{ width: ICON_SIZE, height: ICON_SIZE }}
                />
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: ICON_GROUP_WIDTH,
                    height: ICON_LABEL_HEIGHT,
                    fontSize: ICON_LABEL_FONT,
                    fontWeight: 'bold',
                    color: COLOR_TITLE_TEXT
                  }}
                >
                  {key}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
