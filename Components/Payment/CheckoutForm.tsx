import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6">
      <form className="max-w-md">
        <PaymentElement />
        <button className="bg-yellow-400 p-2 w-full mt-2 rounded-lg">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
