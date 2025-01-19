'use client';

import React from 'react';
import Image from 'next/image';

function BookIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    );
}

function TabletIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

export default function BookPage() {
    return (
        <div className="min-h-screen bg-[#EAE7D5] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl">
                {/* Section principale avec fond beige */}
                <div className="bg-[#EAE7D5] p-8">
                    <div className="md:flex md:items-start">
                        <div className="md:shrink-0 p-6 md:p-8">
                            {/* Conteneur avec perspective */}
                            <div className="relative [perspective:1000px] group">
                                {/* Conteneur du livre avec préservation 3D */}
                                <div className="relative w-[300px] [transform-style:preserve-3d] transition-transform duration-500 ease-out 
                                    [transform:rotateY(-15deg)] 
                                    group-hover:[transform:rotateY(0deg)]
                                    animate-[bookRotate_1s_ease-out]"
                                >
                                    {/* Tranche droite du livre */}
                                    <div
                                        className="absolute right-0 top-0 w-12 h-full bg-gray-300 origin-right 
                                        [transform:rotateY(-90deg)_translateX(6px)] rounded-sm"
                                    ></div>

                                    {/* Tranche inférieure du livre */}
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-12 bg-gray-200 origin-bottom 
                                        [transform:rotateX(90deg)_translateY(6px)] rounded-sm"
                                    ></div>

                                    {/* Face avant (couverture) */}
                                    <div className="relative bg-white rounded-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                                        <div className="aspect-[3/4]">
                                            <Image
                                                src="/couverture-livre.jpg"
                                                alt="Couverture du livre"
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, 300px"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <h1 className="text-3xl font-bold text-black mb-6 font-fjalla">
                                Startup Nation
                            </h1>

                            <div className="mt-4 text-black space-y-4 font-garamond">
                                <p className="text-justify">
                                    20 millions d&apos;euros par ici, 50 millions par là. Tous les jours des Startups annoncent des montants records.
                                    Certaines changent le monde, d&apos;autres ne font qu&apos;un passage éphémère.
                                </p>
                                <p className="text-justify">
                                    Thomas a été bercé par les histoires d&apos;entrepreneurs à succès. Il veut créer le futur Doctolib et devenir
                                    le prochain Xavier Niel. Claire est convaincue que les politiques doivent aider ces génies de l&apos;innovation.
                                    Etienne lui, veut gagner beaucoup d&apos;argent.
                                </p>
                                <p className="text-justify">
                                    Engagés tous les trois dans cet univers aux règles floues, ils vous feront découvrir comment naissent
                                    et meurent les startups.
                                </p>
                            </div>

                            {/* Nouvelle section témoignages */}
                            <div className="mt-8 space-y-6">
                                <div className="bg-white/50 p-6 rounded-lg border border-black/10">
                                    <blockquote className="italic text-black/80 font-garamond">
                                        &ldquo;Le roman qui m&apos;a fait comprendre ce que mon petit fils fait sur son ordinateur&rdquo;
                                    </blockquote>
                                    <div className="mt-2 text-right">
                                        <cite className="text-black/70 font-fjalla not-italic">
                                            — Mamie Nicole
                                        </cite>
                                    </div>
                                </div>

                                <div className="bg-white/50 p-6 rounded-lg border border-black/10">
                                    <blockquote className="italic text-black/80 font-garamond">
                                        &ldquo;Investissez dans ce roman, c&apos;est une future licorne&rdquo;
                                    </blockquote>
                                    <div className="mt-2 text-right">
                                        <cite className="text-black/70 font-fjalla not-italic">
                                            — Etienne, leveur de fonds
                                        </cite>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-black mb-4 font-fjalla">
                                    Où acheter le livre
                                </h2>

                                {/* Section Bookelis */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-black mb-3 font-fjalla">Sur Bookelis</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a
                                            href="https://livres.bookelis.com/romans/67102-Start-Up-Nation.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-6 border rounded-lg hover:bg-[#1a2d5d]/5 transition-colors border-[#1a2d5d]/20 bg-white group"
                                        >
                                            <div className="flex flex-col space-y-4">
                                                <Image
                                                    src="/logos/bookelis.png"
                                                    alt="Bookelis"
                                                    width={120}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-800 font-medium flex items-center gap-2">
                                                        <BookIcon className="h-5 w-5 text-[#1a2d5d]" />
                                                        Papier
                                                    </span>
                                                    <span className="text-[#1a2d5d] font-bold text-sm">15,00 €</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a
                                            href="https://livres.bookelis.com/romans/67102-Start-Up-Nation.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-6 border rounded-lg hover:bg-[#1a2d5d]/5 transition-colors border-[#1a2d5d]/20 bg-white group"
                                        >
                                            <div className="flex flex-col space-y-4">
                                                <Image
                                                    src="/logos/bookelis.png"
                                                    alt="Bookelis"
                                                    width={120}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-800 font-medium flex items-center gap-2">
                                                        <TabletIcon className="h-5 w-5 text-[#1a2d5d]" />
                                                        ePub
                                                    </span>
                                                    <span className="text-[#1a2d5d] font-bold text-sm">3,99 €</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Section Autres revendeurs */}
                                <div>
                                    <h3 className="text-lg font-medium text-black mb-3 font-fjalla">Et bientôt disponible sur</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Amazon - Prochainement */}
                                        <div className="relative flex items-center justify-center p-6 border rounded-lg bg-gray-50">
                                            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg">
                                                <span className="text-gray-600 font-medium px-4 py-2 rounded-full bg-gray-100">
                                                    Prochainement
                                                </span>
                                            </div>
                                            <Image
                                                src="/logos/amazon.png"
                                                alt="Amazon"
                                                width={150}
                                                height={50}
                                                className="object-contain opacity-40"
                                            />
                                        </div>

                                        {/* Fnac - Prochainement */}
                                        <div className="relative flex items-center justify-center p-6 border rounded-lg bg-gray-50">
                                            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg">
                                                <span className="text-gray-600 font-medium px-4 py-2 rounded-full bg-gray-100">
                                                    Prochainement
                                                </span>
                                            </div>
                                            <Image
                                                src="/logos/fnac.png"
                                                alt="Fnac"
                                                width={150}
                                                height={50}
                                                className="object-contain opacity-40"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section auteur avec fond bleu */}
                <div className="bg-[#406F95] p-8">
                    <div className="flex items-center mb-6">
                        <div className="relative h-32 w-32 rounded-full overflow-hidden mr-6 shadow-lg">
                            <Image
                                src="/auteur.jpeg"
                                alt="Photo de l'auteur"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 128px"
                                priority
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white font-fjalla">
                                À propos de l&apos;auteur
                            </h2>
                            <p className="text-white/90 font-garamond">
                                Baptiste Derongs
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-white/90 font-garamond prose-headings:text-white prose-strong:text-white">
                        <p className="mb-4">
                            En 2015 j&apos;ai créé la startup Pipplet. J&apos;ai passé ensuite 5 ans à développer cette entreprise que j&apos;ai revendue en 2020 pour la quitte définitivement 3 ans plus tard.
                            Ces années dans l&apos;écosystème des startups ont été passionnantes et intenses. J&apos;ai connu des hauts et des bas, j&apos;ai rencontré des personnes géniales, d&apos;autres moins.
                        </p>
                        <p>
                            Plutôt qu&apos;un livre &ldquo;comment devenir entrepreneur&rdquo;, j&apos;ai voulu écrire un roman. Une histoire fictive plongeant les lecteurs dans la réalité des startups,
                            Loin des clichés et des success stories médiatisées. Mon objectif est de divertir, tout en donnant quelques clés de compréhension
                            à tous ceux qui s&apos;intéressent à cet écosystème, qu&apos;ils soient entrepreneurs en herbe,
                            investisseurs curieux ou simples observateurs.
                        </p>
                    </div>

                    <div className="mt-8 flex space-x-4">
                        <a href="https://www.linkedin.com/in/bderongs/"
                            className="text-white hover:text-white/80 transition-colors">
                            Mon profil LinkedIn
                        </a>
                        <a href="mailto:baptiste.derongs@gmail.com"
                            className="text-white hover:text-white/80 transition-colors">
                            Envoyez-moi un message
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 