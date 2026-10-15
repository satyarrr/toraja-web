// ✏️ EDIT SEMUA KONTEN DI SINI — tidak perlu sentuh kode lain.

export const villa = {
  name: "Villa Nama Kamu",
  wifi: { name: "VillaWifi", password: "password123" },
  whatsapp: "6281234567890", // format internasional tanpa +
};

export const slides = [
  { image: "/images/hero-1.jpg", title: "Selamat datang di Villa Nama Kamu", subtitle: "Rumah kedua kamu di Bali" },
  { image: "/images/hero-2.jpg", title: "Kolam renang pribadi", subtitle: "Berenang kapan saja, 24 jam" },
  { image: "/images/hero-3.jpg", title: "Pagi di tengah sawah", subtitle: "Tenang, hijau, dan sejuk" },
];

export const about = {
  title: "Tentang villa kami",
  paragraphs: [
    "Tulis penjelasan villa di sini: lokasi, jumlah kamar, suasana, dan hal unik yang membuat villa ini berbeda.",
    "Paragraf kedua bisa berisi fasilitas utama seperti kolam renang, dapur, dan area santai.",
  ],
  info: [
    { label: "Check-in", value: "14.00" },
    { label: "Check-out", value: "12.00" },
    { label: "Jam tenang", value: "22.00 – 07.00" },
    { label: "Kontak darurat", value: "+62 812 3456 7890" },
  ],
  rules: ["Dilarang merokok di dalam kamar", "Harap matikan AC saat keluar villa", "Tidak ada pesta atau acara besar"],
};

export const breakfast = {
  title: "Sarapan",
  note: "Disajikan 07.30 – 10.30. Pesan sehari sebelumnya lewat WhatsApp.",
  items: [
    { name: "Nasi Goreng Kampung", desc: "Telur mata sapi, kerupuk, acar.", image: "/images/breakfast-1.jpg" },
    { name: "Pancake Pisang", desc: "Madu lokal dan buah segar.", image: "/images/breakfast-2.jpg" },
    { name: "Smoothie Bowl", desc: "Buah naga, granola, kelapa.", image: "/images/breakfast-3.jpg" },
  ],
};

export const spa = {
  title: "Spa",
  intro: "Pijat dan perawatan langsung di villa oleh terapis lokal berpengalaman.",
  image: "/images/spa.jpg",
  treatments: [
    { name: "Balinese Massage", duration: "60 menit", price: "Rp 250.000" },
    { name: "Aromatherapy", duration: "90 menit", price: "Rp 350.000" },
    { name: "Foot Reflexology", duration: "45 menit", price: "Rp 180.000" },
  ],
};

// Peta di-embed dari Google Maps lewat kata pencarian — tidak butuh API key.
// Ganti `query` dengan nama tempat + area, misalnya "Warung Eny Seminyak".
export const nearby = {
  title: "Rekomendasi sekitar villa",
  tabs: [
    { id: "restaurant", label: "Restoran", query: "restaurant near Ubud Bali" },
    { id: "activity", label: "Aktivitas", query: "things to do near Ubud Bali" },
    { id: "bar", label: "Bar", query: "bar near Ubud Bali" },
  ],
  places: {
    restaurant: [
      { name: "Nama Restoran 1", note: "Masakan Indonesia, 5 menit dari villa", query: "Nama Restoran 1 Ubud" },
      { name: "Nama Restoran 2", note: "Seafood, buka sampai 22.00", query: "Nama Restoran 2 Ubud" },
    ],
    activity: [
      { name: "Tegallalang Rice Terrace", note: "Cocok untuk pagi hari", query: "Tegallalang Rice Terrace" },
      { name: "Monkey Forest", note: "20 menit berkendara", query: "Monkey Forest Ubud" },
    ],
    bar: [
      { name: "Nama Bar 1", note: "Live music tiap Jumat", query: "Nama Bar 1 Ubud" },
      { name: "Nama Bar 2", note: "Sunset cocktail", query: "Nama Bar 2 Ubud" },
    ],
  } as Record<string, { name: string; note: string; query: string }[]>,
};
