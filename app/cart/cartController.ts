'use client';

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux.hooks";
import { getCart, updateCart, deleteCartProduct } from "../../store/cart/cart.slice";
import { useRouter } from "next/navigation";

const CartController = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { cart, isLoading, isSuccess, message } = useAppSelector(
    (state: any) => state.cart
  );
  const { selectedCurrency } = useAppSelector((state: any) => state.auth);

  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [cartQuantity, setCartQuantity] = useState<any>({});

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (cart?.data?.[0]?.cart_items) {
      const initialQuantity = cart.data[0].cart_items.reduce(
        (acc: any, item: any) => {
          acc[item.id] = item.quantity;
          return acc;
        },
        {}
      );
      setCartQuantity(initialQuantity);
    }
  }, [cart]);

  const handleIncrease = (e: any, item: any) => {
    e.stopPropagation();
    setIsCartUpdated(true);
    setCartQuantity((prev: any) => ({ ...prev, [item.id]: Number(prev[item.id]) + 1 }));
  };

  const handleDecrease = (e: any, item: any) => {
    e.stopPropagation();
    if (cartQuantity[item.id] > 1) {
      setIsCartUpdated(true);
      setCartQuantity((prev: any) => ({ ...prev, [item.id]: Number(prev[item.id]) - 1 }));
    }
  };

  const handleRemoveItem = (item: any) => {
    dispatch(deleteCartProduct(item.id));
  };

  const handleUpdateCart = () => {
    const updatedItems = Object.keys(cartQuantity).map((id) => ({
      id: id,
      quantity: cartQuantity[id],
    }));
    dispatch(updateCart({ items: updatedItems }));
    setIsCartUpdated(false);
  };

  const handleProceed = () => {
    router.push("/checkout");
  };

  return {
    isLoadingCartList: isLoading,
    cartListData: cart,
    isLoadingCartSummary: isLoading,
    cartSummaryData: cart?.data?.[0],
    handleProceed,
    handleRemoveItem,
    isLoadingDeleteCartProduct: isLoading,
    router,
    handleDecrease,
    handleIncrease,
    isLoadingUpdateCart: isLoading,
    selectedCurrency,
    handleUpdateCart,
    cartQuantity,
    setCartQuantity,
    isCartUpdated,
    setIsCartUpdated,
  };
};

export default CartController;
