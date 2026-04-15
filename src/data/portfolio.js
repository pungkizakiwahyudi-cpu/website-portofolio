// ============================================================
// DATA TERPUSAT — edit semua konten di sini
// ============================================================

export const personalInfo = {
  name: 'Pungki Zaki Wahyudi',
  firstName: 'Pungki Zaki',
  lastName: 'Wahyudi',
  role: 'Frontend Developer & Web Freelancer',
  taglines: [
    'Frontend Developer',
    'React Specialist',
    'Freelance Web Developer',
    'UI/UX Implementer',
  ],
  description:
    'Saya membantu bisnis & personal brand tampil profesional di internet. Dari landing page, company profile, hingga web app modern — saya siap wujudkan.',
  about: [
    'Halo! Saya <strong>Pungki Zaki Wahyudi</strong>, Frontend Web Developer yang passionate dalam menciptakan website modern, cepat, dan berdampak nyata bagi bisnis.',
    'Saya tidak hanya menulis kode — saya membantu klien <strong>tampil profesional di internet</strong>, menarik lebih banyak pelanggan, dan mengembangkan bisnis mereka lewat website berkualitas tinggi.',
    'Sudah mengerjakan berbagai project dari landing page, company profile, hingga dashboard aplikasi. Saya fokus pada <strong>hasil nyata</strong> — website yang tidak hanya cantik, tapi juga berfungsi optimal.',
  ],
  photo: '/photo.png',
  email: 'pungkizakiwahyudi@gmail.com',
  whatsapp: '+62 857 7552 6387',
  whatsappLink: 'https://wa.me/6285775526387',
  linkedin: 'linkedin.com/in/pungkizakiwahyudi',
  linkedinLink: 'https://linkedin.com/in/pungkizakiwahyudi',
  github: 'github.com/pungkizakiwahyudi',
  githubLink: 'https://github.com/pungkizakiwahyudi',
  cvLink: '/CV_Pungki_Zaki_Wahyudi.pdf',
  waLink: 'https://wa.me/6285775526387',
}

export const stats = [
  { value: 10,  suffix: '+', label: 'Projects Completed'  },
  { value: 8,   suffix: '+', label: 'Happy Clients'       },
  { value: 1,   suffix: '+', label: 'Years Experience'    },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

// ─── SKILLS
export const skills = [
  {
    icon: '⚛️',
    title: 'Frontend Core',
    subtitle: 'Foundation teknologi web',
    color: 'blue',
    pills: [
      { label: 'React.js',        color: 'blue'   },
      { label: 'JavaScript ES6+', color: 'orange' },
      { label: 'HTML5',           color: 'orange' },
      { label: 'CSS3',            color: 'blue'   },
      { label: 'TypeScript',      color: 'pink'   },
    ],
    bars: [
      { name: 'React.js',   pct: 85 },
      { name: 'JavaScript', pct: 80 },
      { name: 'HTML & CSS', pct: 90 },
    ],
  },
  {
    icon: '🎨',
    title: 'Styling & UI',
    subtitle: 'Design system & visual polish',
    color: 'cyan',
    pills: [
      { label: 'Tailwind CSS',  color: 'cyan'  },
      { label: 'Framer Motion', color: 'pink'  },
      { label: 'CSS Modules',   color: 'blue'  },
      { label: 'Responsive',    color: 'green' },
    ],
    bars: [
      { name: 'Tailwind CSS',  pct: 90 },
      { name: 'Framer Motion', pct: 75 },
      { name: 'UI/UX Sense',   pct: 80 },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflow',
    subtitle: 'Dev environment & collaboration',
    color: 'pink',
    pills: [
      { label: 'Git & GitHub', color: 'orange' },
      { label: 'VS Code',      color: 'blue'   },
      { label: 'Vite',         color: 'cyan'   },
      { label: 'Figma',        color: 'pink'   },
    ],
    bars: [
      { name: 'Git & GitHub', pct: 80 },
      { name: 'Vite',         pct: 85 },
      { name: 'Figma',        pct: 70 },
    ],
  },
]

// ─── SERVICES
export const services = [
  { icon: '🚀', title: 'Landing Page',           desc: 'Halaman utama yang menarik, cepat, dan dirancang untuk konversi. Cocok untuk produk, layanan, atau personal brand.',           tags: ['React', 'Tailwind', 'Responsive']           },
  { icon: '🏢', title: 'Company Profile',         desc: 'Website profesional untuk bisnis Anda. Tampilkan layanan, tim, dan portofolio dengan desain yang berkesan.',                  tags: ['Modern Design', 'SEO Ready', 'CMS']         },
  { icon: '🛒', title: 'Toko Online / E-Commerce', desc: 'Toko online yang menarik dengan tampilan produk yang rapi, keranjang belanja, dan integrasi pembayaran.',                    tags: ['React', 'Payment Gateway', 'Mobile-First']  },
  { icon: '📊', title: 'Dashboard & Web App',     desc: 'Aplikasi web interaktif dengan fitur kompleks, tampilan data, dan pengalaman pengguna yang intuitif.',                        tags: ['React', 'API Integration', 'Real-time']     },
  { icon: '🎨', title: 'UI/UX Implementation',    desc: 'Punya desain Figma tapi butuh developer? Saya ubah desain Anda menjadi kode yang pixel-perfect.',                            tags: ['Figma to Code', 'Pixel-perfect', 'Animasi'] },
  { icon: '🔧', title: 'Revamp / Redesign',       desc: 'Website lama terlihat usang? Saya renovasi tampilan & performa website Anda agar modern dan kompetitif.',                    tags: ['Redesign', 'Performance', 'Migration']      },
]

// ─── PRICING
export const pricing = [
  {
    name: 'Starter', icon: '🌱',
    desc: 'Cocok untuk personal brand & UMKM yang baru mulai online',
    price: 'Mulai dari', highlight: 'Hubungi untuk harga',
    color: 'blue', popular: false,
    features: ['Landing Page / 1 halaman','Desain modern & responsif','Kontak WhatsApp & sosmed','Loading cepat & SEO dasar','Free revisi 2x','Selesai dalam 5–7 hari kerja'],
    notIncluded: ['Domain & hosting','CMS / admin panel','Custom animasi'],
  },
  {
    name: 'Professional', icon: '⚡',
    desc: 'Untuk bisnis yang ingin tampil serius dan profesional',
    price: 'Mulai dari', highlight: 'Hubungi untuk harga',
    color: 'cyan', popular: true,
    features: ['Website multi-halaman (3–6 halaman)','Desain premium & animasi halus','Form kontak & WhatsApp CTA','SEO-ready & performa optimal','Mobile-first responsive','Free revisi 4x','Selesai dalam 10–14 hari kerja','Free 1 bulan support'],
    notIncluded: ['Domain & hosting','Backend / database'],
  },
  {
    name: 'Custom', icon: '🚀',
    desc: 'Solusi penuh untuk kebutuhan web yang lebih kompleks',
    price: 'Harga menyesuaikan', highlight: 'Diskusi dulu',
    color: 'pink', popular: false,
    features: ['Web App / Dashboard custom','Integrasi API & database','Admin panel / CMS','E-commerce & payment gateway','Animasi & interaksi kompleks','Revisi unlimited','Estimasi waktu sesuai scope','Support jangka panjang'],
    notIncluded: [],
  },
]

// ─── HOW IT WORKS
export const howItWorks = [
  { step: '01', icon: '💬', title: 'Konsultasi Gratis',    desc: 'Ceritakan kebutuhan Anda — jenis website, target audiens, dan referensi desain. Gratis, tanpa komitmen.'                },
  { step: '02', icon: '🎨', title: 'Desain & Persetujuan', desc: 'Saya buat mockup desain berdasarkan brief Anda. Anda review, beri feedback, kita sepakati bersama.'                    },
  { step: '03', icon: '⚙️', title: 'Development',          desc: 'Desain yang sudah disetujui langsung saya kembangkan menjadi website yang fungsional dan responsif.'                    },
  { step: '04', icon: '🚀', title: 'Launch & Support',     desc: 'Website live! Saya pastikan semuanya berjalan sempurna dan siap bantu jika ada pertanyaan setelahnya.'                  },
]

// ─── TESTIMONIALS
export const testimonials = [
  { name: 'Ahmad Fauzi',  role: 'Owner, Toko Elektronik Fauzi', avatar: 'AF', avatarColor: 'blue', rating: 5, text: 'Website toko saya jadi jauh lebih profesional! Banyak pelanggan yang bilang mereka lebih percaya beli di toko kita setelah lihat websitenya. Pungki sangat responsif dan hasilnya melebihi ekspektasi.' },
  { name: 'Sari Dewi',    role: 'Freelance Photographer',        avatar: 'SD', avatarColor: 'cyan', rating: 5, text: 'Portfolio website saya sekarang terlihat sangat premium. Prosesnya smooth banget, komunikasinya enak, dan selesai tepat waktu. Highly recommended!'                                                      },
  { name: 'Budi Santoso', role: 'CEO, Startup Kuliner',          avatar: 'BS', avatarColor: 'pink', rating: 5, text: 'Landing page yang dibuat berhasil meningkatkan inquiry bisnis kami secara signifikan. Desainnya modern, loadingnya cepat, dan tampilannya di HP sempurna.'                                             },
]

// ─── FAQ
export const faqs = [
  { q: 'Berapa lama waktu pengerjaan website?',                        a: 'Tergantung kompleksitas project. Landing page 1 halaman bisa selesai 5–7 hari kerja. Website multi-halaman biasanya 10–14 hari. Project custom seperti web app akan didiskusikan sesuai scope.'                                            },
  { q: 'Apakah saya perlu menyiapkan konten (teks & foto) sendiri?',  a: 'Idealnya ya, karena Anda lebih tahu bisnis Anda. Tapi saya bisa bantu copywriting dasar dan saran pemilihan gambar dari stock photo gratis jika diperlukan.'                                                                                },
  { q: 'Apakah website yang dibuat responsif di HP?',                  a: 'Ya, 100%! Semua website yang saya buat menggunakan pendekatan mobile-first, artinya tampilan di HP diutamakan dan dijamin rapi di semua ukuran layar.'                                                                                      },
  { q: 'Bagaimana sistem pembayarannya?',                              a: 'Biasanya 50% di awal sebagai DP sebelum pengerjaan dimulai, dan 50% pelunasan setelah website selesai dan disetujui sebelum diserahkan.'                                                                                                    },
  { q: 'Apakah termasuk domain dan hosting?',                          a: 'Belum termasuk. Domain dan hosting ditanggung klien. Tapi saya bisa bantu rekomendasikan provider yang bagus dan bantu proses setup-nya.'                                                                                                   },
  { q: 'Bisa revisi seberapa banyak?',                                 a: 'Sudah termasuk revisi sesuai paket (2x untuk Starter, 4x untuk Professional). Revisi tambahan di luar paket bisa didiskusikan. Saya selalu terbuka untuk memastikan hasilnya sesuai keinginan Anda.'                                       },
]

// ─── PROJECTS
// Cara tambah project baru:
// 1. Taruh screenshot di src/assets/images/namafile.png
// 2. Tambah import & entry imageMap di Projects.jsx
// 3. Tambah object project baru di sini dengan image: 'namafile'
// Kalau belum ada screenshot → image: null (otomatis pakai mockup browser)
export const projects = [
  {
    id: '01',
    title: 'TEC An-Nahl',
    desc: "Website resmi Tilawati Education Center An-Nahl — pusat pendidikan Al-Qur'an dengan metode Tilawati. Fitur lengkap: profil lembaga, program kelas, pendaftaran santri online, galeri kegiatan, testimoni, dan halaman kontak.",
    stack: [
      { label: 'React.js',     color: 'blue'   },
      { label: 'Tailwind CSS', color: 'cyan'   },
      { label: 'Python',       color: 'green'  },
      { label: 'MySQL',        color: 'orange' },
    ],
    demoLink:   'https://tec-an-nahl-oeya.vercel.app/',
    githubLink: 'https://github.com/pungkizakiwahyudi-cpu/tec-an-nahl-full', 
    image:      'annahl',
    thumb:      'pt-1',
    category:   'Company Profile',
  },
  // ─── Tambah project baru di bawah sini ───────────────────
  // {
  //   id: '02',
  //   title: 'Nama Project',
  //   desc: 'Deskripsi singkat project...',
  //   stack: [
  //     { label: 'React.js', color: 'blue' },
  //   ],
  //   demoLink:   'https://...',
  //   githubLink: 'https://...',  // atau null kalau tidak ada
  //   image:      'namafile',     // atau null kalau belum ada screenshot
  //   thumb:      'pt-1',
  //   category:   'Landing Page',
  // },
]