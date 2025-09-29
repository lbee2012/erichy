import React, { useEffect, useRef, useState } from 'react';
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

export default function Home() {
  const mainCfg = useThemedSpec('main');
  const { toggleTheme, themeName } = useTheme();
  const [windowLifecycle, setWindowLifecycle] = useState(() =>
    WINDOW_KEYS.reduce((acc, key) => {
      acc[key] = { isMounted: false, isOpen: false };
      return acc;
    }, {})
  );
  const [zStack, setZStack] = useState(['home']);
  const closeTimers = useRef({});

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

  const defaultPositions = uiSpec.opening || {};
  const getDefaultPosition = (key) => defaultPositions[key] || { x: 0, y: 0 };

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
              top: 20,
              right: 20,
              width: (mainCfg.darkMode.button?.size || 48) + 'px',
              height: (mainCfg.darkMode.button?.size || 48) + 'px',
              borderRadius: (mainCfg.darkMode.button?.borderRadius || 24) + 'px',
              background: mainCfg.darkMode.button?.background || 'rgba(255,255,255,0.85)',
              color: mainCfg.darkMode.button?.color || '#000000',
              border: mainCfg.darkMode.button?.border || 'none',
              boxShadow: mainCfg.darkMode.button?.shadow || 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.12s ease'
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
                height: (mainCfg.darkMode.iconSize || 28) + 'px',
                filter: themeName === 'dark' ? 'invert(1)' : 'none'
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
          />
        )}
        {windowLifecycle.work.isMounted && (
          <WorkWindow
            onClose={() => closeWindow('work')}
            onFocus={() => handleFocus('work')}
            zIndex={getZIndex('work')}
            isOpen={windowLifecycle.work.isOpen}
            defaultPosition={getDefaultPosition('work')}
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
          />
        )}
        {windowLifecycle.contact.isMounted && (
          <ContactWindow
            onClose={() => closeWindow('contact')}
            onFocus={() => handleFocus('contact')}
            zIndex={getZIndex('contact')}
            isOpen={windowLifecycle.contact.isOpen}
            defaultPosition={getDefaultPosition('contact')}
          />
        )}
        {windowLifecycle.museum.isMounted && (
          <MuseumWindow
            onClose={() => closeWindow('museum')}
            onFocus={() => handleFocus('museum')}
            zIndex={getZIndex('museum')}
            isOpen={windowLifecycle.museum.isOpen}
            defaultPosition={getDefaultPosition('museum')}
          />
        )}
        {windowLifecycle.faq.isMounted && (
          <FaqWindow
            onClose={() => closeWindow('faq')}
            onFocus={() => handleFocus('faq')}
            zIndex={getZIndex('faq')}
            isOpen={windowLifecycle.faq.isOpen}
            defaultPosition={getDefaultPosition('faq')}
          />
        )}
        {windowLifecycle.blogs.isMounted && (
          <BlogsWindow
            onClose={() => closeWindow('blogs')}
            onFocus={() => handleFocus('blogs')}
            zIndex={getZIndex('blogs')}
            isOpen={windowLifecycle.blogs.isOpen}
            defaultPosition={getDefaultPosition('blogs')}
          />
        )}
        {/* Footer */}
        <div style={{ position: 'fixed', bottom: 8, left: 0, right: 0, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {Object.entries(mainCfg.footer.linkingIcons).map(([key, icon]) => (
              <img key={key} src={icon.source} alt={key}
                   style={{ width: icon.width + 'px', height: icon.height + 'px', margin: icon.margin + 'px', cursor: 'pointer' }}
                   onClick={() => {
                     if (icon.url) {
                       window.open(icon.url, '_blank', 'noopener,noreferrer');
                     }
                   }} />
            ))}
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
