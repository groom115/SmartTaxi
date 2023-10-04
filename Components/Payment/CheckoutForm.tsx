import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) return;
    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: 56,
      }),
    });

    const secretKey = await res.json();
    console.log(secretKey);
    const { error } = await stripe.confirmPayment({
      clientSecret: secretKey,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/",
      },
    });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6">
      <form className="max-w-md" onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          className="bg-yellow-400 p-2 w-full mt-2 rounded-lg"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
