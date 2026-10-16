"use client";
import { useState } from "react";

type Place = {
  name: string;
  note: string;
  query: string;
  category?: string | string[];
  link?: string;
};
type Tab = { id: string; label: string; categories?: string[] };
type Props = { tabs: Tab[]; places: Record<string, Place[]> };

const searchLink = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export default function NearbyMap({ tabs, places }: Props) {
  const [tab, setTab] = useState(tabs[0].id);
  const [cat, setCat] = useState("All");

  const current = tabs.find((t) => t.id === tab)!;
  const all = places[tab] ?? [];
  const list =
    cat === "All" ? all : all.filter((p) => [p.category].flat().includes(cat));

  const pickTab = (id: string) => {
    setTab(id);
    setCat("All");
  };

  return (
    <div>
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === tab}
            className={t.id === tab ? "on" : ""}
            onClick={() => pickTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {current.categories && (
        <div className="chips">
          {["All", ...current.categories].map((c) => (
            <button
              key={c}
              className={c === cat ? "on" : ""}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="place-list">
        {list.length === 0 && (
          <li className="empty">No places in this category yet.</li>
        )}
        {list.map((p) => (
          <li key={p.name}>
            <div>
              <strong>{p.name}</strong>
              <span>{p.note}</span>
            </div>
            <a
              className="maps-btn"
              href={p.link ?? searchLink(p.query)}
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
