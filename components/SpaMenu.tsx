"use client";
import { useState } from "react";

type Item = {
  name: string;
  desc?: string;
  duration?: string;
  price: number;
  from?: boolean;
};
type Category = { id: string; label: string; items: Item[] };

export default function SpaMenu({ categories }: { categories: Category[] }) {
  const [id, setId] = useState(categories[0].id);
  const current = categories.find((c) => c.id === id)!;

  return (
    <>
      <div className="tabs" role="tablist">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === id}
            className={c.id === id ? "on" : ""}
            onClick={() => setId(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="prices">
        {current.items.map((t) => (
          <li key={t.name}>
            <span>
              <strong>{t.name}</strong>
              {t.duration && <small>{t.duration}</small>}
              {t.desc && <small>{t.desc}</small>}
            </span>
            <span className="price">
              {t.from && "from "}Rp {t.price}.000
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
