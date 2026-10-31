import { QuizQuestion } from '../types/game';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'KARYA_MPU_TANTULAR',
    categoryLabel: 'Asal Mula Kitab',
    question: 'Semboyan "Bhinneka Tunggal Ika" pertama kali ditemukan dalam karya sastra kuno peninggalan Majapahit, yaitu...',
    options: [
      'Kitab Negarakertagama karangan Mpu Prapanca',
      'Kitab Kakawin Sutasoma karangan Mpu Tantular',
      'Kitab Arjunawiwaha karangan Mpu Kanwa',
      'Kitab Bharatayuddha karangan Mpu Sedah dan Panuluh'
    ],
    correctIndex: 1,
    explanation: {
      title: 'Kitab Kakawin Sutasoma Karya Mpu Tantular',
      summary: 'Frasa Bhinneka Tunggal Ika tertulis dalam karya sastra puisi Jawa Kuno (Kakawin) berjudul Sutasoma, digubah oleh Mpu Tantular.',
      historicalContext: 'Mpu Tantular hidup pada abad ke-14 Masehi di bawah naungan Kerajaan Majapahit. Karya ini ditulis pada masa pemerintahan Raja Hayam Wuruk.',
      keyTakeaway: 'Ingat kuncinya: Sutasoma digubah oleh Mpu Tantular pada zaman Majapahit abad ke-14.',
      sourceDocument: 'Kakawin Sutasoma, Pupuh 139 Bait 5'
    },
    remedialQuestion: {
      question: 'Siapakah pujangga besar Kerajaan Majapahit yang menggubah Kitab Kakawin Sutasoma?',
      options: ['Mpu Tantular', 'Mpu Prapanca', 'Mpu Gandring', 'Mpu Sedah'],
      correctIndex: 0,
      explanation: 'Tepat sekali! Mpu Tantular adalah pujangga sastra yang menulis Kakawin Sutasoma.'
    }
  },
  {
    id: 'q2',
    category: 'MAKNA_FILOSOFIS',
    categoryLabel: 'Makna Kalimat Lengkap',
    question: 'Kutipan lengkap frasa Bhinneka Tunggal Ika dalam Kakawin Sutasoma berbunyi "Bhinneka Tunggal Ika tan hana dharma mangrwa". Arti dari "tan hana dharma mangrwa" adalah...',
    options: [
      'Semua warga negara harus menganut satu agama yang sama',
      'Tidak ada kebenaran atau pengabdian yang mendua',
      'Kekuasaan raja mutlak dan tidak boleh ditentang',
      'Setiap suku memiliki hukum adat yang terpisah'
    ],
    correctIndex: 1,
    explanation: {
      title: 'Makna "Tan Hana Dharma Mangrwa"',
      summary: 'Secara leksikal bahasa Jawa Kuno, "tan" = tidak, "hana" = ada, "dharma" = kebenaran/kewajiban suci, "mangrwa" = mendua/bercabang.',
      historicalContext: 'Meskipun ajaran Siwa (Hindu) dan Buddha tampak berbeda secara ritual dan filosofis, hakikat kebenaran tertingginya bermuara pada satu Yang Maha Esa.',
      keyTakeaway: '"Tan hana dharma mangrwa" menegaskan bahwa kebenaran hakiki itu esa, tidak ada yang mendua.',
      sourceDocument: 'Leksikon Jawa Kuno - Zoetmulder (1982)'
    },
    remedialQuestion: {
      question: 'Dalam bahasa Jawa Kuno, kata "dharma" dalam kalimat tersebut merujuk kepada...',
      options: ['Kekayaan duniawi', 'Kebenaran atau kebajikan suci', 'Kekuatan fisik prajurit', 'Kesenian rakyat'],
      correctIndex: 1,
      explanation: 'Benar! Dharma bermakna kebenaran, hukum kebajikan, atau kewajiban suci.'
    }
  },
  {
    id: 'q3',
    category: 'SEJARAH_MAJAPAHIT',
    categoryLabel: 'Konteks Kerajaan Majapahit',
    question: 'Pada abad ke-14 di Kerajaan Majapahit, kalimat Bhinneka Tunggal Ika diciptakan terutama untuk menjaga kerukunan antara dua kelompok penganut kepercayaan, yaitu...',
    options: [
      'Agama Islam dan Kristen Katolik',
      'Penganut Animisme dan Dinamisme',
      'Agama Hindu Siwa dan Buddha Mahayana',
      'Agama Konghucu dan Taoisme'
    ],
    correctIndex: 2,
    explanation: {
      title: 'Toleransi Antara Siwa dan Buddha di Majapahit',
      summary: 'Masyarakat Majapahit mayoritas memeluk ajaran Hindu aliran Siwa dan Buddha Mahayana. Mpu Tantular menyuarakan harmoni teologis antara keduanya.',
      historicalContext: 'Bait aslinya berbunyi: "Rwaneka dhatu winuwus Buddha Wiswa... Mangka ng Jinatwa kalawan Siwatatwa tunggal" (Konsep ketuhanan Buddha dan Siwa dipandang berbeda, namun pada hakikatnya adalah satu).',
      keyTakeaway: 'Konteks asal Bhinneka Tunggal Ika adalah kerukunan dan persatuan penganut Hindu (Siwa) dan Buddha di Majapahit.',
      sourceDocument: 'Kakawin Sutasoma & Sejarah Nasional Indonesia Jilid II'
    },
    remedialQuestion: {
      question: 'Dua aliran keagamaan yang hidup rukun berdampingan di Majapahit era Mpu Tantular adalah...',
      options: ['Hindu Siwa dan Buddha', 'Kristen dan Katolik', 'Islam dan Hindu Waisnawa', 'Buddha Theravada dan Shinto'],
      correctIndex: 0,
      explanation: 'Hebat! Hindu Siwa dan Buddha adalah dua pilar keagamaan utama di Majapahit saat itu.'
    }
  },
  {
    id: 'q4',
    category: 'TOKOH_DAN_PENETAPAN',
    categoryLabel: 'Perumusan Semboyan Bangsa',
    question: 'Tokoh bangsa yang pertama kali mengusulkan kalimat "Bhinneka Tunggal Ika" dalam sidang resmi BPUPKI tahun 1945 sebagai semboyan persatuan adalah...',
    options: [
      'Mohammad Yamin',
      'Drs. Mohammad Hatta',
      'Prof. Dr. Soepomo',
      'Ki Hadjar Dewantara'
    ],
    correctIndex: 0,
    explanation: {
      title: 'Mohammad Yamin dan Usulan BPUPKI',
      summary: 'Mr. Mohammad Yamin adalah tokoh pergerakan nasional yang pertama kali mengangkat kutipan dari Kakawin Sutasoma ke dalam sidang BPUPKI.',
      historicalContext: 'Yamin yang gemar meneliti naskah sejarah Nusantara memperkenalkan semboyan ini sebagai simbol perekat keberagaman bangsa Indonesia dari Sabang sampai Merauke.',
      keyTakeaway: 'Mohammad Yamin adalah penggali pertama frasa ini untuk forum kenegaraan Indonesia merdeka.',
      sourceDocument: 'Risalah Sidang BPUPKI & PPKI (Sekretariat Negara RI)'
    },
    remedialQuestion: {
      question: 'Dalam forum sidang manakah Mohammad Yamin pertama kali mengusulkan Bhinneka Tunggal Ika?',
      options: ['Sidang BPUPKI (1945)', 'Kongres Pemuda I (1926)', 'Konferensi Meja Bundar (1949)', 'Sidang MPRS (1966)'],
      correctIndex: 0,
      explanation: 'Tepat! Frasa ini diusulkan dalam sidang BPUPKI saat merumuskan dasar negara.'
    }
  },
  {
    id: 'q5',
    category: 'LANDASAN_HUKUM',
    categoryLabel: 'Konstitusi Negara',
    question: 'Kedudukan Bhinneka Tunggal Ika ditegaskan secara resmi dalam Konstitusi Negara, yaitu pada UUD NRI Tahun 1945 pasal...',
    options: [
      'Pasal 33 ayat (1)',
      'Pasal 36A',
      'Pasal 27 ayat (3)',
      'Pasal 1 ayat (2)'
    ],
    correctIndex: 1,
    explanation: {
      title: 'Pasal 36A UUD NRI Tahun 1945',
      summary: 'Pasal 36A UUD NRI 1945 berbunyi: "Lambang Negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika."',
      historicalContext: 'Pasal ini dimasukkan dalam Perubahan/Amandemen Kedua UUD 1945 pada Sidang Tahunan MPR tahun 2000 untuk memperkokoh identitas kenegaraan.',
      keyTakeaway: 'Landasan konstitusional Bhinneka Tunggal Ika ada pada Pasal 36A UUD 1945.',
      sourceDocument: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 (Amandemen II)'
    },
    remedialQuestion: {
      question: 'Bunyi lengkap Pasal 36A UUD NRI 1945 memuat tentang...',
      options: [
        'Lambang Negara Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika',
        'Sistem perekonomian berasaskan kekeluargaan',
        'Hak warga negara untuk mendapatkan pengajaran',
        'Kewajiban bela negara setiap warga'
      ],
      correctIndex: 0,
      explanation: 'Tepat sekali! Pasal 36A mengatur Lambang Negara dan semboyan Bhinneka Tunggal Ika.'
    }
  },
  {
    id: 'q6',
    category: 'TOKOH_DAN_PENETAPAN',
    categoryLabel: 'Desain Lambang Negara',
    question: 'Siapakah perancang utama sketsa Lambang Negara Garuda Pancasila yang mencengkeram pita bertuliskan "Bhinneka Tunggal Ika"?',
    options: [
      'Sultan Hamid II dari Pontianak',
      'Raden Saleh',
      'Basuki Abdullah',
      'Affandi'
    ],
    correctIndex: 0,
    explanation: {
      title: 'Sultan Hamid II Perancang Lambang Garuda',
      summary: 'Sultan Hamid II (Syarif Abdul Hamid Alkadrie) menjabat sebagai Menteri Negara Zonder Portofolio dan memimpin Panitia Lencana Negara.',
      historicalContext: 'Rancangan Garuda Pancasila diajukan kepada Presiden Soekarno dan Perdana Menteri Mohammad Hatta, lalu disempurnakan (penambahan jambul, cengkeraman kaki mengarah ke depan) hingga disahkan 11 Februari 1950.',
      keyTakeaway: 'Sultan Hamid II adalah perancang utama Lambang Negara Garuda Pancasila.',
      sourceDocument: 'Sejarah Perumusan Lambang Negara Republik Indonesia'
    },
    remedialQuestion: {
      question: 'Pita bertuliskan "Bhinneka Tunggal Ika" pada lambang negara berada di bagian mana?',
      options: [
        'Dicengkeram erat oleh kedua cakar burung Garuda',
        'Dikalungkan di leher burung Garuda',
        'Diletakkan di atas kepala burung Garuda',
        'Menjadi latar belakang sayap Garuda'
      ],
      correctIndex: 0,
      explanation: 'Benar! Pita semboyan dicengkeram kokoh oleh kedua cakar kaki Garuda Pancasila.'
    }
  },
  {
    id: 'q7',
    category: 'MAKNA_FILOSOFIS',
    categoryLabel: 'Konsep Keberagaman',
    question: 'Secara etimologi bahasa Jawa Kuno, penguraian kata "Bhinneka - Tunggal - Ika" yang paling tepat adalah...',
    options: [
      'Bhinna (berbeda/terpecah), Ika (itu), Tunggal (satu)',
      'Bhinneka (banyak bangsa), Tunggal (raja), Ika (negara)',
      'Bhinneka (abadi), Tunggal (tanpa tanding), Ika (selamanya)',
      'Bhinna (bersaudara), Tunggal (rukun), Ika (selalu)'
    ],
    correctIndex: 0,
    explanation: {
      title: 'Etimologi Bhinneka Tunggal Ika',
      summary: 'Kata "bhinneka" berasal dari gabungan "bhinna" (berbeda, terpisah, beragam) dan "ika" (itu). Kata "tunggal" berarti satu.',
      historicalContext: 'Secara harfiah maknanya adalah: "Beraneka ragam itu, satu itu", yang kemudian diterjemahkan bebas menjadi "Berbeda-beda tetapi tetap satu jua".',
      keyTakeaway: 'Bhinna (beraneka/berbeda) + ika (itu) + tunggal (satu) = Berbeda-beda tetapi hakikatnya adalah satu kesatuan.',
      sourceDocument: 'Kamus Jawa Kuno - Indonesia karya P.J. Zoetmulder'
    },
    remedialQuestion: {
      question: 'Kata "bhinna" dalam bahasa Jawa Kuno memiliki arti...',
      options: ['Berbeda atau beraneka ragam', 'Satu tekad', 'Kemenangan perang', 'Cita-cita luhur'],
      correctIndex: 0,
      explanation: 'Tepat sekali! Bhinna berarti terpisah, berbeda, atau beragam.'
    }
  },
  {
    id: 'q8',
    category: 'LANDASAN_HUKUM',
    categoryLabel: 'Peraturan Perundangan',
    question: 'Undang-Undang Republik Indonesia yang mengatur secara spesifik mengenai Bendera, Bahasa, Lambang Negara, serta Lagu Kebangsaan adalah...',
    options: [
      'UU No. 20 Tahun 2003',
      'UU No. 24 Tahun 2009',
      'UU No. 12 Tahun 2011',
      'UU No. 32 Tahun 2004'
    ],
    correctIndex: 1,
    explanation: {
      title: 'UU No. 24 Tahun 2009',
      summary: 'UU No. 24 Tahun 2009 merupakan penjabaran resmi Pasal 35, 36, 36A, dan 36B UUD 1945 mengenai simbol-simbol kedaulatan NKRI.',
      historicalContext: 'Undang-undang ini mengatur tata cara penggunaan, bentuk, dimensi, dan penghormatan terhadap Garuda Pancasila dan semboyan Bhinneka Tunggal Ika.',
      keyTakeaway: 'UU No. 24 Tahun 2009 adalah payung hukum simbol kedaulatan negara termasuk semboyan nasional.',
      sourceDocument: 'Lembaran Negara Republik Indonesia Tahun 2009 No. 109'
    },
    remedialQuestion: {
      question: 'Simbol kedaulatan negara apa sajakah yang diatur dalam UU No. 24 Tahun 2009?',
      options: [
        'Bendera, Bahasa, Lambang Negara, dan Lagu Kebangsaan',
        'Pajak, APBN, dan Kekayaan Daerah',
        'Sistem Pemilu dan Partai Politik',
        'Hukum Pidana dan Kepolisian'
      ],
      correctIndex: 0,
      explanation: 'Benar! UU 24/2009 mengatur Bendera, Bahasa, Lambang Negara (Garuda), dan Lagu Kebangsaan.'
    }
  },
  {
    id: 'q9',
    category: 'PENERAPAN_PELAJAR',
    categoryLabel: 'Kehidupan Pelajar SMA',
    question: 'Dalam lingkungan sekolah SMA, wujud nyata pengamalan nilai Bhinneka Tunggal Ika yang paling tepat adalah...',
    options: [
      'Hanya mau berteman dengan teman yang berasal dari satu daerah asal yang sama',
      'Menghormati perayaan hari besar keagamaan teman sekelas dan aktif bekerja sama dalam kelompok belajar heterogen',
      'Menuntut semua anggota kelas memiliki hobi dan minat ekstrakurikuler yang seragam',
      'Mengutamakan budaya suku sendiri saat lomba seni antar-kelas tanpa mempedulikan budaya lain'
    ],
    correctIndex: 1,
    explanation: {
      title: 'Pengamalan Bhinneka Tunggal Ika di Sekolah',
      summary: 'Bhinneka Tunggal Ika mengajarkan toleransi aktif, saling menghargai keyakinan rekan, dan tidak mendiskriminasikan teman berdasarkan SARA.',
      historicalContext: 'Sekolah adalah miniatur masyarakat Indonesia. Pembentukan karakter inklusif dan kolaboratif menjadi tujuan utama Profil Pelajar Pancasila.',
      keyTakeaway: 'Sikap inklusif, menghormati ibadah sesama, dan berkolaborasi tanpa membedakan latar belakang adalah wujud nyata Bhinneka Tunggal Ika.',
      sourceDocument: 'Panduan Penguatan Profil Pelajar Pancasila Kemendikbudristek'
    },
    remedialQuestion: {
      question: 'Sikap apa yang harus dihindari oleh siswa SMA dalam menjaga kerukunan di kelas?',
      options: [
        'Sikap primordialisme sempit dan diskriminasi SARA',
        'Sikap saling menolong dalam piket kebersihan',
        'Sikap menghargai perbedaan pendapat saat musyawarah kelas',
        'Sikap tekun belajar bersama'
      ],
      correctIndex: 0,
      explanation: 'Tepat sekali! Primordialisme sempit (menganggap sukunya paling unggul) dan diskriminasi harus dijauhkan.'
    }
  },
  {
    id: 'q10',
    category: 'MAKNA_FILOSOFIS',
    categoryLabel: 'Prinsip Integrasi Nasional',
    question: 'Konsep persatuan dalam semboyan Bhinneka Tunggal Ika menganut prinsip "pluralisme yang terintegrasi", artinya...',
    options: [
      'Menghilangkan semua perbedaan suku dan budaya agar bangsa Indonesia menjadi seragam sepenuhnya',
      'Mengakui dan merawat keanekaragaman sebagai kekayaan bangsa dalam satu ikatan komitmen bernegara',
      'Memberikan hak istimewa kepada suku dengan jumlah penduduk terbesar di Indonesia',
      'Membiarkan setiap kelompok hidup terpisah tanpa interaksi sosial antar-budaya'
    ],
    correctIndex: 1,
    explanation: {
      title: 'Bhinneka Tunggal Ika Bukan Penyeragaman',
      summary: 'Persatuan dalam Bhinneka Tunggal Ika bukanlah "melting pot" yang meleburkan identitas hingga hilang, melainkan merangkul keberagaman dalam kesetaraan.',
      historicalContext: 'Masyarakat majemuk Indonesia tetap mempertahankan bahasa daerah, tarian, busana, dan adat masing-masing, namun terikat oleh cinta tanah air NKRI.',
      keyTakeaway: 'Bhinneka Tunggal Ika merawat keberagaman, bukan memaksakan keseragaman (asimilasi paksa).',
      sourceDocument: 'Buku Ajar Pendidikan Kewarganegaraan & Nilai-Nilai Kebangsaan'
    },
    remedialQuestion: {
      question: 'Apakah tujuan Bhinneka Tunggal Ika adalah menyeragamkan semua bahasa daerah menjadi satu bahasa saja tanpa melestarikan bahasa ibu?',
      options: [
        'Tidak, Bhinneka Tunggal Ika justru menghargai dan melestarikan keragaman bahasa daerah',
        'Ya, agar tidak ada lagi bahasa selain bahasa resmi negara',
        'Ya, karena bahasa daerah dianggap pemicu perpecahan',
        'Tergantung instruksi masing-masing bupati'
      ],
      correctIndex: 0,
      explanation: 'Benar sekali! Keberagaman bahasa daerah merupakan kekayaan budaya bangsa yang harus dilestarikan.'
    }
  },
  {
    id: 'q11',
    category: 'SEJARAH_MAJAPAHIT',
    categoryLabel: 'Tokoh Majapahit',
    question: 'Siapakah raja besar Majapahit yang berkuasa ketika Kakawin Sutasoma digubah oleh Mpu Tantular pada zaman keemasan kemaharajaan tersebut?',
    options: [
      'Prabu Hayam Wuruk (Sri Rajasanagara)',
      'Raden Wijaya (Kertarajasa Jayawardhana)',
      'Tribhuwana Tunggadewi',
      'Jayanegara'
    ],
    correctIndex: 0,
    explanation: {
      title: 'Prabu Hayam Wuruk dan Era Keemasan Majapahit',
      summary: 'Mpu Tantular hidup pada masa pemerintahan Prabu Hayam Wuruk (1350–1389 M), didampingi oleh Mahapatih Gajah Mada.',
      historicalContext: 'Pada era ini Majapahit mencapai puncak kemakmuran, kestabilan politik, serta kemajuan karya sastra dan peradaban nusantara yang heterogen.',
      keyTakeaway: 'Kakawin Sutasoma digubah pada masa pemerintahan Prabu Hayam Wuruk (abad ke-14 M).',
      sourceDocument: 'Sejarah Peradaban Nusantara Zaman Hindu-Buddha'
    },
    remedialQuestion: {
      question: 'Pada abad keberapakah Mpu Tantular hidup dan berkarya di Majapahit?',
      options: ['Abad ke-14 Masehi', 'Abad ke-7 Masehi', 'Abad ke-19 Masehi', 'Abad ke-2 Masehi'],
      correctIndex: 0,
      explanation: 'Tepat! Abad ke-14 Masehi adalah masa kejayaan Majapahit di bawah Hayam Wuruk.'
    }
  },
  {
    id: 'q12',
    category: 'PENERAPAN_PELAJAR',
    categoryLabel: 'Etika Digital & Media Sosial',
    question: 'Di era media sosial saat ini, bentuk ancaman terbesar terhadap keutuhan Bhinneka Tunggal Ika di kalangan generasi muda adalah...',
    options: [
      'Penyebaran narasi intoleransi, ujaran kebencian berbasis SARA, dan hoaks pemecah belah persatuan',
      'Tingginya penggunaan platform belajar daring antar provinsi',
      'Pertukaran musik tradisional di internet',
      'Kompetisi sains antarsekolah seluruh Indonesia'
    ],
    correctIndex: 0,
    explanation: {
      title: 'Tantangan Bhinneka Tunggal Ika di Era Digital',
      summary: 'Algoritma media sosial rawan menciptakan "echo chamber" dan memicu penyebaran politik identitas serta ujaran kebencian antarsuku dan agama.',
      historicalContext: 'Siswa SMA kelas X perlu memiliki literasi digital kritis, etika siber (netiket), serta komitmen tabayun (verifikasi fakta) sebelum menyebarkan konten.',
      keyTakeaway: 'Saring sebelum sharing: Lindungi persatuan dari hasutan SARA di media sosial.',
      sourceDocument: 'Modul Literasi Digital Kominfo & Kemenpora'
    },
    remedialQuestion: {
      question: 'Apa langkah bijak siswa ketika menerima berita mencurigakan yang menghina suku atau agama tertentu di grup WhatsApp?',
      options: [
        'Memverifikasi kebenarannya, tidak meneruskan konten, dan menegur pengirimnya secara santun',
        'Langsung membagikannya ke media sosial agar viral',
        'Menambahkan komentar provokatif',
        'Membuat grup baru untuk menyerang balik'
      ],
      correctIndex: 0,
      explanation: 'Hebat! Verifikasi fakta dan tahan diri dari memviralkan isu perpecahan SARA.'
    }
  }
];
