"use client";
import { useState } from "react";

type Place = { name: string; note: string; query: string };
type Props = {
  tabs: { id: string; label: string; query: string }[];
  places: Record<string, Place[]>;
};

const embed = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const open = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export default function NearbyMap({ tabs, places }: Props) {
  const [tab, setTab] = useState(tabs[0].id);
  const [sel, setSel] = useState<string | null>(null);
  const list = places[tab] ?? [];
  const current = tabs.find((t) => t.id === tab)!;
  const mapQuery = sel ?? current.query;

  return (
    <div>
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === tab}
            className={t.id === tab ? "on" : ""}
            onClick={() => { setTab(t.id); setSel(null); }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="nearby-grid">
        <ul className="place-list">
          {list.map((p) => (
            <li key={p.name}>
              <button className={sel === p.query ? "on" : ""} onClick={() => setSel(p.query)}>
                <strong>{p.name}</strong>
                <span>{p.note}</span>
              </button>
              <a href={open(p.query)} target="_blank" rel="noreferrer">Buka di Maps</a>
            </li>
          ))}
        </ul>
        <iframe
          key={mapQuery}
          className="map"
          src={embed(mapQuery)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Peta ${current.label}`}
        />
      </div>
    </div>
  );
}
