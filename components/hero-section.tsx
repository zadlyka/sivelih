"use client";

export default function HeroSection() {
    return (
        <section className="h-screen flex flex-col justify-center px-6 md:px-20 relative pt-20">
            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="line-wrapper overflow-hidden">
                    <h1 className="reveal-text text-6xl md:text-[7vw] leading-[0.95] font-bold tracking-tight text-slate-900">
                        Pemandu Data
                    </h1>
                </div>

                <div className="line-wrapper overflow-hidden">
                    <h1 className="reveal-text text-6xl md:text-[7vw] leading-[0.95] font-bold tracking-tight text-kpu">
                        Terintegrasi.
                    </h1>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="max-w-xl opacity-0 fade-in-up">
                        <p className="text-slate-800 text-lg md:text-xl font-medium mb-2">
                            SIVELIH sebagai Alat Bantu SIDALIH
                        </p>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                            Layaknya bintang yang menjadi acuan arah, sistem ini menjamin
                            akurasi dan validitas data pemilih di Kabupaten Lahat.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 opacity-0 fade-in-up">
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center animate-spin-slow">
                            <svg
                                className="w-5 h-5 text-kpu"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </div>
                        <span className="text-xs uppercase tracking-widest font-bold text-kpu">
                            Presisi Tinggi
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
