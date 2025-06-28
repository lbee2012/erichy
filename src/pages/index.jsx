import React, { useState } from "react"
import Background from "../components/background"
import HomeWindow from "../components/homeWindow"
import AboutWindow from "../components/aboutWindow"
import WorkWindow from "../components/workWindow"
import LinksWindow from "../components/linksWindow"
import ContactWindow from "../components/contactWindow"
import MuseumWindow from "../components/museumWindow"
import FaqWindow from "../components/faqWindow"

export default function Home() {
  const [open, setOpen] = useState({ home: true })

  return (
    <>
      <Background />
      <main className="h-screen w-screen bg-gray-100 flex items-center justify-center">
        {open.home && (
          <HomeWindow
            onOpen={key => setOpen(o => ({ ...o, [key]: true }))}
          />
        )}
        {open.about && (
          <AboutWindow
            onClose={() => setOpen(o => ({ ...o, about: false }))}
          />
        )}
        {open.work && (
          <WorkWindow
            onClose={() => setOpen(o => ({ ...o, work: false }))}
          />
        )}
        {open.links && (
          <LinksWindow
            onClose={() => setOpen(o => ({ ...o, links: false }))}
          />
        )}
        {open.contact && (
          <ContactWindow
            onClose={() => setOpen(o => ({ ...o, contact: false }))}
          />
        )}
        {open.museum && (
          <MuseumWindow
            onClose={() => setOpen(o => ({ ...o, museum: false }))}
          />
        )}
        {open.faq && (
          <FaqWindow
            onClose={() => setOpen(o => ({ ...o, faq: false }))}
          />
        )}
      </main>
    </>
  )
}
