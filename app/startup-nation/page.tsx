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
                        <div className="relative h-[400px] w-[300px] shadow-2xl rounded-lg overflow-hidden">
                            <Image
                                src="/couverture-livre.jpg"
                                alt="Couverture du livre"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 300px"
                                priority
                            />
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
                                    Prix : 14.00€
                                </h2>
                                <button
                                    onClick={handlePurchase}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-md"
                                >
                                    Acheter maintenant
                                </button>
                            </div>

                            <div className="mt-12 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Contact
                                </h3>
                                <p className="text-gray-600">
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