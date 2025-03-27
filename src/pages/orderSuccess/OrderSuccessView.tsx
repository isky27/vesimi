import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SuccessCircle from "../../assets/images/successCircleImg.jpg";
import { resetOrderSuccess } from "../../store/order/orderSlice";
import { useAppDispatch } from "../../store/redux.hooks";

const OrderSuccessView = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      dispatch(resetOrderSuccess());
    };
  }, [dispatch, navigate]);

  return (
    <div className="pageMain">
      <div className="order_success_main">
        <div className="order_Success_Container">
          <figure>
            <img src={SuccessCircle} alt="successCircleImg" />
          </figure>
          <figcaption>
            <h4>Thank you for your order.</h4>
            <p>We will update you soon about your order status. </p>
            <Link to="/" className="Continue_Shopping_Link">
              Continue shopping....
            </Link>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessView;
