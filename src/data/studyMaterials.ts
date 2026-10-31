export interface StudyModule {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  points: {
    heading: string;
    description: string;
    factHighlight?: string;
  }[];
}

export const STUDY_MODULES: StudyModule[] = [
  {
    id: 'sutasoma-tantular',
    title: 'Kakawin Sutasoma & Mpu Tantular',
    subtitle: 'Asal-usul historis abad ke-14 di Kerajaan Majapahit',
    icon: 'Scroll',
    points: [
      {
        heading: 'Pujangga Sastra Mpu Tantular',
        description: 'Mpu Tantular adalah seorang pujangga sastra agung beraliran Buddha Mahayana yang hidup pada masa keemasan Kerajaan Majapahit (abad ke-14 Masehi), di bawah kepemimpinan Prabu Hayam Wuruk.',
        factHighlight: 'Karya agungnya meliputi Kakawin Sutasoma dan Kakawin Arjunawijaya.'
      },
      {
        heading: 'Bait Pupuh 139 Bait 5',
        description: 'Kutipan terkenal ini berbunyi: "Rwāneka dhātu winuwus Buddha Wiswa, Bhinnêki rakwa ring apan kena parwanasên, Mangka ng Jinatwa kalawan Siwatatwa tunggal, Bhinnêka tunggal ika tan hana dharma mangrwa".',
        factHighlight: 'Makna: Konsep ketuhanan Buddha dan Siwa dipandang berbeda, namun pada hakikatnya adalah satu; tidak ada kebenaran/kewajiban suci yang mendua.'
      },
      {
        heading: 'Toleransi Antara Siwa dan Buddha',
        description: 'Pada zaman Majapahit, penganut agama Hindu (Siwa) dan Buddha hidup berdampingan secara damai. Semboyan ini diciptakan sebagai jembatan harmoni dan integrasi spiritual di tengah keberagaman keyakinan.',
        factHighlight: 'Prinsip teologis ini kemudian diadaptasi menjadi prinsip kebangsaan Indonesia.'
      }
    ]
  },
  {
    id: 'tokoh-penetapan',
    title: 'Perumusan & Penetapan Lambang Negara',
    subtitle: 'Dari sidang BPUPKI hingga Sidang Kabinet RIS 1950',
    icon: 'Feather',
    points: [
      {
        heading: 'Mohammad Yamin Mengusulkan di BPUPKI',
        description: 'Dalam persidangan BPUPKI antara Mei–Juni 1945, Mohammad Yamin adalah tokoh pertama yang mengutip dan mengusulkan frasa "Bhinneka Tunggal Ika" sebagai semboyan pemersatu bangsa.',
        factHighlight: 'Ir. Soekarno menyambut baik gagasan tersebut dan memperkenalkannya kepada seluruh rakyat Indonesia.'
      },
      {
        heading: 'Rancangan Sultan Hamid II',
        description: 'Sultan Hamid II (Menteri Negara RIS Zonder Portofolio) merancang lambang negara burung Garuda berdasarkan Panitia Lencana Negara, mencengkeram pita semboyan dengan kedua kakinya.',
        factHighlight: 'Rancangan disempurnakan oleh Presiden Soekarno (penambahan jambul, cengkeraman kaki mengarah ke depan) dan diresmikan 11 Februari 1950.'
      }
    ]
  },
  {
    id: 'landasan-hukum',
    title: 'Landasan Konstitusional & Yuridis',
    subtitle: 'Pasal 36A UUD 1945 & UU No. 24 Tahun 2009',
    icon: 'Scale',
    points: [
      {
        heading: 'Pasal 36A UUD NRI Tahun 1945',
        description: 'Melalui Amandemen Kedua UUD 1945 pada tahun 2000, ditegaskan: "Lambang Negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika".',
        factHighlight: 'Menjadikan semboyan ini berkedudukan konstitusional mengikat.'
      },
      {
        heading: 'Undang-Undang No. 24 Tahun 2009',
        description: 'UU ini mengatur secara komprehensif tentang Bendera, Bahasa, Lambang Negara, dan Lagu Kebangsaan sebagai sarana pemersatu, identitas, dan wujud kedaulatan NKRI.',
        factHighlight: 'Mengatur perlindungan, etika penggunaan, dan penghormatan simbol kedaulatan bangsa.'
      }
    ]
  },
  {
    id: 'makna-dan-pelajar',
    title: 'Makna Filosofis & Nilai Pelajar SMA',
    subtitle: 'Menolak diskriminasi SARA dan merawat kebinekaan global',
    icon: 'HeartHandshake',
    points: [
      {
        heading: 'Keberagaman SARA dalam NKRI',
        description: 'Indonesia memiliki lebih dari 1.340 suku bangsa dan 718 bahasa daerah. Bhinneka Tunggal Ika bukan penyeragaman (asimilasi paksa), melainkan perayaan kemajemukan dalam kesetaraan hukum dan sosial.',
        factHighlight: 'Bhinneka = Beraneka/Beragam, Tunggal = Satu, Ika = Itu.'
      },
      {
        heading: 'Profil Pelajar Pancasila & Anti-Perundungan',
        description: 'Bagi siswa SMA Kelas X, wujud nyatanya adalah menolak perundungan (bullying) berbasis suku/agama/kondisi fisik, bergaul secara inklusif, serta aktif menangkal hoaks provokatif di media sosial.',
        factHighlight: 'Sikap tasamuh (toleransi aktif) dan tabayun (verifikasi informasi).'
      }
    ]
  }
];
