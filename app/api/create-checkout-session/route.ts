import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('Missing Stripe secret key');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-12-18.acacia',
});

// Suppression du paramètre request non utilisé
export async function POST() {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Startup Nation',
                            description: "20 millions d'euros par ici, 50 millions par là. Découvrez comment naissent et meurent les start-ups dans cet univers aux règles floues.",
                            images: [`${process.env.NEXT_PUBLIC_URL}/couverture-livre.jpg`],
                        },
                        unit_amount: 1400, // 14€ en centimes
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/startup-nation`,
            automatic_tax: { enabled: true },
            billing_address_collection: 'required',
            shipping_address_collection: {
                allowed_countries: ['FR', 'BE', 'CH', 'LU'],
            },
        });

        return NextResponse.json({ id: session.id });
    } catch (error) {
        console.error('Stripe error:', error);
        return NextResponse.json(
            { error: 'Error creating checkout session' },
            { status: 500 }
        );
    }
} 