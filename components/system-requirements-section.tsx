"use client";

import { SYSTEM_REQUIREMENTS } from "./data/releases";

export default function SystemRequirementsSection() {
    return (
        <section className="py-24 px-6 md:px-20 bg-white relative z-10">
            <div className="border-t border-slate-200 w-full mb-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <span className="block text-kpu text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Persyaratan Sistem
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Sebelum
                        <br />
                        Instal.
                    </h2>
                </div>

                <div className="md:col-span-8 grid grid-cols-2 gap-6">
                    {SYSTEM_REQUIREMENTS.map((req) => (
                        <div
                            key={req.label}
                            className="border border-slate-100 rounded-sm p-6 hover:border-[#91100c]/30 transition-colors duration-300"
                        >
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                                {req.label}
                            </p>
                            <p className="text-lg font-semibold text-slate-800">{req.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
