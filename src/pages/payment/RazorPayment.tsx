import { toast } from "react-toastify";
import { orderSaveaApi, paymentWithRazorPayApi } from "../../store/order/orderSlice";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface RazorpayPaymentProps {
    amount: number;
    handleAfterPayment: (data: {
        combined_order_id: string,
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
    }) => void;
}

const RazorpayPayment = ({ amount, handleAfterPayment }: RazorpayPaymentProps) => {
    const { loginDetails } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const handlePaymentFailure = () => {
        document.body.classList.remove("razorpay-active");
        toast.error("Payment failed. Please try again.");
    };

    const handlePaymentSuccess = () => {
        document.body.classList.remove("razorpay-active");
    };

    const initiateRazorpay = (orderId: string, finalAmount: number, combined_order_id: string) => {
        const options = {
            key: "rzp_live_8f8QpAO9LuBeD9",
            amount: finalAmount * 100, // Amount in paise
            currency: "INR",
            name: "Vesimi",
            description: "Test Payment",
            order_id: orderId,
            handler: (response: any) => {
                handleAfterPayment({
                    combined_order_id: combined_order_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                });
            },
            prefill: {
                name: loginDetails?.user?.name || "",
                email: loginDetails?.user?.email || "",
                contact: "",
            },
            theme: { color: "#3399cc" },
            modal: {
                backdropclose: true,
                escape: true,
                handleback: true,
            },
        };

        const razorpay = new window.Razorpay(options);
        document.body.classList.add("razorpay-active");
        razorpay.open();

        razorpay.on("payment.failed", handlePaymentFailure);
        razorpay.on("payment.success", handlePaymentSuccess);
    };

    const handlePayment = async () => {
        if (!window.Razorpay) {
            toast.error("Razorpay SDK failed to load. Check your internet connection.");
            return;
        }

        try {
            const orderResponse = await dispatch(
                orderSaveaApi({
                    owner_id: 1,
                    user_id: loginDetails?.user?.id,
                    payment_type: "razorpay",
                })
            ).unwrap();

            if (!orderResponse?.combined_order_id) {
                toast.error("Failed to create order. Please try again.");
                return;
            }

            const paymentResponse = await dispatch(
                paymentWithRazorPayApi({
                    combined_order_id: orderResponse.combined_order_id,
                    amount,
                    user_id: loginDetails?.user?.id,
                    payment_type: "cart_payment",
                })
            ).unwrap();

            if (!paymentResponse?.payment_details) {
                toast.error("Failed to initiate payment. Please try again.");
                return;
            }

            initiateRazorpay(paymentResponse?.payment_details, amount, orderResponse.combined_order_id);
        } catch (error: any) {
            toast.error(error?.message || "Something went wrong.");
            document.body.classList.remove("razorpay-active");
        }
    };

    return <button className="themeBtnCart" onClick={handlePayment}>Place Order</button>;
};

export default RazorpayPayment;
