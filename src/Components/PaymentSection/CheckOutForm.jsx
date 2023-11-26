import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
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
        }

        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method:{
        //         card: card,
        //         billing_details:{
        //             email: user?.email || 'anonymous',
        //             name: user?.displayName || 'anonymous'
        //         }
        //     }
        // })

        // if(confirmError){
        //     console.log('confirm error');
        // }else{
        //     console.log('payment intent', paymentIntent);
        //     if(paymentIntent.status === 'succeeded'){
        //         console.log('transaction id', paymentIntent.id);
        //         setTransactionId(paymentIntent.id);

        //       if(res.data?.paymentResult?.insertedId){
        //         Swal.fire({
        //             position: "center",
        //             icon: "success",
        //             title: "Thank You For The Payment",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //           navigate('/dashboard/paymentHistory')
        //       }
             
        //     }
        // }
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
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500">Your transaction Id: {transactionId}</p>}

        </form>
     </div>
    );
};

export default CheckOutForm;