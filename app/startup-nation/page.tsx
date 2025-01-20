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

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
    );
}

function EmailIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    );
}

function BookOpenIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    );
}

export default function BookPage() {
    return (
        <div className="min-h-screen bg-[#EAE7D5] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl">
                {/* Section principale avec fond beige */}
                <div className="bg-[#EAE7D5] p-8">
                    {/* Titre principal */}
                    <h1 className="text-6xl md:text-7xl font-bold text-black mb-16 font-fjalla text-center max-w-3xl mx-auto">
                        Start-Up Nation
                    </h1>

                    {/* Contenu principal */}
                    <div className="md:flex md:items-start md:gap-12">
                        {/* Couverture du livre */}
                        <div className="md:shrink-0 mx-auto md:mx-0 mb-8 md:mb-0">
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

                        {/* Résumé et témoignages */}
                        <div className="md:flex-1 md:pt-8">
                            {/* Résumé */}
                            <div className="text-black space-y-4 font-garamond">
                                <p className="text-justify">
                                    20 millions d&apos;euros par ici, 50 millions par là. Tous les jours des Start-ups annoncent des montants records.
                                    Certaines changent le monde, d&apos;autres ne font qu&apos;un passage éphémère.
                                </p>
                                <p className="text-justify">
                                    Thomas a été bercé par les histoires d&apos;entrepreneurs à succès. Il veut créer le futur Doctolib et devenir
                                    le prochain Xavier Niel. Claire est convaincue que les politiques doivent aider ces génies de l&apos;innovation.
                                    Etienne lui, veut gagner beaucoup d&apos;argent.
                                </p>
                                <p className="text-justify">
                                    Engagés tous les trois dans cet univers aux règles floues, ils vous feront découvrir comment naissent
                                    et meurent les start-ups.
                                </p>
                            </div>

                            {/* Section témoignages */}
                            <div className="mt-8 space-y-4">
                                <div className="space-y-4">
                                    <div className="bg-white/50 p-4 rounded-lg border border-black/10">
                                        <blockquote className="italic text-black/80 font-garamond text-sm">
                                            &ldquo;Le roman qui m&apos;a fait comprendre ce que mon petit fils fait sur son ordinateur.&rdquo;
                                        </blockquote>
                                        <div className="mt-2 text-right">
                                            <cite className="text-black/70 font-fjalla not-italic text-sm">
                                                — Mamie Nicole
                                            </cite>
                                        </div>
                                    </div>

                                    <div className="bg-white/50 p-4 rounded-lg border border-black/10">
                                        <blockquote className="italic text-black/80 font-garamond text-sm">
                                            &ldquo;Investissez dans ce roman, c&apos;est une future licorne.&rdquo;
                                        </blockquote>
                                        <div className="mt-2 text-right">
                                            <cite className="text-black/70 font-fjalla not-italic text-sm">
                                                — Etienne, leveur de fonds
                                            </cite>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Extrait */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold text-black mb-4 font-fjalla flex items-center gap-2">
                            <BookOpenIcon className="h-6 w-6" />
                            Lire un extrait
                        </h2>
                        <div className="bg-white/50 p-8 rounded-lg border border-black/10">
                            <div className="prose prose-lg max-w-none text-black/90 font-garamond">
                                <p className="text-justify">
                                    Thomas a toujours rêvé de devenir entrepreneur. Depuis qu&apos;il est petit, il lit les histoires de ces génies qui ont changé le monde depuis leur garage...
                                </p>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <a
                                    href="/startup-nation/extrait"
                                    className="text-[#1a2d5d] hover:text-[#1a2d5d]/80 transition-colors flex items-center gap-2 font-fjalla"
                                >
                                    Lire la suite →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section achat en pleine largeur */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold text-black mb-6 font-fjalla">
                            Où acheter le livre
                        </h2>

                        {/* Section Bookelis */}
                        <div className="mb-12">
                            <h3 className="text-lg font-medium text-black mb-4 font-fjalla">Sur Bookelis</h3>
                            <div className="grid md:grid-cols-2 gap-6">
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
                            <h3 className="text-lg font-medium text-black mb-4 font-fjalla">
                                Et bientôt disponible sur
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Amazon - Prochainement */}
                                <div className="relative flex items-center justify-center p-6 border rounded-lg bg-white group overflow-hidden">
                                    {/* Bandeau "Bientôt" */}
                                    <div className="absolute -right-12 top-4 bg-gray-500/90 text-white text-xs font-medium px-12 py-1 rotate-45 shadow-sm">
                                        Bientôt
                                    </div>
                                    <Image
                                        src="/logos/amazon.png"
                                        alt="Amazon"
                                        width={120}
                                        height={40}
                                        className="object-contain opacity-60 group-hover:opacity-80 transition-opacity"
                                    />
                                </div>

                                {/* Fnac - Prochainement */}
                                <div className="relative flex items-center justify-center p-6 border rounded-lg bg-white group overflow-hidden">
                                    {/* Bandeau "Bientôt" */}
                                    <div className="absolute -right-12 top-4 bg-gray-500/90 text-white text-xs font-medium px-12 py-1 rotate-45 shadow-sm">
                                        Bientôt
                                    </div>
                                    <Image
                                        src="/logos/fnac.png"
                                        alt="Fnac"
                                        width={120}
                                        height={40}
                                        className="object-contain opacity-60 group-hover:opacity-80 transition-opacity"
                                    />
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
                            En 2015 j&apos;ai créé la start-up Pipplet. J&apos;ai passé ensuite 5 ans à développer cette entreprise que j&apos;ai revendue en 2020 pour la quitter définitivement 3 ans plus tard.
                            Ces années dans l&apos;écosystème des start-ups ont été passionnantes et intenses. J&apos;ai connu des hauts et des bas, j&apos;ai rencontré des personnes géniales, d&apos;autres moins.
                        </p>
                        <p>
                            Plutôt qu&apos;un livre &ldquo;comment devenir entrepreneur&rdquo;, j&apos;ai voulu écrire un roman. Une histoire fictive plongeant les lecteurs dans la réalité des start-ups.
                            Loin des clichés et des success stories médiatisées. Mon objectif est de divertir, tout en donnant quelques clés de compréhension
                            à tous ceux qui s&apos;intéressent à cet écosystème, qu&apos;ils soient entrepreneurs en herbe,
                            investisseurs curieux ou simples observateurs.
                        </p>
                    </div>

                    <div className="mt-8 flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/bderongs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white/80 transition-colors flex items-center gap-2"
                            title="Mon profil LinkedIn"
                        >
                            <LinkedInIcon className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:startup-nation@derongs.net"
                            className="text-white hover:text-white/80 transition-colors flex items-center gap-2"
                            title="Envoyez-moi un message"
                        >
                            <EmailIcon className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 