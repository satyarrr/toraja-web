import Carousel from "@/components/Carousel";
import NearbyMap from "@/components/NearbyMap";
import { villa, slides, about, breakfast, spa, nearby } from "@/data/villa";

const wa = (text: string) => `https://wa.me/${villa.whatsapp}?text=${encodeURIComponent(text)}`;

export default function Home() {
  return (
    <main>
      {/* 1. Carousel */}
      <Carousel slides={slides} />

      {/* 2. Tentang villa */}
      <section id="about" className="section">
        <div className="wrap about">
          <div>
            <h2>{about.title}</h2>
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <h3>Aturan villa</h3>
            <ul className="rules">{about.rules.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
          <aside className="info">
            <dl>
              {about.info.map((x) => (
                <div key={x.label}><dt>{x.label}</dt><dd>{x.value}</dd></div>
              ))}
              <div><dt>WiFi</dt><dd>{villa.wifi.name}<br />{villa.wifi.password}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* 3. Sarapan */}
      <section id="breakfast" className="section tint">
        <div className="wrap">
          <h2>{breakfast.title}</h2>
          <p className="lead">{breakfast.note}</p>
          <div className="menu">
            {breakfast.items.map((m) => (
              <article key={m.name}>
                <div className="photo" style={{ backgroundImage: `url(${m.image})` }} role="img" aria-label={m.name} />
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
          <a className="btn" href={wa("Halo, saya mau pesan sarapan untuk besok.")} target="_blank" rel="noreferrer">
            Pesan sarapan via WhatsApp
          </a>
        </div>
      </section>

      {/* 4. Spa */}
      <section id="spa" className="section">
        <div className="wrap spa">
          <div className="photo tall" style={{ backgroundImage: `url(${spa.image})` }} role="img" aria-label="Spa" />
          <div>
            <h2>{spa.title}</h2>
            <p>{spa.intro}</p>
            <ul className="prices">
              {spa.treatments.map((t) => (
                <li key={t.name}>
                  <span><strong>{t.name}</strong><small>{t.duration}</small></span>
                  <span>{t.price}</span>
                </li>
              ))}
            </ul>
            <a className="btn" href={wa("Halo, saya mau booking spa.")} target="_blank" rel="noreferrer">
              Booking spa via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 5. Rekomendasi sekitar */}
      <section id="nearby" className="section tint">
        <div className="wrap">
          <h2>{nearby.title}</h2>
          <NearbyMap tabs={nearby.tabs} places={nearby.places} />
        </div>
      </section>

      <footer>{villa.name}</footer>
    </main>
  );
}
