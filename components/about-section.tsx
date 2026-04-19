"use client";

export default function AboutSection() {
    return (
        <section className="py-24 px-6 md:px-20 bg-white relative z-10">
            <div className="border-t border-slate-200 w-full mb-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <span className="block text-kpu text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        The North Star
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Arah Baru <br />
                        Validasi.
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-2xl md:text-3xl leading-tight font-light text-slate-800 indent-20 reveal-paragraph">
                        Kami memadukan teknologi deteksi otomatis dengan referensi DPT
                        resmi. SIVELIH adalah simbol
                        <span className="text-kpu font-medium ml-2">ketetapan arah</span>{" "}
                        dalam lautan data demokrasi yang dinamis.
                    </p>
                </div>
            </div>
        </section>
    );
}
