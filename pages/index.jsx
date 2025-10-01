import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import uiSpec from '../src/ui-spec';
import HomeWindow from '../src/components/HomeWindow';
import AboutWindow from '../src/components/AboutWindow';
import WorkWindow from '../src/components/WorkWindow';
import LinksWindow from '../src/components/LinksWindow';
import ContactWindow from '../src/components/ContactWindow';
import MuseumWindow from '../src/components/MuseumWindow';
import FaqWindow from '../src/components/FaqWindow';
import BlogsWindow from '../src/components/BlogsWindow';
import { useThemedSpec } from '../src/theme/useThemedSpec';
import { useTheme } from '../src/theme/ThemeContext';

const WINDOW_KEYS = ['about', 'work', 'links', 'contact', 'faq', 'museum', 'blogs'];
const ANIMATION_DURATION = 240;
const WINDOW_POSITION_STORAGE_KEY = 'erichy-window-positions';

export default function Home() {
  const mainCfg = useThemedSpec('main');
  const { toggleTheme } = useTheme();
  const basePositions = useMemo(() => uiSpec.positioning || {}, []);
  const [windowLifecycle, setWindowLifecycle] = useState(() =>
    WINDOW_KEYS.reduce((acc, key) => {
      acc[key] = { isMounted: false, isOpen: false };
      return acc;
    }, {})
  );
  const [zStack, setZStack] = useState(['home']);
  const closeTimers = useRef({});
  const [windowPositions, setWindowPositions] = useState(() => ({ ...basePositions }));

  const bringToFront = (key) => {
    setZStack((prev) => {
      const filtered = prev.filter((item) => item !== key);
      return [...filtered, key];
    });
  };

  const openWindow = (key) => {
    if (!WINDOW_KEYS.includes(key)) return;

    if (closeTimers.current[key]) {
      clearTimeout(closeTimers.current[key]);
      closeTimers.current[key] = undefined;
    }

    let shouldAnimate = true;
    setWindowLifecycle((prev) => {
      const current = prev[key];
      if (current?.isMounted && current.isOpen) {
        shouldAnimate = false;
        return prev;
      }
      return {
        ...prev,
        [key]: { isMounted: true, isOpen: current?.isMounted ? current.isOpen : false }
      };
    });

    if (!shouldAnimate) {
      bringToFront(key);
      return;
    }

    setTimeout(() => {
      setWindowLifecycle((prev) => {
        const current = prev[key];
        if (!current?.isMounted || current.isOpen) {
          return prev;
        }
        return { ...prev, [key]: { ...current, isOpen: true } };
      });
    }, 20);

    bringToFront(key);
  };

  useEffect(() => {
    const timers = closeTimers.current;
    return () => {
      Object.values(timers).forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  const closeWindow = (key) => {
    if (!WINDOW_KEYS.includes(key)) return;

    setWindowLifecycle((prev) => {
      const current = prev[key];
      if (!current?.isMounted) return prev;
      return { ...prev, [key]: { ...current, isOpen: false } };
    });

    if (closeTimers.current[key]) {
      clearTimeout(closeTimers.current[key]);
    }

    closeTimers.current[key] = setTimeout(() => {
      setWindowLifecycle((prev) => {
        const current = prev[key];
        if (!current || current.isOpen) {
          return prev;
        }
        return { ...prev, [key]: { isMounted: false, isOpen: false } };
      });
      setZStack((prev) => prev.filter((item) => item !== key));
      closeTimers.current[key] = undefined;
    }, ANIMATION_DURATION);
  };

  const handleFocus = (key) => {
    bringToFront(key);
  };

  const getZIndex = (key) => {
    const index = zStack.indexOf(key);
    return 100 + (index === -1 ? 0 : index);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const raw = window.sessionStorage.getItem(WINDOW_POSITION_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setWindowPositions((prev) => ({ ...prev, ...parsed }));
      } catch (error) {
        console.warn('Failed to parse stored window positions', error);
        window.sessionStorage.removeItem(WINDOW_POSITION_STORAGE_KEY);
      }
    }
  }, [basePositions]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleBeforeUnload = () => {
      window.sessionStorage.removeItem(WINDOW_POSITION_STORAGE_KEY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const getDefaultPosition = (key) => windowPositions[key] || basePositions[key] || { x: 0, y: 0 };

  const handleWindowDragStop = useCallback((key, data) => {
    setWindowPositions((prev) => {
      const next = { ...prev, [key]: { x: data.x, y: data.y } };
      if (typeof window !== 'undefined') {
        const storable = WINDOW_KEYS.reduce((acc, windowKey) => {
          if (next[windowKey]) {
            acc[windowKey] = next[windowKey];
          }
          return acc;
        }, {});
        window.sessionStorage.setItem(WINDOW_POSITION_STORAGE_KEY, JSON.stringify(storable));
      }
      return next;
    });
  }, []);
  const togglePositionKey = mainCfg?.darkMode?.positionKey || 'appearanceToggle';
  const togglePosition = getDefaultPosition(togglePositionKey);
  const toggleButtonCfg = mainCfg?.darkMode?.button || {};
  const toggleFrameSize = mainCfg?.darkMode?.frameSize ?? toggleButtonCfg.size ?? 48;
  const toggleBorderRadius = toggleButtonCfg.borderRadius ?? toggleFrameSize / 2;
  const toggleTop = typeof togglePosition.y === 'number' ? togglePosition.y : 20;
  const toggleLeft = typeof togglePosition.x === 'number' ? togglePosition.x : 20;

  return (
    <>
      {/* Background image with blur effect */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${mainCfg.backgroundImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'blur(3px)',
          zIndex: -1
        }}
      />
      <main style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: mainCfg?.textColor }}>
        {mainCfg?.darkMode?.enabled && (
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={mainCfg.darkMode.tooltip || 'Toggle theme'}
            style={{
              position: 'fixed',
              top: toggleTop + 'px',
              left: toggleLeft + 'px',
              width: toggleFrameSize + 'px',
              height: toggleFrameSize + 'px',
              borderRadius: toggleBorderRadius + 'px',
              background: toggleButtonCfg.background || 'rgba(255,255,255,0.85)',
              color: toggleButtonCfg.color || '#000000',
              border: toggleButtonCfg.border || 'none',
              boxShadow: toggleButtonCfg.shadow || 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              zIndex: 1100
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={mainCfg.darkMode.icon}
              alt="Theme icon"
              style={{
                width: (mainCfg.darkMode.iconSize || 28) + 'px',
                height: (mainCfg.darkMode.iconSize || 28) + 'px'
              }}
            />
          </button>
        )}
        <HomeWindow onOpen={openWindow} />
        {windowLifecycle.about.isMounted && (
          <AboutWindow
            onClose={() => closeWindow('about')}
            onFocus={() => handleFocus('about')}
            zIndex={getZIndex('about')}
            isOpen={windowLifecycle.about.isOpen}
            defaultPosition={getDefaultPosition('about')}
            onDragStop={(event, data) => handleWindowDragStop('about', data)}
          />
        )}
        {windowLifecycle.work.isMounted && (
          <WorkWindow
            onClose={() => closeWindow('work')}
            onFocus={() => handleFocus('work')}
            zIndex={getZIndex('work')}
            isOpen={windowLifecycle.work.isOpen}
            defaultPosition={getDefaultPosition('work')}
            onDragStop={(event, data) => handleWindowDragStop('work', data)}
          />
        )}
        {windowLifecycle.links.isMounted && (
          <LinksWindow
            onClose={() => closeWindow('links')}
            onOpenContact={() => openWindow('contact')}
            onFocus={() => handleFocus('links')}
            zIndex={getZIndex('links')}
            isOpen={windowLifecycle.links.isOpen}
            defaultPosition={getDefaultPosition('links')}
            onDragStop={(event, data) => handleWindowDragStop('links', data)}
          />
        )}
        {windowLifecycle.contact.isMounted && (
          <ContactWindow
            onClose={() => closeWindow('contact')}
            onFocus={() => handleFocus('contact')}
            zIndex={getZIndex('contact')}
            isOpen={windowLifecycle.contact.isOpen}
            defaultPosition={getDefaultPosition('contact')}
            onDragStop={(event, data) => handleWindowDragStop('contact', data)}
          />
        )}
        {windowLifecycle.museum.isMounted && (
          <MuseumWindow
            onClose={() => closeWindow('museum')}
            onFocus={() => handleFocus('museum')}
            zIndex={getZIndex('museum')}
            isOpen={windowLifecycle.museum.isOpen}
            defaultPosition={getDefaultPosition('museum')}
            onDragStop={(event, data) => handleWindowDragStop('museum', data)}
          />
        )}
        {windowLifecycle.faq.isMounted && (
          <FaqWindow
            onClose={() => closeWindow('faq')}
            onFocus={() => handleFocus('faq')}
            zIndex={getZIndex('faq')}
            isOpen={windowLifecycle.faq.isOpen}
            defaultPosition={getDefaultPosition('faq')}
            onDragStop={(event, data) => handleWindowDragStop('faq', data)}
          />
        )}
        {windowLifecycle.blogs.isMounted && (
          <BlogsWindow
            onClose={() => closeWindow('blogs')}
            onFocus={() => handleFocus('blogs')}
            zIndex={getZIndex('blogs')}
            isOpen={windowLifecycle.blogs.isOpen}
            defaultPosition={getDefaultPosition('blogs')}
            onDragStop={(event, data) => handleWindowDragStop('blogs', data)}
          />
        )}
        {/* Footer */}
        <div style={{ position: 'fixed', bottom: 8, left: 0, right: 0, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {Object.entries(mainCfg.footer.linkingIcons).map(([key, icon]) => {
              const margin = typeof icon.margin === 'number' ? icon.margin : 0;
              const sizeStyle = {
                width: icon.width + 'px',
                height: icon.height + 'px'
              };
              return (
                <div
                  key={key}
                  style={{
                    ...sizeStyle,
                    margin: margin + 'px',
                    cursor: icon.url ? 'pointer' : 'default',
                    transition: 'transform 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => {
                    if (icon.url) {
                      window.open(icon.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img
                    src={icon.source}
                    alt={key}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: mainCfg.footer.description.fontSize, color: mainCfg.footer.description.color, background: mainCfg.footer.description.bg, fontWeight: mainCfg.footer.description.fontWeight }}>
            {mainCfg.footer.description.text}
          </div>
        </div>
        {/* Dark mode button placeholder */}
        {/* <button style={{ position: 'fixed', top: 12, right: 12 }}>dark</button> */}
      </main>
    </>
  );
}
