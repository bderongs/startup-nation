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
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <div className="h-96 w-72 relative">
                            <Image
                                src="/couverture-livre.jpg"
                                alt="Couverture du livre"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 288px"
                            />
                        </div>
                    </div>

                    <div className="p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Startup Nation
                        </h1>

                        <div className="mt-4 text-gray-600">
                            <p className="mb-4 text-justify">
                                20 millions d'euros par ici, 50 millions par là. Tous les jours des Startups annoncent des montants records.
                                Certaines changent le monde, d'autres ne font qu'un passage éphémère.
                            </p>
                            <p className="mb-4 text-justify">
                                Thomas a été bercé par les histoires d'entrepreneurs à succès. Il veut créer le futur Doctolib et devenir
                                le prochain Xavier Niel. Claire est convaincue que les politiques doivent aider ces génies de l'innovation.
                                Etienne lui, veut gagner beaucoup d'argent.
                            </p>
                            <p className="mb-4 text-justify">
                                Engagés tous les trois dans cet univers aux règles floues, ils vous feront découvrir comment naissent
                                et meurent les startups.
                            </p>

                            <div className="mt-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                    Prix : 14.00€
                                </h2>
                                <button
                                    onClick={handlePurchase}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Acheter maintenant
                                </button>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Contact
                                </h3>
                                <p>
                                    Email: votre@email.com<br />
                                    Twitter: @votrecompte
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 