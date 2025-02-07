
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); //// initialize stripe account with your next js project. 



// The code below is a server-side API route in a Next.js application that
//  handles payment processing using Stripe. It listens for POST requests, 
// creates a payment intent, and returns a client secret for the payment.
export async function POST(request: NextRequest) { //// Defines an asynchronous function that runs when a POST request (/api/create-payment-intent) is made.
  try {
    const { amount } = await request.json(); /// Extracts JSON data from the request body and
    //Retrieves the amount value from the request.

    const paymentIntent = await stripe.paymentIntents.create({   /// Creates a payment intent using Stripe.
      amount: amount, /// Specifies the amount to be charged.
      currency: "usd", /// Sets the currency to US dollars.
      automatic_payment_methods: { enabled: true },  /// This enables Stripe to automatically determine the best payment method (e.g., card, Apple Pay, etc.).
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    
    
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}

