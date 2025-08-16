import React, { useState } from 'react';
import Background from '../src/components/Background';
import HomeWindow from '../src/components/HomeWindow';
import AboutWindow from '../src/components/AboutWindow';
import WorkWindow from '../src/components/WorkWindow';
import LinksWindow from '../src/components/LinksWindow';
import ContactWindow from '../src/components/ContactWindow';
import MuseumWindow from '../src/components/MuseumWindow';
import FaqWindow from '../src/components/FaqWindow';

// Markdown content is fetched client-side within each window component

export default function Home() {
  const [open, setOpen] = useState({ home: true });

  return (
    <>
      <Background />
      <main className="h-screen w-screen bg-gray-100 flex items-center justify-center">
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
      </main>
    </>
  );
}
