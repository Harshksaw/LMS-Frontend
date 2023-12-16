import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorPaySlice";

// for storing the payment details after successfull transaction

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id,
  );
  // const isPaymentVerified = useSelector((state) => state?.razorpay?.isPaymentVerified);
  // const userData = useSelector((state) => state?.auth?.data);
  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  async function handleSubscription(e) {
    e.preventDefault();
    if (!razorpayKey || !subscription_id) {
      toast.error("Something went wrong");
      return;
    }
    const options = {
      key: razorpayKey,
      subscription_id: subscription_id,
      name: "Coursify Pvt. Ltd.",
      description: "Subscription",
      theme: {
        color: "#F37254",
      },

      handler: async function (response) {
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        paymentDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;

        toast.success("Payment successfull");

        const res = await dispatch(verifyUserPayment(paymentDetails));
        res?.payload?.success
          ? navigate("/checkout/success")
          : navigate("/checkout/fail");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  async function load() {
    await dispatch(getRazorPayId());
    await dispatch(purchaseCourseBundle());
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <HomeLayout>
      <form
        onSubmit={handleSubscription}
        className="min-h-[90vh] flex items-center justify-center text-white"
      >
        <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0{10px_black] rounded-lg relative">
          <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Subscription Bundle
          </h1>

          <div className="px-4 space-y-5 text-center ">
            <p className="text-[17px]">
              This purchase will allow you to access all available course
              <span className="text-yellow-500 font-bold">
                <br />1 Year duration
              </span>{" "}
              All the existing and new launched courseSlice
              <p className="flex item-center justify-center gap-1 text-2x font-bold text-yellow-100">
                <BiRupee /> <span>499</span>only
              </p>
              <div className="text-gray-200">
                <p>100% refund on cancellation </p>
                <p>* Terms and condition applied</p>
              </div>
              <button
                type="submit"
                className="bg-green-500 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-br-lg rounded-bl-lg"
              >
                Buy Now
              </button>
            </p>
          </div>
        </div>
      </form>
    </HomeLayout>
  );
}

export default Checkout;
