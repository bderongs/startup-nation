'use client';

import React from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function BookPage() {
    const handlePurchase = async () => {
        try {
            const stripe = await stripePromise;
            if (!stripe) throw new Error('Stripe not loaded');

            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
            });

            const session = await response.json();

            await stripe.redirectToCheckout({
                sessionId: session.id,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex md:items-start">
                    <div className="md:shrink-0 p-6 md:p-8">
                        <div className="relative w-[300px] shadow-2xl rounded-lg overflow-hidden">
                            <div className="aspect-[3/4]">
                                <Image
                                    src="/couverture-livre.jpg"
                                    alt="Couverture du livre"
                                    fill
                                    className="object-contain bg-white"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            Startup Nation
                        </h1>

                        <div className="mt-4 text-gray-600 space-y-4">
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

                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Où acheter le livre
                                </h2>

                                {/* Section Bookelis */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-medium text-gray-700 mb-3">Sur Bookelis</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a
                                            href="https://livres.bookelis.com/romans/67102-Start-Up-Nation.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-6 border rounded-lg hover:bg-blue-50 transition-colors border-blue-200 bg-white group"
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
                                                    <span className="text-gray-800 font-medium">Version papier</span>
                                                    <span className="text-blue-600 font-bold text-lg">15,00 €</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a
                                            href="https://livres.bookelis.com/romans/67102-Start-Up-Nation.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-6 border rounded-lg hover:bg-blue-50 transition-colors border-blue-200 bg-white group"
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
                                                    <span className="text-gray-800 font-medium">Version ePub</span>
                                                    <span className="text-blue-600 font-bold text-lg">3,99 €</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Section Autres revendeurs */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-700 mb-3">Et bientôt disponible sur</h3>
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

                <div className="border-t border-gray-200 mt-12">
                    <div className="p-8">
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
                                <h2 className="text-2xl font-bold text-gray-900">À propos de l&apos;auteur</h2>
                                <p className="text-gray-600">Baptiste Derongs</p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-4">
                                En 2015 j'ai créé la startup Pipplet. J'ai passé ensuite 5 ans à développer cette entreprise que j'ai revendue en 2020 pour la quitte définitivement 3 ans plus tard.
                                Ces années dans l'écosystème des startups ont été passionnantes et intenses. J'ai connu des hauts et des bas, j'ai rencontré des personnes géniales, d'autres moins.

                            </p>
                            <p>
                                Plutôt qu'un livre "comment devenir entrepreneur", j'ai voulu écrire un roman. Une histoire fictive plongeant les lecteurs dans la réalité des startups,
                                Loin des clichés et des success stories médiatisées. Mon objectif est de divertir, tout en donnant quelques clés de compréhension
                                à tous ceux qui s&apos;intéressent à cet écosystème, qu&apos;ils soient entrepreneurs en herbe,
                                investisseurs curieux ou simples observateurs.
                            </p>
                        </div>

                        <div className="mt-8 flex space-x-4">
                            <a href="https://www.linkedin.com/in/bderongs/" className="text-blue-600 hover:text-blue-800">
                                Mon profil LinkedIn
                            </a>
                            <a href="mailto:baptiste.derongs@gmail.com" className="text-blue-600 hover:text-blue-800">
                                Envoyez-moi un message
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 