import BreakfastOrder from "@/components/BreakfastOrder";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import NearbyMap from "@/components/NearbyMap";
import SpaMenu from "@/components/SpaMenu";
import { villa, slides, about, breakfast, spa, nearby } from "@/data/villa";

const wa = (text: string) =>
  `https://wa.me/${villa.whatsapp}?text=${encodeURIComponent(text)}`;

export default function Home() {
  return (
    <main>
      <Navbar name={villa.name} />
      {/* 1. Carousel */}
      <Carousel slides={slides} />

      {/* 2. Tentang villa */}
      <section id="about" className="section">
        <div className="wrap about">
          <div>
            <h2>{about.title}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h3>Rules Villa</h3>
            <ul className="rules">
              {about.rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <aside className="info">
            <dl>
              {about.info.map((x) => (
                <div key={x.label}>
                  <dt>{x.label}</dt>
                  <dd>{x.value}</dd>
                </div>
              ))}
              <div>
                <dt>WiFi</dt>
                <dd>
                  {villa.wifi.name}
                  <br />
                  {villa.wifi.password}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* 3. Sarapan */}
      {/* 3. Breakfast */}
      <section id="breakfast" className="section tint">
        <div className="wrap bf">
          <div
            className="photo"
            style={{ backgroundImage: `url("${breakfast.image}")` }}
            role="img"
            aria-label={breakfast.menuName}
          />
          <div>
            <h2>{breakfast.title}</h2>
            <h3 className="menu-name">{breakfast.menuName}</h3>
            <ul className="bf-list">
              {breakfast.items.map((m) => (
                <li key={m.name}>
                  <strong>{m.name}</strong>
                  {m.desc && <span>{m.desc}</span>}
                </li>
              ))}
            </ul>
            <p className="lead">{breakfast.note}</p>
            <BreakfastOrder
              whatsapp={villa.whatsapp}
              villaName={villa.name}
              {...breakfast.options}
            />
          </div>
        </div>
      </section>

      {/* 4. Spa */}
      <section id="spa" className="section">
        <div className="wrap spa">
          <div
            className="photo tall"
            style={{ backgroundImage: `url(${spa.image})` }}
            role="img"
            aria-label="Spa"
          />
          <div>
            <h2>{spa.title}</h2>
            <p>{spa.intro}</p>
            <SpaMenu categories={spa.categories} />
            <a
              className="btn"
              href={wa("Hello, I want to Order Spa & Beauty")}
              target="_blank"
              rel="noreferrer"
            >
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
