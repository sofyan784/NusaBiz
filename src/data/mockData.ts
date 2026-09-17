import { EcosystemCategory, PricingPlan, TrainingItem, ArticleItem, PartnerLogo } from '../types';

export const ecosystemCategories: EcosystemCategory[] = [
  {
    id: 'sekolah',
    name: 'NusaBiz Sekolah',
    shortLabel: 'Sekolah',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    description: 'NusaBiz Sekolah menghadirkan solusi yang Anda butuhkan untuk menciptakan proses belajar mengajar yang lebih efektif dan efisien dengan dukungan produk dan layanan berbasis digital terintegrasi.',
    targetAudience: [
      'Pendidikan Dasar (TK/SD)',
      'Pendidikan Menengah (SMP/SMA)',
      'Pendidikan Tinggi & Vokasi',
      'Lembaga Pendidikan Informal & Kursus',
    ],
    solutions: [
      {
        id: 'ms-edu',
        title: 'Microsoft 365 for Edu',
        description: 'Kemudahan kolaborasi dan produktivitas dalam proses belajar mengajar melalui lisensi resmi cloud Microsoft.',
        icon: 'Monitor',
        badge: 'Produktivitas'
      },
      {
        id: 'pay-edu',
        title: 'Aplikasi Pembayaran SPP',
        description: 'Kemudahan melakukan pembayaran SPP dan iuran sekolah dengan integrasi sistem virtual account dan QRIS.',
        icon: 'CreditCard',
        badge: 'Finansial'
      },
      {
        id: 'sim-edu',
        title: 'Sistem Manajemen Sekolah',
        description: 'Solusi digital untuk manajemen sekolah terpadu mulai dari absensi, rapor digital, hingga penjadwalan terorganisir.',
        icon: 'School',
        badge: 'Sistem ERP'
      },
      {
        id: 'net-edu',
        title: 'Internet Dedicated Edu',
        description: 'Konektivitas internet bandwidth simetris tanpa hambatan untuk menunjang ujian nasional berbasis komputer.',
        icon: 'Wifi',
        badge: 'Konektivitas'
      }
    ]
  },
  {
    id: 'ruko',
    name: 'NusaBiz Ruko & Retail',
    shortLabel: 'Ruko & Retail',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    description: 'Solusi terintegrasi untuk pemilik ruko, toko ritel, cafe, dan UMKM untuk memperluas jangkauan pembeli, memantau toko secara real-time, dan mengelola stok kasir secara otomatis.',
    targetAudience: [
      'Toko Kelontong & Minimarket',
      'Cafe, Restoran & F&B',
      'Butik & Toko Fashion',
      'Bengkel & Jasa Layanan Mandiri'
    ],
    solutions: [
      {
        id: 'pos-retail',
        title: 'Smart Cloud POS System',
        description: 'Aplikasi kasir multi-cabang dengan laporan laba rugi instan dan manajemen inventori cerdas.',
        icon: 'Store',
        badge: 'Kasir Cerdas'
      },
      {
        id: 'cctv-retail',
        title: 'IP Camera Cloud Monitor',
        description: 'Pemantauan toko 24 jam dengan rekaman cloud yang aman diakses langsung dari ponsel Anda.',
        icon: 'Video',
        badge: 'Keamanan'
      },
      {
        id: 'wifi-guest',
        title: 'Social Wi-Fi Marketing',
        description: 'Jaringan Wi-Fi pelanggan yang sekaligus menjadi media promosi dan pengumpulan database loyalitas.',
        icon: 'Wifi',
        badge: 'Marketing'
      },
      {
        id: 'qris-soundbox',
        title: 'Soundbox Notifikasi QRIS',
        description: 'Pengeras suara notifikasi pembayaran instan anti-rekayasa untuk kelancaran transaksi di kasir.',
        icon: 'Volume2',
        badge: 'Fintech'
      }
    ]
  },
  {
    id: 'multifinance',
    name: 'NusaBiz Multifinance',
    shortLabel: 'Multifinance',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description: 'Dukungan infrastruktur digital berkeamanan tinggi dengan sertifikasi industri keuangan untuk lembaga perbankan, BPR, koperasi simpan pinjam, dan fintech terdaftar.',
    targetAudience: [
      'BPR & Koperasi Simpan Pinjam',
      'Perusahaan Pembiayaan Multifinance',
      'Platform P2P Lending Berizin',
      'Agen Keuangan Digital & Asuransi'
    ],
    solutions: [
      {
        id: 'e-kyc',
        title: 'Sistem e-KYC & Verifikasi',
        description: 'Verifikasi identitas nasabah cepat berbasis biometrik wajah dan validasi database kependudukan.',
        icon: 'ShieldCheck',
        badge: 'Keamanan'
      },
      {
        id: 'cloud-db',
        title: 'Dedicated Cloud Database',
        description: 'Server cloud berstandar ISO 27001 dan kepatuhan regulasi OJK dengan replikasi otomatis.',
        icon: 'Database',
        badge: 'Infrastruktur'
      },
      {
        id: 'sign-digital',
        title: 'Tanda Tangan Digital Tersertifikasi',
        description: 'Pengesahan dokumen perjanjian kredit secara legal tanpa perlu kehadiran fisik peminjam.',
        icon: 'FileText',
        badge: 'Legalitas'
      },
      {
        id: 'api-gateway',
        title: 'Core Banking API Gateway',
        description: 'Jembatan integrasi pembayaran angsuran melalui multi-bank dan gerai retail terdekat.',
        icon: 'Cpu',
        badge: 'Integrasi'
      }
    ]
  },
  {
    id: 'energi',
    name: 'NusaBiz Energi & Industri',
    shortLabel: 'Energi',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    description: 'Transformasi operasional fasilitas energi, pabrik manufaktur, dan pertambangan dengan sensor IoT telemetri andal dan jaringan konektivitas privat berdaya jangkau luas.',
    targetAudience: [
      'Pabrik & Manufaktur Menengah',
      'Pembangkit Listrik & Solar Farm',
      'Pertambangan & Pengolahan Material',
      'Distribusi Logistik Bahan Bakar'
    ],
    solutions: [
      {
        id: 'iot-telemetry',
        title: 'IoT Sensor Telemetri',
        description: 'Monitoring konsumsi daya, suhu mesin, dan tekanan pipa secara real-time dari ruang kontrol pusat.',
        icon: 'Activity',
        badge: 'IoT'
      },
      {
        id: 'satellite-link',
        title: 'Jaringan Satelit Remote',
        description: 'Konektivitas satelit berkecepatan tinggi untuk lokasi proyek terpencil di luar jangkauan fiber.',
        icon: 'Radio',
        badge: 'Satelit'
      },
      {
        id: 'asset-track',
        title: 'Heavy Equipment Tracker',
        description: 'Pelacakan GPS dan diagnostik utilisasi armada alat berat untuk efisiensi bahan bakar maksimal.',
        icon: 'Truck',
        badge: 'Fleet'
      },
      {
        id: 'surv-drone',
        title: 'AI Surveillance Thermal',
        description: 'Deteksi dini kebocoran panas dan anomali instalasi melalui kamera termal cerdas.',
        icon: 'Eye',
        badge: 'AI Vision'
      }
    ]
  },
  {
    id: 'hotel',
    name: 'NusaBiz Hospitality & Hotel',
    shortLabel: 'Hotel & Wisata',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    description: 'Solusi hospitality modern untuk meningkatkan kepuasan tamu, mempercepat proses check-in, dan menyajikan hiburan IPTV berkualitas di setiap kamar hotel.',
    targetAudience: [
      'Hotel Butik & Bintang 3-5',
      'Resor & Villa Wisata',
      'Homestay & Guest House',
      'Convention Hall & Meeting Center'
    ],
    solutions: [
      {
        id: 'iptv-hotel',
        title: 'Interactive Hotel IPTV',
        description: 'Layanan siaran premium TV interaktif dengan portal pemesanan room service langsung dari remote.',
        icon: 'Tv',
        badge: 'Entertainment'
      },
      {
        id: 'high-density-wifi',
        title: 'High-Density Wi-Fi Roaming',
        description: 'Koneksi Wi-Fi seamless tanpa putus saat tamu berpindah dari lobi, restoran, hingga kolam renang.',
        icon: 'Wifi',
        badge: 'Jaringan'
      },
      {
        id: 'pms-cloud',
        title: 'Property Management System',
        description: 'Sistem terpadu untuk reservasi kamar, housekeeping, dan integrasi dengan online travel agent.',
        icon: 'Home',
        badge: 'Sistem Hotel'
      },
      {
        id: 'smart-lock',
        title: 'Smart Keyless Door Access',
        description: 'Akses pintu kamar menggunakan smartphone tamu untuk pengalaman menginap modern tanpa antri.',
        icon: 'Key',
        badge: 'Smart Room'
      }
    ]
  },
  {
    id: 'health',
    name: 'NusaBiz Health & Klinik',
    shortLabel: 'Kesehatan',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    description: 'Digitalisasi fasilitas pelayanan kesehatan seperti klinik, apotek, dan puskesmas yang telah terintegrasi dengan Rekam Medis Elektronik (RME) dan platform SATUSEHAT.',
    targetAudience: [
      'Klinik Pratama & Utama',
      'Apotek & Toko Obat Berizin',
      'Laboratorium Medis',
      'Praktek Mandiri Dokter & Gigi'
    ],
    solutions: [
      {
        id: 'rme-satusehat',
        title: 'RME Terintegrasi SATUSEHAT',
        description: 'Sistem Rekam Medis Elektronik berbasis cloud yang telah terhubung resmi dengan Kemenkes RI.',
        icon: 'FileSpreadsheet',
        badge: 'Kemenkes Ready'
      },
      {
        id: 'antrean-online',
        title: 'Sistem Antrean Poliklinik',
        description: 'Manajemen antrean digital yang dapat diambil secara online melalui WhatsApp oleh pasien.',
        icon: 'Users',
        badge: 'Operasional'
      },
      {
        id: 'farmasi-pos',
        title: 'SIM Farmasi & Manajemen Obat',
        description: 'Pencatatan batch obat, tanggal kedaluwarsa, dan peracikan resep obat secara digital.',
        icon: 'PackageCheck',
        badge: 'Inventori'
      },
      {
        id: 'telekonsul',
        title: 'Platform Telekonsultasi Aman',
        description: 'Layanan konsultasi video dokter-pasien dengan enkripsi end-to-end berstandar medis.',
        icon: 'Video',
        badge: 'Telemedicine'
      }
    ]
  },
  {
    id: 'ekspedisi',
    name: 'NusaBiz Ekspedisi & Logistik',
    shortLabel: 'Logistik',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    description: 'Otomatisasi alur distribusi, manajemen pergudangan cerdas, dan pelacakan kurir terpadu untuk menekan biaya operasional rantai pasok.',
    targetAudience: [
      'Jasa Kurir & Kargo Regional',
      'Perusahaan Distributor Barang',
      'Penyedia Pergudangan (Warehousing)',
      'Armada Logistik e-Commerce'
    ],
    solutions: [
      {
        id: 'wms-cloud',
        title: 'Warehouse Management System',
        description: 'Pencatatan keluar masuk barang dengan barcode scanner dan optimasi peletakan rak gudang.',
        icon: 'Boxes',
        badge: 'Gudang'
      },
      {
        id: 'driver-app',
        title: 'Aplikasi Driver & Proof of Delivery',
        description: 'Tanda tangan digital penerima barang dan foto bukti serah terima secara instan di peta.',
        icon: 'Navigation',
        badge: 'Distribusi'
      },
      {
        id: 'fuel-sensor',
        title: 'Sensor Anti-Pencurian BBM',
        description: 'Pemantauan akurat isi tangki bahan bakar kendaraan ekspedisi untuk mencegah kebocoran solar.',
        icon: 'Fuel',
        badge: 'Efisiensi'
      },
      {
        id: 'auto-resi',
        title: 'API Generator Resi & Ongkir',
        description: 'Integrasi ongkos kirim otomatis ke berbagai website toko online dan marketplace klien.',
        icon: 'QrCode',
        badge: 'API'
      }
    ]
  },
  {
    id: 'agriculture',
    name: 'NusaBiz Agribisnis & Maritim',
    shortLabel: 'Agribisnis',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    description: 'Penerapan teknologi pertanian presisi dan sensor perikanan modern untuk meningkatkan hasil panen dan efisiensi pakan tambak.',
    targetAudience: [
      'Greenhouse & Kebun Hidroponik',
      'Tambak Udang & Ikan Budidaya',
      'Koperasi Petani & Penggilingan Beras',
      'Perkebunan Kelapa Sawit & Kopi'
    ],
    solutions: [
      {
        id: 'smart-fertigation',
        title: 'Sistem Fertigasi Otomatis',
        description: 'Penyiraman dan pemupukan presisi berbasis sensor kelembaban tanah dan cuaca.',
        icon: 'Droplets',
        badge: 'Smart Farming'
      },
      {
        id: 'aqua-feeder',
        title: 'Autofeeder Tambak Udang',
        description: 'Pemberian pakan otomatis terkendali sensor nafsu makan untuk menekan FCR budidaya.',
        icon: 'Waves',
        badge: 'Akuakultur'
      },
      {
        id: 'weather-station',
        title: 'Micro Weather Station IoT',
        description: 'Stasiun pantau cuaca mikro dengan prediksi curah hujan dan kecepatan angin lokal.',
        icon: 'CloudSun',
        badge: 'IoT Cuaca'
      },
      {
        id: 'traceability',
        title: 'Sertifikasi Asal Usul Hasil Panen',
        description: 'Pencatatan batch panen dengan QR Code untuk memenuhi standar ekspor komoditas.',
        icon: 'BadgeCheck',
        badge: 'Ekspor Ready'
      }
    ]
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-network',
    name: 'HSI Bisnis + Platform Monitoring Jaringan',
    category: 'Jaringan & Operasional',
    priceMonthly: 417000,
    tagline: 'Konektivitas stabil dengan visibilitas penuh performa jaringan toko & kantor.',
    features: [
      'Tersedia beragam pilihan Kecepatan Internet hingga 300 Mbps',
      'Diskon 70% biaya pasang baru (Harga Normal Rp 500.000)',
      'Termasuk biaya berlangganan platform Monitoring Jaringan by Netmonk',
      'Layanan customer care prioritas 24/7',
      'IP Dynamic Private dengan SLA Uptime 99.5%'
    ]
  },
  {
    id: 'plan-camera',
    name: 'HSI Bisnis + IP Camera Keamanan',
    category: 'Keamanan Bisnis',
    priceMonthly: 422000,
    tagline: 'Internet bisnis andal berpadu dengan pemantauan visual cerdas anti-khawatir.',
    features: [
      'Tersedia beragam pilihan Kecepatan Internet hingga 300 Mbps',
      'Diskon 70% biaya pasang baru (Harga Normal Rp 500.000)',
      'Termasuk 1 perangkat CCTV IP Camera by Antares Eazy',
      'Cloud storage penyimpanan rekaman video 7 hari',
      'Notifikasi deteksi gerakan otomatis langsung ke ponsel'
    ]
  },
  {
    id: 'plan-omnichannel',
    name: 'HSI Bisnis + Omnichannel Engagement Platform',
    category: 'Marketing & CRM',
    priceMonthly: 491000,
    isPopular: true,
    tagline: 'Satukan chat WhatsApp, Instagram, dan Tokopedia dalam satu dashboard terpadu.',
    features: [
      'Tersedia beragam pilihan Kecepatan Internet hingga 300 Mbps',
      'Diskon 70% biaya pasang baru (Harga Normal Rp 500.000)',
      'Termasuk biaya berlangganan Customer Omnichannel Engagement by OCA',
      'Centang Hijau WhatsApp Business API terverifikasi resmi',
      'Integrasi chatbot auto-reply cerdas tanpa batas pesan masuk'
    ]
  },
  {
    id: 'plan-school',
    name: 'HSI Bisnis + Sistem Manajemen Sekolah',
    category: 'Pendidikan & Akademik',
    priceMonthly: 970000,
    tagline: 'Solusi all-in-one modernisasi operasional sekolah dan pembelajaran siswa.',
    features: [
      'Tersedia beragam pilihan Kecepatan Internet hingga 300 Mbps',
      'Diskon 50% biaya pasang baru (Harga Normal Rp 500.000)',
      'Termasuk biaya berlangganan Platform Manajemen Sekolah by Pijar Sekolah',
      'Sistem raport digital dan database siswa lengkap',
      'Dukungan pendampingan teknis dan pelatihan guru'
    ]
  }
];

export const trainingItems: TrainingItem[] = [
  {
    id: 'train-1',
    title: 'JOIN Insight: Digitalin Bisnis, Optimalin Profit UMKM',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    date: '18 Sep 2026',
    time: '09.00 - 12.00 WIB',
    format: 'Pelatihan Online',
    isFree: true,
    category: 'Strategi Bisnis',
    speaker: 'Luki Ramdani - Head of SME Growth'
  },
  {
    id: 'train-2',
    title: 'Kupas Strategi Viral Campaign Brand Skincare & Retail 2026',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    date: '28 Feb 2026',
    time: '15.00 - 17.00 WIB',
    format: 'Pelatihan Online',
    isFree: true,
    category: 'Digital Marketing',
    speaker: 'M. Thobroni Ali - Digital Media Strategist'
  },
  {
    id: 'train-3',
    title: 'Memaksimalkan Penjualan Lewat Live Shopping di E-Commerce',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    date: '13 Feb 2026',
    time: '13.00 - 15.00 WIB',
    format: 'Pelatihan Online',
    isFree: true,
    category: 'E-Commerce',
    speaker: 'Fadli Aditya E. - Growth Commerce Lead'
  }
];

export const featuredArticle: ArticleItem = {
  id: 'art-feat',
  title: 'Berapa Mbps yang Dibutuhkan untuk Internet Kantor? Ini Panduannya',
  thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  publishTime: '24 hari yang lalu',
  readTime: '6 menit baca',
  category: 'Infrastruktur IT',
  excerpt: 'Memilih kecepatan bandwidth internet yang proporsional dengan jumlah karyawan dapat menghemat anggaran operasional hingga 35% sekaligus menjamin kelancaran video conference dan sinkronisasi server harian.',
  isFeatured: true
};

export const sideArticles: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'Ide Lomba 17 Agustus untuk Membangun Kekompakan Tim Hybrid',
    thumbnail: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
    publishTime: '1 bulan yang lalu',
    readTime: '4 menit baca',
    category: 'Budaya Kerja'
  },
  {
    id: 'art-2',
    title: 'Promo Kemerdekaan untuk Pelaku Usaha, Internet Bisnis Makin Hemat',
    thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80',
    publishTime: '1 bulan yang lalu',
    readTime: '3 menit baca',
    category: 'Promo & Tips'
  },
  {
    id: 'art-3',
    title: '5 Cara Meningkatkan Retensi Pelanggan Menggunakan Omnichannel CRM',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    publishTime: '2 minggu yang lalu',
    readTime: '5 menit baca',
    category: 'Pelayanan Pelanggan'
  },
  {
    id: 'art-4',
    title: 'Transformasi Digital Sekolah: Studi Kasus Efisiensi Administrasi Guru',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    publishTime: '3 minggu yang lalu',
    readTime: '5 menit baca',
    category: 'Edukasi'
  }
];

export const partnerLogos: PartnerLogo[] = [
  { name: 'ITC Depok', sector: 'Retail Hub' },
  { name: 'Rumah Sakit Bunda Aliyah', sector: 'Healthcare' },
  { name: 'Aice Ice Cream', sector: 'F&B FMCG' },
  { name: 'Avian Brands', sector: 'Manufacturing' },
  { name: 'Valbury Asia', sector: 'Financial' },
  { name: 'PT Surya Indo', sector: 'Logistics' },
  { name: 'Tanamera Coffee', sector: 'Hospitality' },
  { name: 'Yayasan Tarbiyah', sector: 'Education' }
];

export const heroSlideData = [
  {
    slideNumber: '01',
    badge: 'Bundling Unggulan',
    title: 'Internet Cepat + Cloud CCTV',
    subtitle: 'Keamanan tanpa kompromi untuk ruko dan kantor cabang Anda.',
    highlight: 'Diskon 70% Biaya Pasang'
  },
  {
    slideNumber: '02',
    badge: 'Bundling Menarik',
    title: 'Beli Internet Super Cepat',
    subtitle: 'Dapat bonus berbagai macam produk digital pilihan untuk operasional bisnis.',
    highlight: 'Konektivitas Hingga 300 Mbps'
  },
  {
    slideNumber: '03',
    badge: 'Solusi Omnichannel',
    title: 'Satu Dashboard untuk Semua Chat',
    subtitle: 'Tingkatkan respon pesan pelanggan dan konversi closing penjualan.',
    highlight: 'Resmi WhatsApp Green Tick'
  }
];
