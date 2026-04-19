"use client";

export default function Footer() {
    return (
        <footer className="bg-[#91100c] text-white pt-24 pb-8 px-6 md:px-20 overflow-hidden relative">
            <div className="relative z-10">
                <h2 className="text-[5vw] leading-none font-bold tracking-tighter mb-8 text-white">
                    Sistem Informasi
                    <br />
                    Data Pemilih.
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8 mt-12">
                    <div className="text-sm opacity-70">
                        &copy; 2026 KPU Kabupaten Lahat.
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            href="https://lahatkab.kpu.go.id/"
                            className="text-xs uppercase tracking-widest hover:underline"
                        >
                            Akses SIDALIH
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
