import React, { useState } from 'react';
import HomeWindow from '../src/components/HomeWindow';
import AboutWindow from '../src/components/AboutWindow';
import WorkWindow from '../src/components/WorkWindow';
import LinksWindow from '../src/components/LinksWindow';
import ContactWindow from '../src/components/ContactWindow';
import MuseumWindow from '../src/components/MuseumWindow';
import FaqWindow from '../src/components/FaqWindow';
import uiSpec from '../src/ui-spec';
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
          <LinksWindow onClose={() => setOpen(o => ({ ...o, links: false }))} />
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
        <div style={{ position: 'fixed', bottom: 8, left: 0, right: 0, textAlign: 'center', fontSize: uiSpec.main.footer.fontSize, color: uiSpec.main.footer.color, background: uiSpec.main.footer.bg }}>
          {uiSpec.main.footer.text}
        </div>
        {/* Dark mode button placeholder */}
        {/* <button style={{ position: 'fixed', top: 12, right: 12 }}>dark</button> */}
      </main>
    </>
  );
}
