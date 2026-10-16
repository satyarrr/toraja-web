"use client";
import { useEffect, useState } from "react";

type Guest = { eggs: string; drink: string };
type Props = {
  whatsapp: string;
  villaName: string;
  eggs: string[];
  drinks: string[];
  times: string[];
  maxPax: number;
};

export default function BreakfastOrder({
  whatsapp,
  villaName,
  eggs,
  drinks,
  times,
  maxPax,
}: Props) {
  const blank = (): Guest => ({ eggs: eggs[0], drink: drinks[0] });
  const [pax, setPax] = useState(1);
  const [guests, setGuests] = useState<Guest[]>([blank()]);
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [time, setTime] = useState(times[0]);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  // Earliest date = tomorrow (menu must be ordered the day before)
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    setMinDate(d.toLocaleDateString("en-CA")); // YYYY-MM-DD, local time
  }, []);
  const ready = name.trim() !== "" && date !== "";
  const changePax = (n: number) => {
    const v = Math.min(maxPax, Math.max(1, n));
    setPax(v);
    setGuests((g) => Array.from({ length: v }, (_, i) => g[i] ?? blank()));
  };
  const setGuest = (i: number, patch: Partial<Guest>) =>
    setGuests((g) => g.map((x, j) => (j === i ? { ...x, ...patch } : x)));

  const message = [
    `Hello ${villaName}, I'd like to order breakfast.`,
    `Name: ${name.trim()}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${pax}`,
    "",
    ...guests.map((g, i) => `${i + 1}. ${g.eggs}, ${g.drink}`),
    notes && `\nNotes: ${notes}`,
  ]
    .filter((line): line is string => typeof line === "string" && line !== "")
    .join("\n");

  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="order">
      <h3>Order your breakfast</h3>

      <div className="row">
        <label>
          Your name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Input Your name"
            required
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={date}
            min={minDate}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="pax">
        <span>Number of guests</span>
        <div className="stepper">
          <button
            type="button"
            onClick={() => changePax(pax - 1)}
            aria-label="Fewer guests"
          >
            −
          </button>
          <output>{pax}</output>
          <button
            type="button"
            onClick={() => changePax(pax + 1)}
            aria-label="More guests"
          >
            +
          </button>
        </div>
      </div>

      {guests.map((g, i) => (
        <fieldset key={i} className="guest">
          <legend>Guest {i + 1}</legend>
          <label>
            Eggs
            <select
              value={g.eggs}
              onChange={(e) => setGuest(i, { eggs: e.target.value })}
            >
              {eggs.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label>
            Drink
            <select
              value={g.drink}
              onChange={(e) => setGuest(i, { drink: e.target.value })}
            >
              {drinks.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        </fieldset>
      ))}

      <label>
        Notes
        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Allergies, special requests…"
        />
      </label>

      <a
        className="btn"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-disabled={!ready}
        onClick={(e) => {
          if (!ready) e.preventDefault();
        }}
      >
        Send order via WhatsApp
      </a>
      {!ready && (
        <p className="hint">Please enter your name and choose a date.</p>
      )}
    </div>
  );
}
