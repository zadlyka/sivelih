"use client";

import { INSTALL_STEPS } from "./data/releases";

export default function InstallGuideSection() {
    return (
        <section className="py-24 px-6 md:px-20 bg-white relative z-10">
            <div className="border-t border-slate-200 w-full mb-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4">
                    <span className="block text-kpu text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Panduan Instalasi
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Tiga
                        <br />
                        Langkah.
                    </h2>
                </div>

                <div className="md:col-span-8 space-y-0">
                    {INSTALL_STEPS.map((step, i) => (
                        <div
                            key={step.num}
                            className={`flex gap-8 py-10 ${i < INSTALL_STEPS.length - 1 ? "border-b border-slate-100" : ""}`}
                        >
                            <span className="text-5xl font-bold text-slate-100 shrink-0 leading-none">
                                {step.num}
                            </span>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
