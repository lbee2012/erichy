import React, { useState } from 'react';
import uiSpec from '../src/ui-spec';
import HomeWindow from '../src/components/HomeWindow';
import AboutWindow from '../src/components/AboutWindow';
import WorkWindow from '../src/components/WorkWindow';
import LinksWindow from '../src/components/LinksWindow';
import ContactWindow from '../src/components/ContactWindow';
import MuseumWindow from '../src/components/MuseumWindow';
import FaqWindow from '../src/components/FaqWindow';
import BlogsWindow from '../src/components/BlogsWindow';

// Markdown content is fetched client-side within each window component

export default function Home() {
  const [open, setOpen] = useState({ home: true });

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
          backgroundImage: `url(${uiSpec.main.backgroundImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'blur(3px)',
          zIndex: -1
        }}
      />
  <main style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
        {open.home && (
          <HomeWindow onOpen={key => setOpen(o => ({ ...o, [key]: true }))} />
        )}
        {open.about && (
          <AboutWindow onClose={() => setOpen(o => ({ ...o, about: false }))} />
        )}
        {open.work && (
          <WorkWindow onClose={() => setOpen(o => ({ ...o, work: false }))} />
        )}
        {open.links && (
          <LinksWindow 
            onClose={() => setOpen(o => ({ ...o, links: false }))}
            onOpenContact={() => setOpen(o => ({ ...o, contact: true }))}
          />
        )}
        {open.contact && (
          <ContactWindow onClose={() => setOpen(o => ({ ...o, contact: false }))} />
        )}
        {open.museum && (
          <MuseumWindow onClose={() => setOpen(o => ({ ...o, museum: false }))} />
        )}
        {open.faq && (
          <FaqWindow onClose={() => setOpen(o => ({ ...o, faq: false }))} />
        )}
        {open.blogs && (
          <BlogsWindow onClose={() => setOpen(o => ({ ...o, blogs: false }))} />
        )}
        {/* Footer */}
        <div style={{ position: 'fixed', bottom: 8, left: 0, right: 0, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {Object.entries(uiSpec.main.footer.linkingIcons).map(([key, icon]) => (
              <img key={key} src={icon.source} alt={key}
                   style={{ width: icon.width + 'px', height: icon.height + 'px', margin: icon.margin + 'px', cursor: 'pointer' }}
                   onClick={() => {
                     if (icon.url) {
                       window.open(icon.url, '_blank', 'noopener,noreferrer');
                     }
                   }} />
            ))}
          </div>
          <div style={{ fontSize: uiSpec.main.footer.description.fontSize, color: uiSpec.main.footer.description.color, background: uiSpec.main.footer.description.bg, fontWeight: uiSpec.main.footer.description.fontWeight }}>
            {uiSpec.main.footer.description.text}
          </div>
        </div>
        {/* Dark mode button placeholder */}
        {/* <button style={{ position: 'fixed', top: 12, right: 12 }}>dark</button> */}
      </main>
    </>
  );
}
