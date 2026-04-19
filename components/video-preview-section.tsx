"use client";

export default function VideoPreviewSection() {
  return (
    <section
      id="download"
      className="py-20 px-6 md:px-20 bg-slate-50 relative z-10"
    >
      {/* Contact KPU Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <span className="block text-[#91100c] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Butuh
            <br />
            Akses?
          </h2>

          {/* Access restriction notice */}
          <div className="flex items-start gap-3 p-4 rounded-sm bg-amber-50 border border-amber-200 mt-6">
            <svg
              className="w-4 h-4 text-amber-600 mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
            <p className="text-xs text-amber-700 leading-relaxed">
              <span className="font-bold uppercase tracking-wider">
                Perhatian:
              </span>{" "}
              Akses pengunduhan dan penggunaan Sivelih melalui tautan ini telah
              dibatasi. Untuk mendapatkan akses resmi ke aplikasi, silakan
              hubungi KPU Kabupaten Lahat secara langsung.
            </p>
          </div>
        </div>

        <div className="md:col-span-8 space-y-0">
          {/* Kantor */}
          <div className="flex gap-8 py-10 border-b border-slate-100">
            <span className="text-5xl font-bold text-slate-100 shrink-0 leading-none">
              01
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Kunjungi Kantor
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Kunjungi kami pada jam kerja, Senin–Jumat pukul 08.00–16.00 WIB.
              </p>
            </div>
          </div>

          {/* Telepon/Email */}
          <div className="flex gap-8 py-10 border-b border-slate-100">
            <span className="text-5xl font-bold text-slate-100 shrink-0 leading-none">
              02
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Hubungi via Telepon atau Email
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Sampaikan kebutuhan Anda melalui telepon atau email resmi KPU
                Kabupaten Lahat. Tim kami siap membantu proses pemberian akses
                aplikasi Sivelih kepada pihak yang berwenang.
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="flex gap-8 py-10">
            <span className="text-5xl font-bold text-slate-100 shrink-0 leading-none">
              03
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Informasi Resmi
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Informasi lebih lanjut tersedia di website resmi KPU Kabupaten
                Lahat. Pastikan Anda mengakses informasi hanya dari sumber resmi
                KPU untuk menghindari informasi yang tidak valid.
              </p>
              <a
                href="https://kab-lahat.kpu.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-[#91100c] hover:opacity-70 transition-opacity"
              >
                kab-lahat.kpu.go.id
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
