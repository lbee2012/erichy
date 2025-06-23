import React, { useState } from "react"
import Background from "../components/Background"
import HomeWindow from "../components/HomeWindow"
import AboutWindow from "../components/AboutWindow"
import WorksWindow from "../components/WorksWindow"
import ContactWindow from "../components/ContactWindow"

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
        {open.works && (
          <WorksWindow
            onClose={() => setOpen(o => ({ ...o, works: false }))}
          />
        )}
        {open.contact && (
          <ContactWindow
            onClose={() => setOpen(o => ({ ...o, contact: false }))}
          />
        )}
      </main>
    </>
  )
}
