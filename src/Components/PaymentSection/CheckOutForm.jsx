import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [ setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
            navigate('/')
            Swal.fire({
                position: 'center',
                title:'Your Payment successfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    return (
        <div className="max-w-screen-sm bg-cyan-200 bg-opacity-50 rounded-md shadow-2xl shadow-violet-400 p-12 py-24 mx-auto mt-12">
           <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#826790',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}>
            </CardElement>
            <button className="btn btn-sm btn-outline btn-secondary px-7 mt-14 w-full rounded-md my-4" type="submit" disabled={!stripe}>pay</button>
        </form>
     </div>
    );
};

export default CheckOutForm;