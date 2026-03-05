export type Release = {
  version: string;
  label: string;
  date: string;
  size: string;
  changelog: string[];
  highlight: boolean;
  /** Direct download href — point to your actual .exe file */
  href: string;
};

export const RELEASES: Release[] = [
  {
    version: "v0.1.0",
    label: "Latest Stable",
    date: "05 Maret 2026",
    size: "645 MB",
    changelog: [
      "Deteksi anomali",
      "Lengkapi Data Pemilih",
    ],
    highlight: true,
    href: "/downloads/SIVELIH_Setup_v0.1.0.exe",
  },
//   {
//     version: "v2.3.0",
//     label: "Previous",
//     date: "10 Apr 2026",
//     size: "81.7 MB",
//     changelog: [
//       "Tambah modul ekspor PDF laporan anomali",
//       "Optimasi performa load awal aplikasi",
//     ],
//     highlight: false,
//     href: "/downloads/SIVELIH_Setup_v2.3.0.exe",
//   },
//   {
//     version: "v2.2.5",
//     label: "Legacy",
//     date: "03 Feb 2026",
//     size: "79.4 MB",
//     changelog: [
//       "Hotfix koneksi database offline",
//       "Penyesuaian format DPT Q1 2026",
//     ],
//     highlight: false,
//     href: "/downloads/SIVELIH_Setup_v2.2.5.exe",
//   },
];

export const SYSTEM_REQUIREMENTS = [
  { label: "OS", value: "Windows 10 / 11 (64-bit)" },
  { label: "RAM", value: "Minimum 8 GB" },
  { label: "Storage", value: "10 GB tersedia" },
];

export const INSTALL_STEPS = [
  {
    num: "01",
    title: "Unduh Installer",
    desc: "Klik tombol unduh pada versi yang diinginkan. File berformat .exe akan tersimpan di folder Unduhan.",
  },
  {
    num: "02",
    title: "Jalankan Installer",
    desc: "Klik dua kali SIVELIH_Setup.exe. Jika muncul peringatan Windows Defender, pilih 'Tetap jalankan' — file telah diverifikasi aman.",
  },
];
