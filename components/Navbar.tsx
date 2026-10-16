"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About the villa" },
  { href: "#breakfast", label: "Breakfast" },
  { href: "#spa", label: "Spa & Beauty" },
  { href: "#nearby", label: "Nearby" },
];

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="nav">
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <a href="#top" className="logo">
          {<img src="images/logo.png" width={40} height={40} alt={name} />}
        </a>
      </header>

      <div
        className={`drawer-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <nav className={`drawer ${open ? "show" : ""}`} aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
