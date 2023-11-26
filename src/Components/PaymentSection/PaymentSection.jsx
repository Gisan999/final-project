import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const PaymentSection = () => {
    return (
        <div className="bg-amber-100 bg-opacity-50">

            <div className="py-60">
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>


            {/* <div className="max-w-lg mx-auto py-24 pt-32 bg-black bg-opacity-50 text-white shadow-md rounded-md overflow-hidden ">
                <div className="bg-blue-600 text-white p-4 flex justify-between">
                    <div className="font-bold text-lg">Credit Card</div>
                    <div className="text-lg"><i className="fab fa-cc-visa"></i></div>
                </div>
                <div className="p-6">
                    <div className="mb-4">
                        <label className="block  font-bold mb-2" htmlFor="card_number">
                            Card Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                            id="card_number" type="text" placeholder="xxxx xxxx xxxx xxxx" />
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiration_date">
                                Expiration Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                id="expiration_date" type="text" placeholder="MM/YY" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
                                CVV
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                id="cvv" type="text" placeholder="XXX" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name_on_card">
                            Name on Card
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                            id="name_on_card" type="text" placeholder="John Doe" />
                    </div>
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline">Save
                        Card
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default PaymentSection;