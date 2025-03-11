import { toast } from "react-toastify";
import { useAppSelector } from "store/redux.hooks";

declare global {
    interface Window {
        Razorpay: any;
    }
}

const RazorpayPayment = ({ amount, handleAfterPayment }: { amount: number , handleAfterPayment:any}) => {

    const { loginDetails } = useAppSelector((state: any) => state.auth);

    const handlePayment = async () => {
        if (!window.Razorpay) {
            alert("Razorpay SDK failed to load. Check your internet connection.");
            return;
        }

        // ✅ Add class to prevent CSS issues
        document.body.classList.add("razorpay-active");

        const options = {
            key: "rzp_live_8f8QpAO9LuBeD9",
            amount: amount * 100, // Convert to paise
            currency: "INR",
            name: "Vesimi",
            description: "Test Payment",
            handler: async (response: any) => {
                await handleAfterPayment()
                toast.success(`Order is successfull with Payment ID: ${response.razorpay_payment_id}`)
            },
            prefill: {
                name: loginDetails?.user?.name,
                email: loginDetails?.user?.email,
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
        razorpay.open();

        // ✅ Remove class after payment window closes
        razorpay.on("payment.failed", function () {
            document.body.classList.remove("razorpay-active");
        });

        razorpay.on("payment.success", function () {
            document.body.classList.remove("razorpay-active");
        });
    };

    return <button className="themeBtnCart" onClick={handlePayment}>Place Order</button>;
};

export default RazorpayPayment;
