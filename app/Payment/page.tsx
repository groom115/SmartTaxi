"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/Components/Payment/CheckoutForm";
import Navbar from "@/Components/Navbar";

const Payment = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any
  );

  const options: any = {
    mode: "payment",
    amount: 300,
    currency: "usd",
    clientSecret: process.env.STRIPE_SECRET_KEY,
  };
  return (
    <div>
      <Navbar />
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
