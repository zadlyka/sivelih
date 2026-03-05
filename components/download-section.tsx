"use client";

import { RELEASES } from "./data/releases";

const DownloadIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
    </svg>
);

export default function DownloadSection() {
    return (
        <section id="download" className="py-20 px-6 md:px-20 bg-slate-50 relative z-10">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-5xl md:text-7xl font-bold text-slate-300 uppercase tracking-tighter">
                    Unduh
                    <br />
                    Aplikasi
                </h2>
                <p className="hidden md:block text-xs uppercase tracking-widest text-slate-500 max-w-xs text-right">
                    Pilih versi yang sesuai kebutuhan.
                </p>
            </div>

            <div className="space-y-6">
                {RELEASES.map((rel) => (
                    <div
                        key={rel.version}
                        className={`release-card group relative overflow-hidden rounded-sm border transition-all duration-500 ${rel.highlight
                                ? "border-[#91100c]/30 bg-white"
                                : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                    >
                        {rel.highlight && (
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#91100c]" />
                        )}

                        <div className="p-8 md:p-10 pl-10 md:pl-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            {/* Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl font-bold text-slate-900">
                                        {rel.version}
                                    </span>
                                    <span
                                        className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${rel.highlight
                                                ? "bg-[#91100c] text-white"
                                                : "bg-slate-100 text-slate-500"
                                            }`}
                                    >
                                        {rel.label}
                                    </span>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-slate-400 mb-5">
                                    <span>{rel.date}</span>
                                    <span>·</span>
                                    <span>{rel.size}</span>
                                    <span>·</span>
                                    <span>.exe installer</span>
                                </div>

                                <ul className="space-y-1">
                                    {rel.changelog.map((c, i) => (
                                        <li
                                            key={i}
                                            className="text-sm text-slate-600 flex items-start gap-2"
                                        >
                                            <span className="text-[#91100c] mt-0.5">—</span>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Static download button */}
                            <div className="shrink-0">
                                <a
                                    href={rel.href}
                                    download
                                    className={`magnetic-target cursor-pointer flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 uppercase text-xs tracking-widest font-bold ${rel.highlight
                                            ? "bg-[#91100c] text-white hover:bg-[#7a0d0a]"
                                            : "border border-slate-200 text-slate-700 hover:border-[#91100c] hover:text-[#91100c]"
                                        }`}
                                >
                                    <DownloadIcon />
                                    Unduh {rel.version}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
