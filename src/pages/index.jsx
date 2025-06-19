import React, { useState } from "react"
import FolderWindow from "../components/FolderWindow"

export default function Home() {
  const [open, setOpen] = useState({})

  const folders = [
    { key: "about", title: "about", file: "about.md" },
    { key: "works", title: "works", file: "works.md" },
    { key: "contact", title: "contact", file: "contact.md" },
  ]

  return (
    <main className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        {folders.map(f => (
          <button
            key={f.key}
            onClick={() => setOpen(o => ({ ...o, [f.key]: true }))}
            className="p-6 bg-yellow-300 hover:bg-yellow-400 rounded shadow"
          >
            {f.title}
          </button>
        ))}
      </div>

      {folders.map(f =>
        open[f.key] ? (
          <FolderWindow
            key={f.key}
            title={f.title}
            file={f.file}
            onClose={() => setOpen(o => ({ ...o, [f.key]: false }))}
          />
        ) : null
      )}
    </main>
  )
}
